import { Identifier } from "@/components/Identifier";
import {
  styleMainAvatar,
  styleMainAvatarImg,
  styleMainAvatarName,
  styleMainBio,
  styleMainContent,
  styleMainIds,
  styleMainMore,
  styleMainSection,
} from "@/styles/Home.css";
import {
  styleIdentifierList,
  styleIdentifierListBreak,
} from "@/styles/Identifier.css";
import {
  SiGithub,
  SiGmail,
  SiMastodon,
  SiRss,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import { SiTwitter } from "@/components/SiTwitter";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  return (
    <main className={styleMainSection}>
      <div className={styleMainAvatar}>
        <picture>
          <source
            type="image/webp"
            srcSet="https://img.sorah.jp/icon2017.rect-a.480.webp"
          />
          <source
            type="image/jpeg"
            srcSet="https://img.sorah.jp/icon2017.rect-a.480.jpg"
          />
          <img
            className={styleMainAvatarImg}
            alt=""
            src="https://img.sorah.jp/icon2017.rect-a.480.jpg"
          />
        </picture>
      </div>
      <div className={styleMainContent}>
        <h1 className={styleMainAvatarName}>Sorah Fukumori</h1>

        <p className={styleMainBio}>
          is a Rubyist and a Rustacean who works in Cloud, Security, Systems,
          and Network. Currently Sorah&apos;s a software engineer working for{" "}
          <a href="https://ivry.jp/company/">IVRy</a>.
        </p>

        <nav className={styleMainIds}>
          <ul className={styleIdentifierList}>
            <li>
              <Identifier href="https://github.com/sorah">
                <SiGithub title="GitHub" />
                @sorah
              </Identifier>
            </li>
            <li>
              <Identifier href="https://twitter.com/sora_h">
                <SiTwitter title="Twitter" />
                <span>@sora_h</span>
              </Identifier>
            </li>
            <li>
              <Identifier href="mailto:her@sorah.jp">
                <SiGmail title="Mail" />
                her@sorah.jp
              </Identifier>
            </li>
          </ul>
          <ul className={styleIdentifierList}>
            <li className={styleIdentifierListBreak}>
              <Identifier href="https://hachyderm.io/@sorah">
                <SiMastodon title="Fediverse" />
                hachyderm.io/@sorah
              </Identifier>
            </li>
            <li>
              <Identifier href="https://handon.club/@sorah">
                <SiMastodon title="Fediverse" />
                handon.club/@sorah
              </Identifier>
            </li>
            <li>
              <Identifier href="http://instagram.com/sora_h">
                <SiInstagram title="Instagram" />
                sora_h
              </Identifier>
            </li>
          </ul>
          <ul className={styleIdentifierList}>
            <li className={styleIdentifierListBreak}>
              <Identifier href="https://blog.sorah.jp/">
                <SiRss title="blog" />
                blog.sorah.jp
              </Identifier>
            </li>
            <li>
              <Identifier href="https://diary.sorah.jp/">
                <SiRss title="blog" />
                diary.sorah.jp
              </Identifier>
            </li>
          </ul>
        </nav>
        <p className={styleMainMore}>
          <Link href="/about">More →</Link>
        </p>
      </div>
    </main>
  );
}
