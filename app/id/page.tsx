import { Identifier } from "@/components/Identifier";
import { styleIdentifierList } from "@/styles/Identifier.css";
import { styleIdsAvatars, styleIdsIds } from "@/styles/IdsPage.css";
import { styleEntry, styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import {
  SiAdobelightroom,
  SiAmazon,
  SiCoderwall,
  SiDiscord,
  SiFacebook,
  SiFlickr,
  SiFoursquare,
  SiGithub,
  SiHatenabookmark,
  SiInstagram,
  SiLastdotfm,
  SiLaunchpad,
  SiLine,
  SiLinkedin,
  SiMastodon,
  SiRss,
  SiSkype,
  SiSpeakerdeck,
  SiStackoverflow,
  SiSteam,
  SiTumblr,
  SiTwitch,
  SiTwitter,
  SiUntappd,
  SiWikipedia,
  SiBluesky,
} from "@icons-pack/react-simple-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "Sorah Fukumori's links",
  alternates: {
    canonical: "/id",
  },
};

export default async function IdsPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <h1>Identifications</h1>

        <section id="avatar">
          <h2>Avatar</h2>

          <div className={styleIdsAvatars}>
            <p>
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://img.sorah.jp/icon2017.rect-a.480.webp"
                />
                <source
                  type="image/jpg"
                  srcSet="https://img.sorah.jp/icon2017.rect-a.480.jpg"
                />
                <img
                  src="https://img.sorah.jp/icon2017.rect-a.480.jpg"
                  width="200"
                  height="200"
                  alt="Avatar"
                />
              </picture>
              <br />
              Illustrated by{" "}
              <a href="https://pixiv.me/hokuna">北那リン (Rin Hokuna)</a>.
            </p>
            <p>
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://img.sorah.jp/headshot20151031.webp"
                />
                <source
                  type="image/jpg"
                  srcSet="https://img.sorah.jp/headshot20151031.jpg"
                />
                <img
                  src="https://img.sorah.jp/headshot20151031.jpg"
                  width="200"
                  height="200"
                  alt="Headshot"
                />
              </picture>
              <br />
              Taken at 31 October 2015
            </p>
          </div>
        </section>

        <section id="web_resources">
          <h2>Web resources</h2>

          <div className={styleIdsIds}>
            <ul className={styleIdentifierList}>
              <li>her@sorah.jp</li>
              <li>sorah@hey.com</li>
              <li>sorah@tubusu.net</li>
              <li>sora134@gmail.com (don&apos;t mail here)</li>
              <li>
                <Identifier href="http://twitter.com/sora_h">
                  <SiTwitter title="Twitter" />
                  @sora_h
                </Identifier>
              </li>
              <li>
                <Identifier href="https://twitter.com/sorah_">
                  <SiTwitter title="Twitter" />
                  @sorah_
                </Identifier>
              </li>
              <li>
                <Identifier href="https://hachyderm.io/@sorah">
                  <SiMastodon title="Mastodon" />
                  hachyderm.io/sorah
                </Identifier>
              </li>
              <li>
                <Identifier href="https://handon.club/@sorah">
                  <SiMastodon title="Mastodon" />
                  handon.club/sorah
                </Identifier>
              </li>
              <li>
                <Identifier href="https://pawoo.net/@sorah">
                  <SiMastodon title="Mastodon" />
                  pawoo.net/sorah
                </Identifier>
              </li>
              <li>
                <Identifier href="https://bsky.app/profile/sorah.jp">
                  <SiBluesky title="Bluesky" />
                  bsky.app/profile/sorah.jp
                </Identifier>
              </li>
              <li>
                <Identifier href="http://www.facebook.com/sorahjp">
                  <SiFacebook title="Facebook" />
                  sorahjp
                </Identifier>
              </li>
              <li>
                <Identifier href="https://blog.sorah.jp/">
                  <SiRss title="Blog" />
                  blog.sorah.jp
                </Identifier>
              </li>
              <li>
                <Identifier href="https://diary.sorah.jp/">
                  <SiRss title="Blog" />
                  diary.sorah.jp
                </Identifier>
              </li>
              <li>
                <Identifier href="https://github.com/sorah">
                  <SiGithub title="GitHub" />
                  github.com/<b>sorah</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="https://www.linkedin.com/in/soraher">
                  <SiLinkedin title="LinkedIn" />
                  soraher
                </Identifier>
              </li>
              <li>
                <Identifier href="https://www.flickr.com/photos/sora_h/">
                  <SiFlickr title="Flickr" />
                  sora_h
                </Identifier>
              </li>
              <li>
                <Identifier href="https://lightroom.adobe.com/gallery/5d12dab6ef334874937111c4466297c1">
                  <SiAdobelightroom title="Adobe Lightroom Gallery" />
                  lightroom.adobe.com gallery
                </Identifier>
              </li>
              <li>
                <Identifier href="#">
                  <SiDiscord title="Discord" />
                  soraher
                </Identifier>
              </li>
              <li>
                <Identifier href="#">
                  <SiSkype title="Skype" />
                  sora_her
                </Identifier>
              </li>
              <li>
                <Identifier href="https://speakerdeck.com/u/sorah">
                  <SiSpeakerdeck title="SpeakerDeck" />
                  speakerdeck.com/u/<b>sorah</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="https://coderwall.com/sorah">
                  <SiCoderwall title="Coderwall" />
                  coderwall.com/<b>sorah</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="http://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:Soraher">
                  <SiWikipedia title="Wikipedia" />
                  ja.wikipedia.org <b>Soraher</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="https://launchpad.net/~sorah">
                  <SiLaunchpad title="Launchpad" />
                  launchpad.net/~<b>sorah</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="https://foursquare.com/sora_h">
                  <SiFoursquare title="Foursquare" />
                  sora_h
                </Identifier>
              </li>
              <li>
                <Identifier href="http://b.hatena.ne.jp/sora_h/">
                  <SiHatenabookmark title="Hatena" />
                  b.hatena.ne.jp/<b>sora_h</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="https://untappd.com/user/sorah">
                  <SiUntappd title="Untappd" />
                  untappd.com/user/<b>sorah</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="http://last.fm/user/sora_h">
                  <SiLastdotfm title="Last.fm" />
                  last.fm/user/<b>sora_h</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="http://amzn.to/sora_h">
                  <SiAmazon title="Amazon" />
                  amzn.to/sora_h
                </Identifier>
              </li>
              <li>
                <Identifier href="http://scrap.sorah.jp/">
                  <SiTumblr title="Tumblr" />
                  scrap.sorah.jp
                </Identifier>
              </li>
              <li>
                <Identifier href="https://cookpad.com/kitchen/4209753">
                  https://cookpad.com/kitchen/4209753
                </Identifier>
              </li>
              <li>
                <Identifier href="http://instagram.com/sora_h">
                  <SiInstagram title="Instagram" />
                  sora_h
                </Identifier>
              </li>
              <li>
                <Identifier href="http://www.ustream.tv/channel/sorah">
                  ustream.tv/sorah
                </Identifier>
                ,{" "}
                <Identifier href="http://www.ustream.tv/channel/soraher">
                  soraher
                </Identifier>
              </li>
              <li>
                <Identifier href="https://www.twitch.tv/soraher">
                  <SiTwitch title="Twitch" />
                  twitch.tv/<b>soraher</b>
                </Identifier>
              </li>
              <li>
                <SiLine title="LINE" /> (main), sora_her (sub)
              </li>
              <li>
                <Identifier href="http://hiroba.dqx.jp/sc/character/823055796788/">
                  hiroba.dqx.jp/sc/character/<b>823055796788</b>/
                </Identifier>
              </li>
              <li>FFXIV (IGN Hidden) at Tiamat, Gaia</li>
              <li>
                <Identifier href="https://steamcommunity.com/id/sora_h">
                  <SiSteam title="Steam" />
                  steamcommunity.com/id/<b>sora_h</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="http://stackoverflow.com/users/586041/sora-h">
                  <SiStackoverflow title="Stackoverflow" />
                  stackoverflow.com <b>sora-h</b>
                </Identifier>
              </li>
              <li>
                <Identifier href="http://mixi.jp/show_profile.pl?id=24396733">
                  mixi.jp/show_profile.pl?id=24396733
                </Identifier>
              </li>
              <li>
                <Identifier href="https://mixi.social/@sorah">
                  mixi.social/@sorah
                </Identifier>
              </li>
            </ul>
          </div>
        </section>

        <section id="ssh">
          <h2>SSH public key</h2>

          <p>
            <a href="/ssh-key.txt">ssh-key.txt</a> (
            <a href="/ssh-key.txt.asc">with pgp clearsign</a>)
          </p>
        </section>

        <section id="pgp">
          <h2>PGP public key</h2>

          <p>My active keys are:</p>

          <ul>
            <li>
              Personal <a href="/pgp-pubkeys/F4C0895C.txt">F4C0895C</a>: 71D9
              EF35 7AF6 410E 75E1 C3AD 34F7 A7C2 F4C0 895C, created:2015-01-21
              expires:2025-01-18
            </li>
            <li>
              Work <a href="/pgp-pubkeys/3DA8F24C.txt">3DA8F24C</a>: 1183 EFBE
              9926 7C3F B700 F728 6F49 EB76 3DA8 F24C, created:2012-10-24
            </li>
          </ul>

          <h3>History</h3>

          <ul>
            <li>
              <a href="/pgp-pubkeys/F4C0895C.txt">F4C0895C</a>: 71D9 EF35 7AF6
              410E 75E1 C3AD 34F7 A7C2 F4C0 895C, created:2015-01-21
              expires:2025-01-18 <strong>current</strong>
            </li>
            <li>
              <a href="/pgp-pubkeys/3DA8F24C.txt">3DA8F24C</a>: 1183 EFBE 9926
              7C3F B700 F728 6F49 EB76 3DA8 F24C, created:2012-10-24{" "}
              <strong>current</strong>
            </li>
            <li>
              <a href="/pgp-pubkeys/31604EB9.txt">31604EB9</a>: E6F2 A50C 954C
              B791 38DE 3B4A 74AF 0D63 3160 4EB9, created:2013-08-23
              expires:2018-08-22
            </li>
            <li>
              <a href="/pgp-pubkeys/73E3B6AC.txt">73E3B6AC</a>: B93A DDCB 4DB8
              E71D 0113 5BBD 81CC CD56 73E3 B6AC, created:2010-06-21
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
