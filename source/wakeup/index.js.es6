"use strict";

jQuery(($) => {
  let AWS_REGION = 'ap-northeast-1';
  let CURRENT_TXT_S3_BUCKET = 'sorah-userland';
  let CURRENT_TXT_S3_KEY = 'wakeup/current.txt';
  let RESULT_S3_BUCKET = 'sorah-userland';
  let RESULT_S3_PREFIX = 'wakeup/result';
  let SQS_QUEUE_NAME = 'sorah-wakeup';
  let LOGS_LOG_GROUP = 'sorah-wakeup';
  let LOGS_LOG_STREAM = 'log';

  var getCurrentTrackInterval = 60;
  var getLogInterval = 60;

  var lastLogTimestamp = null;
  var trackingMessageIds = {};

  var debugInfo = {};

  let updateDebug = (info) => {
    for(var k in info) {
      if (! info.hasOwnProperty(k)) continue;
      if (info[k] == null) {
        delete debugInfo[k];
      } else {
        debugInfo[k] = info[k];
      }
    }
    $('.wakeup-debug-body').text(JSON.stringify(debugInfo, null, "  "));
  };

  let signalReady = () => {
    updateDebug({readyStatus: "ready"});
    $('.wakeup-pane').removeClass('wakeup_loading');
    $('.wakeup-pane').addClass('wakeup_ready');
  }

  // -----

  AWS.config.region = AWS_REGION;

  let cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:983378ac-b3be-4f11-8d28-1bc2c165f0cc',
  });

  // -----

  var sqsQueueUrl = null;

  let sqs = new AWS.SQS({
    region: AWS_REGION,
    credentials: cred,
  });

  let s3 = new AWS.S3({
    region: AWS_REGION,
    credentials: cred,
  })

  let logs = new AWS.CloudWatchLogs({
    region: AWS_REGION,
    credentials: cred,
  })


  // -----

  let getCurrentTrack = () => {
    s3.getObject({
      Bucket: CURRENT_TXT_S3_BUCKET,
      Key: CURRENT_TXT_S3_KEY,
    }, (err, data) => {
      if (err) {
        console.log("Error on getCurrentTrack", err)
        updateDebug({getCurrentTrackError: err, getCurrentTrackInterval: getCurrentTrackInterval});
        setTimeout(getCurrentTrack, getCurrentTrackInterval * 1000);
        return;
      }
      console.log("Current track", data);
      $('.wakeup-current').text(`Current track: ${data.Body.toString()}`);
      updateDebug({getCurrentTrackError: null, currentTrack: {got: new Date(), last: data.LastModified}, getCurrentTrackInterval: getCurrentTrackInterval});
      setTimeout(getCurrentTrack, getCurrentTrackInterval * 1000);
    });
  };

  let getLog = () => {
    logs.getLogEvents({
      logGroupName: LOGS_LOG_GROUP,
      logStreamName: LOGS_LOG_STREAM,
      // startTime: lastLogTimestamp ? lastLogTimestamp + 1 : null,
      // limit: lastLogTimestamp ? null : 50,
    }, (err, data) => {
      if (err) {
        console.log("Error on getLog", err)
        updateDebug({getLogError: err, getLogInterval: getLogInterval});
        setTimeout(getCurrentTrack, getLogInterval * 1000);
        return;
      }

      console.log("log data", data);
      addLogsToView(data.events);

      lastLogTimestamp = data.events[0].timestamp;
      updateDebug({getLogError: null, logs: {lastTimestamp: data.events[0].timestamp}, getLogInterval: getLogInterval});
      setTimeout(getLog, getLogInterval * 1000);
    });
  };

  let addLogsToView = (logs) => {
    let logElems = logs.map((l) => $('<li>').text(`${l.timestamp}: ${l.message}`));
    $('.wakeup-logs ul').prepend(logElems);
  };

  let setupWakeupResult = (msgId) => {
    var elem = $('<div>').addClass('wakeup-result').addClass('wakeup-result-waiting').append($('<div>').addClass('wakeup_msgid').text(msgId)).append($('<div>').addClass('wakeup_state').text('waiting')).attr('data-msgid', msgId);
    $('.wakeup-results').prepend(elem);
  }

  let trackWakeupResult = (msgId) => {
    trackingMessageIds[msgId] = true;
    updateDebug({trackingMessageIds: trackingMessageIds})

    let elem = $(`.wakeup-results .wakeup-result[data-msgid="${msgId}"]`);

    trackingWakeupResult(msgId, elem, 1);
  };

  let trackingWakeupResult = (msgId, elem, count) => {
    console.log(`trackingWakeupResult[${msgId}]`, count);
    s3.getObject({
      Bucket: RESULT_S3_BUCKET,
      Key: `${RESULT_S3_PREFIX}/${msgId}`,
    }, (err, data) => {
      if (err) {
        console.log("Error on trackingWakeupResult", msgId, err)

        let interval = null;
        if ( count < 20 ) interval = 5000;
        if ( count < 10 ) interval = 2000;
        if ( count < 3 ) interval = 1000;

        trackingMessageIds[msgId] = {err: err, count: count, interval: interval};
        updateDebug({trackingMessageIds: trackingMessageIds});

        if (interval) {
          setTimeout(() => { trackingWakeupResult(msgId, elem, count + 1) }, interval);
        } else {
          renderWakeupResult(elem, {"kind": "timeout"})
        }
        return;
      }

      console.log(`trackingWakeupResult[${msgId}]`, data);

      renderWakeupResult(elem, JSON.parse(data.Body.toString()));

      delete trackingMessageIds[msgId];
      updateDebug({trackingMessageIds: trackingMessageIds});
    });
  };

  let renderWakeupResult = (elem, result) => {
    elem.removeClass(`wakeup-result-waiting`);
    elem.addClass(`wakeup-result-${result.kind}`);

    let elemBody = elem.find('.wakeup_state');
    switch(result.kind) {
      case "ack":
        elemBody.text(`ack: ${result.track}`);
        break;
      case "skip":
        elemBody.text(`skip: ${result.reason}`);
        break;
      case "error":
        elemBody.text(`error: ${result.error} (contact Sorah for details)`);
        break;
      case "timeout":
        elemBody.text(`timed out (contact Sorah for details)`);
        break;
    }

    $('.wakeup-button').removeProp('disabled');
  };

  // -----

  let sendWakeupRequest = () => {
    $('.wakeup-button').prop('disabled', true);
    sqs.sendMessage({
      QueueUrl: sqsQueueUrl,
      MessageBody: '{}',
    }, (err, data) => {
      if (err) {
        console.log("Error while SendMessage", err);
        updateDebug({sendWakeupRequestError: err});
        return;
      }
      console.log('sendWakeupRequest resp', data);

      setupWakeupResult(data.MessageId);
      setTimeout(() => { trackWakeupResult(data.MessageId) }, 1500);

      updateDebug({sendWakeupRequestError: null, lastRequestMessageId: data.MessageId});
    });
  }
  $('.wakeup-button').click(sendWakeupRequest);

  // -----

  let getAwsCredentials = () => {
    updateDebug({readyStatus: "getAwsCredentials"});
    return new Promise((resolve, reject) => {
      cred.get((err) => {
        updateDebug({readyStatus: "getAwsCredentials-callback"});
        if (err) {
          console.log("Error while getting CognitoId", err);
          updateDebug({cognitoIdError: err});
          $('.wakeup-loading-msg').text('Something technically wrong :(');
          reject(err);
          return;
        }

        console.log("Cognito Identity Id", cred.identityId);
        updateDebug({cognitoId: cred.identityId});
        resolve(cred);
      });
    });
  }

  let startGettingCurrentTrack = () => {
      updateDebug({readyStatus: "startGettingCurrentTrack"});
    getCurrentTrack();
    return null;
  };

  let startGettingLogs = () => {
    updateDebug({readyStatus: "startGettingLogs"});
    // getLog();
    return null;
  };

  let getQueueUrl = () => {
    updateDebug({readyStatus: "getQueueUrl"});
    return new Promise((resolve, reject) => {
      sqs.getQueueUrl({QueueName: SQS_QUEUE_NAME}, (err, resp) => {
        updateDebug({readyStatus: "getQueueUrl-callback"});
        if (err) {
          console.log("Error while getQueueUrl", err);
          updateDebug({getQueueUrlError: err});
          $('.wakeup-loading-msg').text('Something technically wrong :(');
          reject(err);
          return;
        }

        console.log("queue url", resp);
        sqsQueueUrl = resp.QueueUrl;

        updateDebug({queueUrl: sqsQueueUrl});

        signalReady();
        resolve(resp.QueueUrl);
      });
    });
  };

  getAwsCredentials().
    then(startGettingCurrentTrack).
    then(startGettingLogs).
    then(getQueueUrl);
});
