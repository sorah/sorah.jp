"use strict";

(function () {
  const beacons = {
    "home4": "https://home4.beacon-edge.nkmi.net/ping.gif",
    "home6ngn": "https://home6ngn.beacon-edge.nkmi.net/ping.gif",
    "cf": "https://img.sorah.jp/ping.gif"
  };
  const resultEndpoint = "https://beacon-collect.nkmi.net/collect.gif";
  const resultEndpoint6 = "https://beacon-collect6.nkmi.net/collect.gif";

  const sleepDuration = 2500;

  const latencyMeasureInterval = 100;
  const latencyMeasureTimeout = 800;
  const latencyMeasureRepeat = 2;


  //-----
  
  const measureQueue = [];
  for (let beaconName in beacons) {
    let beaconUrl = beacons[beaconName];
    for (let i = 0; i < latencyMeasureRepeat; i++) {
      measureQueue.push({"name": beaconName, "url": beaconUrl});
    }
  }

  //-----

  let reportImage = null;
  let attempts = {};
  let latencyImages = [];
  let result = {
  };

  const completeLatencyMeasure = function () {
    for (let beaconName in attempts) {
      gatherResultForBeacon(beaconName);
    }

    const qs = [`s=${result.start}`];
    for (let beaconName in result.bs) {
      let beaconResult = result.bs[beaconName];
      for (let qName in beaconResult) {
        qs.push(`bs.${encodeURIComponent(beaconName)}.${qName}=${encodeURIComponent(beaconResult[qName])}`);
      }
    }

    const reportUrl = `${resultEndpoint}?${qs.join("&")}`;
    window.sorahJpReportImage = new Image();
    window.sorahJpReportImage.src = reportUrl;
    const reportUrl6 = `${resultEndpoint6}?${qs.join("&")}`;
    window.sorahJpReportImage6 = new Image();
    window.sorahJpReportImage6.src = reportUrl6;
  };

  const gatherResultForBeacon = function (beaconName) {
    let beaconAttempts = attempts[beaconName];
    let succeededAttempts = beaconAttempts.filter((v) => v !== null);

    let success = succeededAttempts.length;
    let fail = beaconAttempts.filter((v) => v === null).length;
    if (success > 0) {
      let avg = succeededAttempts.reduce((v, r) => r + v) / success;
      result.bs[beaconName] = {
        "ct": success,
        "cf": fail,
        "l": succeededAttempts.reduce((v, r) => r < v ? r : v), // low
        "a": avg,
        "h": succeededAttempts.reduce((v, r) => r > v ? r : v), // max
        "d":succeededAttempts.reduce((v, r) => r + Math.abs(avg - v)) / success, //mdev
      };
    } else {
      result.bs[beaconName] = {
        "co": success,
        "cf": fail,
      };
    }
  };

  const measureLatency = function () {
    attempts = {};
    result = {
      "bs": {}
    };
    result.start = (new Date()).getTime();
    measureLatencyIterate(1);
  };
  const measureLatencyIterate = function (count) {
    let beacon = measureQueue.shift();
    while (beacon && attempts[beacon.name] && attempts[beacon.name][0] === null) {
      beacon = measureQueue.shift();
    }
    if (!beacon) return completeLatencyMeasure();

    let measure = {"beacon": beacon};
    measure.image = new Image(1,1);
    measure.image.onload = () => measureLatencyIterateCallback(count, measure, false);
    measure.image.src = `${beacon.url}?t=${result.start}:${count}`;
    measure.timeout = setTimeout(() => measureLatencyIterateCallback(count, measure, true), latencyMeasureTimeout);
  };
  const measureLatencyIterateCallback = function (count, measure, timeout) {
    if (measure.done) return;
    measure.done = true;

    if (!attempts.hasOwnProperty(measure.beacon.name)) attempts[measure.beacon.name] = [];

    if (timeout) {
      attempts[measure.beacon.name].push(null);
    } else {
      clearTimeout(measure.timeout);
      let perfData = window.performance.getEntriesByName(measure.image.src)[0];
      let latency = perfData.duration; // perfData.responseStart - perfData.requestStart;
      attempts[measure.beacon.name].push(Math.floor(latency*1000)); // millisecond to microsecond
    }

    measure.timeout = null;

    if (measureQueue.length > 0) {
      setTimeout(() => {
        measureLatencyIterate(count + 1);
      }, latencyMeasureInterval);
    } else {
      completeLatencyMeasure();
    }
  };


const testStorageAvailable= function(type) {
    var storage;
    try {
        storage = window[type];
        var x = 'jp.sorah.nkmi-net-beacon.stortest';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
      return e instanceof DOMException && (
          e.code === 22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          (storage && storage.length !== 0);
    }
}

  const checkRun = function() {
    const lsKey = 'jp.sorah.nkmi-net-beacon.last-run';
    if (testStorageAvailable('localStorage')) {
      const now = (new Date()).getTime();
      const lastRun = localStorage.getItem(lsKey);
      localStorage.setItem(lsKey, now.toString());
      if (!lastRun) {
        return true;
      }
      if ((now - parseInt(lastRun,10)) < 3600000) {
        return false;
      }
    }
    return true;
  };

  document.addEventListener("DOMContentLoaded", function() {
    if (!window.performance) {
      return;
    }
    if (!checkRun()) {
      return;
    }

    setTimeout(function () {
      measureLatency();
    }, sleepDuration);
  });
})();
