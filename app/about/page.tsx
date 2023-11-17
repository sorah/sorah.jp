import { Identifier } from "@/components/Identifier";
import { styleAboutColumns } from "@/styles/AboutPage.css";
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
  SiGmail,
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
} from "@icons-pack/react-simple-icons";

export default async function AboutPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <section id="bio">
          <h1>Sorah Fukumori</h1>
          <div>Software Engineer</div>
          <div>
            <span>Also known as:</span> sora_h, soraher, そらは, 福森空葉
          </div>

          <p>
            Rubyist, Rustacean wannabe. Currently working as a SWE on Developer
            Experiences and corporate IT. Interested in IP network, distributed
            systems, identity and authentication. Sometimes powering conference
            with Wi-Fi, organizes a Ruby conference, contributes to Ruby Core,
            and operates non-commercial BGP AS.
          </p>
          <p>Lives in Tokyo, Japan.</p>
        </section>
        <section id="identifications">
          <h2>Links</h2>

          <div className={styleIdsIds}>
            <ul className={styleIdentifierList}>
              <li>
                <Identifier href="mailto:her@sorah.jp">
                  <SiGmail title="Mail" />
                  her@sorah.jp
                </Identifier>
              </li>

              <li>
                <Identifier href="https://github.com/sorah">
                  <SiGithub title="GitHub" />
                  github.com/<b>sorah</b>
                </Identifier>
              </li>

              <li>
                <Identifier href="http://twitter.com/sora_h">
                  <SiTwitter title="Twitter" />
                  @sora_h
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
                <Identifier href="https://www.linkedin.com/in/soraher">
                  <SiLinkedin title="LinkedIn" />
                  soraher
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
                <Identifier href="https://speakerdeck.com/u/sorah">
                  <SiSpeakerdeck title="SpeakerDeck" />
                  speakerdeck.com/u/<b>sorah</b>
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
                <Identifier href="http://instagram.com/sora_h">
                  <SiInstagram title="Instagram" />
                  sora_h
                </Identifier>
              </li>
            </ul>
          </div>

          <p>
            <a href="id.html">More →</a>
          </p>
        </section>
        <section id="pro_experiences">
          <h2>Professional Experiences</h2>

          <section id="proexp_cookpad">
            <h3>
              <a href="https://info.cookpad.com/en">Cookpad Inc.</a>
            </h3>
            <div>Software Engineer (Developer Experience &amp; IT)</div>
            <span>April 2012 - present</span>
            <ul>
              <li>
                <a href="https://cookpad.com/">Cookpad</a> is the largest recipe
                sharing platform in the world. I have various roles in the
                company, to achive my mission that keeping developer and
                employee experience and productivity high using technologies. I
                work for both Cookpad Japan and Cookpad Global.
              </li>
              <li>
                <div>
                  <section id="proexp_cookpad_it">
                    <h4>Corporate Engineering Team (IT)</h4>
                    <span>October 2019 - Present</span>
                    <ul>
                      <li>
                        <i>
                          As I'm interested in employees' experience and
                          productivity, I belong to the IT team as an additional
                          role.
                        </i>
                      </li>
                      <li>
                        Built multi-region Active Directory fleet for LDAP
                        workloads, along with Azure AD as a primary IDaaS.
                      </li>
                      <li>
                        Built in-house web-based tool to self-manage passwords
                        and groups in Active Directory.
                      </li>
                      <li>
                        Operated a company tech conference (
                        <a href="https://techconf.cookpad.com/">
                          Cookpad TechConf
                        </a>
                        ); This includes running Wi-Fi for a large number of
                        attendees.
                      </li>
                      <li>
                        Contributed to Jamf and Intune setup; Enabled
                        iOS/Android BYOD based on Intune.
                      </li>
                      <li>
                        Contributed to a corporate IP network; I design and
                        manage networks on all offices and premises. Moved core
                        network functions to data center during 2021 office
                        relocation. Combined with cloud native solutions using
                        AWS Direct Connect.
                      </li>
                      <li>
                        Contributed to annual global all-hands meetings;
                        Designed and operated a single live stream with speakers
                        from various worldwide locations, including premises and
                        remote.
                      </li>
                      <li>
                        Contributed to office relocation in 2021; Primarily
                        taking care of network related things, but not limited
                        to - supported a lot of things by working closely with
                        board members.
                      </li>
                    </ul>
                  </section>

                  <section id="proexp_cookpad_sre">
                    <h4>Site Reliablity Engineering Team</h4>
                    <span>May 2015 - Present</span>
                    <ul>
                      <li>
                        <i>
                          Site Reliablity Engineering ("SRE Team") is
                          responsible to site reliablity and aims to automate
                          operations as much as possible, and keep the
                          infrastructure up to date.
                        </i>
                      </li>
                      <li>
                        <i>
                          SRE team was formerly Infrastructure Team; SRE team
                          had been splitted to Developer Productivity Team, but
                          re-merged later; The team was split between July 2020
                          - June 2021
                        </i>
                      </li>
                      <li>
                        Designed and built a infrastructure{" "}
                        <a href="https://cookpad.com/uk">our global services</a>{" "}
                        from scratch, enhanced use of modern AWS services and
                        features. (2015)
                      </li>
                      <li>
                        Built a multi-region aware SSH bastion server that a
                        single connection to a bastion in the closest region can
                        reach servers in all regions and data centers. (2018)
                      </li>
                      <li>
                        Built a in-house mobile app distribution service
                        "Haneda"; All employees can install nightly apps or
                        in-house apps easily into their mobile phones. (2018)
                      </li>
                      <li>
                        Built a in-house service to self-manage AWS IAM user and
                        console access; This removed human intervention to issue
                        access keys on their first use. (2018)
                      </li>
                      <li>
                        Designed and built a IoT infrastructure for{" "}
                        <a href="https://cookpad-mart.com/">Cookpad Mart</a> for
                        fridges and label printers with{" "}
                        <a href="https://www.soracom.io/">SORACOM</a>; This
                        includes Linux base system images for Raspberry Pi with
                        CI, fleet management service including OTA update
                        delivery and network infrastructure to connect
                        server-side systems with deployed IoT devices. (
                        <a href="https://techlife.cookpad.com/entry/2019/04/10/180000">
                          blog post
                        </a>
                        , 2019)
                      </li>
                      <li>
                        Ran in-house ISUCON contest (performance tuning contest)
                        to share knowledge of designing and building high
                        performance web application. (2019)
                      </li>
                      <li>
                        Launched{" "}
                        <a href="https://www.cookpadstatus.com/">
                          an user facing service status page
                        </a>{" "}
                        to enhance communication between end users, support
                        team, and SRE team during service outages and issues.
                        (2020)
                      </li>
                      <li>
                        Proposed and executed legacy TLS deprecation (TLSv1.0
                        and v1.1), to keep following modern best practices in
                        the industry. Built a in-house tool to allow service
                        developers checking legacy TLS usage in their systems,
                        and turn them off easily. (2020)
                      </li>
                      <li>
                        Contributing a lot of things for daily security
                        responses like managing CVE fix delivery.
                      </li>
                      <li>
                        Leading various incident responses including security,
                        for instance I led incident response at{" "}
                        <a href="https://info.cookpad.com/pr/news/press_2020_0903">
                          private information exposure in the album feature
                          (「料理アルバム」における保存写真の表示不具合)
                        </a>
                        .
                      </li>
                      <li>
                        Managing a relationship with AWS; Taking care of monthly
                        meeting, arranging meetings with our developers and AWS
                        service team.
                      </li>
                    </ul>
                  </section>

                  <section id="proexp_cookpad_dev-infra">
                    <h4>Development Infrastructure Team</h4>
                    <span>April 2012 - April 2015</span>
                    <ul>
                      <li>
                        <i>
                          Development Infrastructure Team aims to improve
                          developer experiences; Merged to SRE team at Jan 2020.
                        </i>
                      </li>
                      <li>
                        Developed{" "}
                        <a href="https://github.com/sorah/mamiya">Mamiya</a>, to
                        enable fast deployment of large application to large
                        server fleet.
                      </li>
                      <li>
                        Developed{" "}
                        <a href="https://github.com/sorah/envchain">Envchain</a>
                        , which make use of environment environments for secrets
                        on local development more secure.
                      </li>
                    </ul>
                  </section>
                </div>
              </li>
            </ul>
          </section>
        </section>
        <section id="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>
              <a href="https://www.youracclaim.com/badges/2c10f002-9172-4fbb-a506-7893a2214b97/public_url">
                AWS Certified Solutions Architect - Associate
              </a>{" "}
              (Nov 2018-2021)
            </li>
          </ul>
        </section>

        <section id="works">
          <h2>Works available as a Open Source Software</h2>

          <div className={styleAboutColumns}>
            <section id="works_takeout-app">
              <h4>
                <a href="https://github.com/ruby-no-kai/takeout-app">
                  takeout-app
                </a>
              </h4>
              <span>August 2021</span>
              <ul>
                <li>
                  A web application for conference virtual venue (live stream,
                  chat) for <a href="https://rubykaigi.org">RubyKaigi</a>
                </li>
              </ul>
            </section>

            <section id="works_sponsor-app">
              <h4>
                <a href="https://github.com/ruby-no-kai/sponsor-app">
                  sponsor-app
                </a>
              </h4>
              <span>November 2018</span>
              <ul>
                <li>
                  A web application for conference sponsorships coordination and
                  arrangement. Used at{" "}
                  <a href="https://rubykaigi.org">RubyKaigi</a>;{" "}
                  <a href="https://sponsorships.rubykaigi.org">
                    sponsorships.rubykaigi.org
                  </a>
                </li>
              </ul>
            </section>

            <section id="works_himeko">
              <h4>
                <a href="https://github.com/sorah/himeko">himeko</a>
              </h4>
              <span>September 2018</span>
              <ul>
                <li>
                  A web application provides AWS IAM access key self service and
                  federated login to AWS management console, based on IAM users.
                </li>
              </ul>
            </section>

            <section id="works_clarion">
              <h4>
                <a href="https://github.com/sorah/clarion">clarion</a>
              </h4>
              <span>December 2017</span>
              <ul>
                <li>
                  Web-based FIDO U2F helper for CLI operations (e.g. SSH logging
                  in)
                </li>
              </ul>
            </section>
            <section id="works_hocho">
              <h4>
                <a href="https://github.com/sorah/hocho">hocho</a>
              </h4>
              <span>December 2016</span>
              <ul>
                <li>
                  Wrapper for{" "}
                  <a href="https://github.com/itamae-kitchen/itamae">Itamae</a>{" "}
                  to make it easily use with a lot of servers by inventory.
                </li>
              </ul>
            </section>
            <section id="works_codily">
              <h4>
                <a href="https://github.com/sorah/codily">codily</a>
              </h4>
              <span>June 2016</span>
              <ul>
                <li>
                  A tool to codificate a configuration of{" "}
                  <a href="https://www.fastly.com/">Fastly CDN</a> in Ruby DSL.
                </li>
              </ul>
            </section>
            <section id="works_acmesmith">
              <h4>
                <a href="https://github.com/sorah/acmesmith">acmesmith</a>
              </h4>
              <span>February 2016</span>
              <ul>
                <li>
                  A simple, effective ACME client to use with many servers and a
                  cloud.
                </li>
                <li>
                  <a href="https://github.com/ietf-wg-acme/acme">
                    ACME Protocol
                  </a>{" "}
                  is used at{" "}
                  <a href="https://letsencrypt.org/">Let's encrypt</a> for
                  automating SSL certificate issuing. Acmesmith is the simplest
                  client that works with several cloud providers for securing
                  keys.
                </li>
              </ul>
            </section>
            <section id="works_ngxomniauth">
              <h4>
                <a href="https://github.com/sorah/nginx_omniauth_adapter">
                  nginx_omniauth_adapter
                </a>
              </h4>
              <span>September 2015</span>
              <ul>
                <li>
                  A Rack app to use{" "}
                  <a href="https://github.com/intridea/omniauth">Omniauth</a>{" "}
                  with nginx.
                </li>
                <li>
                  <a href="http://techlife.cookpad.com/entry/2015/10/16/080000">
                    nginx で omniauth を利用してアクセス制御を行う -
                    クックパッド開発者ブログ
                  </a>
                </li>
              </ul>
            </section>
            <section id="works_mamiya">
              <h4>
                <a href="https://github.com/sorah/mamiya">Mamiya</a>
              </h4>
              <span>September 2014</span>
              <ul>
                <li>
                  Fast deployment tool using tarballs and serf. This is used for{" "}
                  <a href="http://cookpad.com">cookpad.com</a>, a web
                  application backed with 150+ app servers.
                </li>
                <li>
                  Engineers in Cookpad can deploy within around 30 seconds for
                  150+ servers by this software.
                </li>
                <li>
                  <a href="https://speakerdeck.com/sorah/scalable-deployments-how-we-deploy-rails-app-to-150-plus-hosts-in-a-minute">
                    Scalable Deployments - How we deploy Rails app to 150+ hosts
                    in a minute // Speaker Deck
                  </a>
                </li>
              </ul>
            </section>
            <section id="works_envchain">
              <h4>
                <a href="https://github.com/sorah/envchain">Envchain</a>
              </h4>
              <span>June 2014</span>
              <ul>
                <li>
                  Secure credentials in environment variable; set them from OS
                  X's keychain.
                </li>
                <li>
                  <a href="http://techlife.cookpad.com/entry/envchain">
                    OS X キーチェーンから環境変数をセットするツールを作りました
                    - クックパッド開発者ブログ
                  </a>
                </li>
              </ul>
            </section>
            <section id="works_days">
              <h4>
                <a href="https://github.com/sorah/days">days</a>
              </h4>
              <span>January 2013</span>
              <ul>
                <li>
                  Simple blog system built up with Sinatra, written in Ruby.
                </li>
              </ul>
            </section>
          </div>

          <p>
            See more at <a href="https://github.com/sorah">my GitHub</a> and{" "}
            <a href="https://rubygems.org/profiles/sorah">
              my rubygems.org profile
            </a>
            .
          </p>
        </section>

        <section id="contributions">
          <h2>Selected Activities and Affilications</h2>

          <div>
            <section id="contrib_rk">
              <h3>
                <a href="https://rubykaigi.org/">RubyKaigi</a>
              </h3>
              <div>Conference organizer, Wi-Fi Network Operations Lead</div>
              <span>September 2017 - present</span>
              <ul>
                <li>
                  <i>
                    RubyKaigi is the world&apos;s largest international
                    conference on the Ruby programming language.
                  </i>
                </li>
                <li>
                  Running Wi-Fi for a large number of attendees (around 1,200),{" "}
                  <a href="https://diary.sorah.jp/2017/09/25/rubykaigi2017-wifi">
                    Blog post on 2017 (Japanese)
                  </a>
                </li>
                <li>
                  Sponsor Relations; Built a web application called{" "}
                  <a href="https://github.com/ruby-no-kai/sponsor-app">
                    sponsor-app
                  </a>
                  .
                </li>
                <li>
                  Virtual Venue; Built a web application called{" "}
                  <a href="https://github.com/ruby-no-kai/takeout-app">
                    takeout-app
                  </a>
                  .
                </li>
                <li>
                  Wi-Fi and Network Operations; Running a large Wi-Fi network
                  for attendees.{" "}
                  <a href="https://github.com/ruby-no-kai/rubykaigi-nw">
                    https://github.com/ruby-no-kai/rubykaigi-nw
                  </a>
                </li>
              </ul>
            </section>
            <section id="contrib_ruby">
              <h3>
                <a href="http://www.ruby-lang.org">Ruby</a>
              </h3>
              <div>Committer (developer)</div>
              <span>February 2011 - present</span>
              <ul>
                <li>Contribute as a committer of Ruby programming language.</li>
                <li>
                  Also participate as a member of official web site editorial
                  team.
                </li>
              </ul>
            </section>
            <section id="contrib_isucon10">
              <h3>
                <a href="https://isucon.net/archives/54704557.html">ISUCON10</a>
              </h3>
              <div>Organizer and problem writer (final round)</div>
              <span>April 2020 - October 2020</span>
              <ul>
                <li>
                  <i>
                    <a href="http://isucon.net/">ISUCON</a> is the famous
                    performance tuning contest of Web applications in Japan. I,{" "}
                    <a href="https://twitter.com/mirakui">@mirakui</a>, and{" "}
                    <a href="https://twitter.com/rosylilly">@rosylilly</a> were
                    participated as organizer and problem writer for ISUCON10.
                  </i>
                </li>
                <li>
                  Led a incident response for various system failures during the
                  qualification round. Wrote{" "}
                  <a href="https://isucon.net/archives/55084867.html">
                    a postmortem blog post
                  </a>
                  .
                </li>
                <li>
                  Built a web-based system to run the contest (
                  <a href="https://github.com/isucon/isucon10-portal">
                    isucon/isucon10-portal
                  </a>
                  ); This includes judge, benchmark queue, leaderboard, and
                  clarification forms. Used by contestants and admins during the
                  contest.
                </li>
                <li>
                  Managed a contestant server system image in the final round.{" "}
                </li>
                <li>
                  Wrote{" "}
                  <a href="https://github.com/isucon/isucon10-final/tree/master/benchmarker/pushserver">
                    a WebPush server
                  </a>{" "}
                  (RFC8030, RFC8291, RFC8292) for the final round benchmarker in
                  Go.
                </li>
                <li>
                  <a href="https://github.com/isucon/isucon10-final">
                    https://github.com/isucon/isucon10-final
                  </a>
                </li>
                <li>
                  <a href="https://eh-career.com/engineerhub/entry/2020/09/08/103000">
                    ISUCONの問題作成の舞台裏を2020年の出題チーム・白金動物園に聞いてみた
                    - エンジニアHub｜Webエンジニアのキャリアを考える！
                  </a>
                </li>
              </ul>
            </section>

            <section id="contrib_ioi2018">
              <h3>
                <a href="https://ioi2018.jp/">IOI 2018</a> (30th Int'l Olympiad
                in Informatics)
              </h3>
              <div>Tech lead, Host Technical Committee</div>
              <span>July 2017 - September 2018</span>
              <ul>
                <li>
                  <i>
                    IOI is the large, annual international competitive
                    programming contest for secondary school students. IOI 2018
                    was held in Japan, and I participated as a tech lead in its
                    host country technical committee.
                  </i>
                </li>
                <li>
                  Designed and built a whole infrastructure to run on-site
                  competitive programming contest on AWS and on-premises;
                  Deploying judging systems, printing systems, translation
                  support systems, contest seating management systems, on-site
                  IP network with strict security policies.
                </li>
                <li>
                  <a href="https://stats.ioinformatics.org/olympiads/2018">
                    https://stats.ioinformatics.org/olympiads/2018
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jcioi/ioi-htc">
                    https://github.com/jcioi/ioi-htc
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jcioi/ioi_console">
                    https://github.com/jcioi/ioi_console
                  </a>
                </li>
              </ul>
            </section>
            <section id="contrib_isucon4">
              <h3>
                <a href="http://isucon.net/archives/41252218.html">ISUCON4</a>
              </h3>
              <div>Organizer and problem writer</div>
              <span>August 2014 - November 2014</span>
              <ul>
                <li>
                  <a href="http://isucon.net/">ISUCON</a> is the famous
                  performance tuning contest of Web applications in Japan. At
                  2014,{" "}
                  <a href="http://isucon.net/archives/41252218.html">ISUCON4</a>{" "}
                  held and I, <a href="https://twitter.com/mirakui">@mirakui</a>
                  , and <a href="https://twitter.com/rosylilly">@rosylilly</a>{" "}
                  were participated as organizer and problem writer.
                </li>
                <li>
                  <a href="http://admins.bar/4/">
                    4: ISUCON4 Postmortem - Admins Bar
                  </a>
                </li>
              </ul>
            </section>

            <section id="contrib_sinsai">
              <h3>
                <a href="http://sinsai.info/">Sinsai.info</a>
              </h3>
              <div>Developer</div>
              <span>March 2011 - December 2011</span>
              <ul>
                <li>
                  Sinsai.info provided informations for victims of 3.11 Japan
                  disaster.
                </li>
                <li>
                  I re-built Twitter crawler to improve performance, and added
                  location based search using GPS for mobile devices.
                </li>
              </ul>
            </section>

            <section id="contrib_more">
              <h3>And more</h3>
              <ul>
                <li>
                  See more at <a href="https://github.com/sorah">my GitHub</a>.
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section id="skills">
          <h2>Skills, Expertises</h2>
          <ul>
            <li>
              <b>Programming Languages:</b>{" "}
              <a href="http://www.ruby-lang.org">Ruby</a>,{" "}
              <a href="https://www.typescriptlang.org/">TypeScript</a>,{" "}
              <a href="https://www.rust-lang.org/">Rust</a> and{" "}
              <a href="https://golang.org">Go</a>
            </li>
            <li>
              <b>Cloud Platforms:</b>{" "}
              <a href="http://aws.amazon.com/">Amazon Web Services</a>
            </li>
            <li>
              <b>Provisioning:</b>{" "}
              <a href="https://www.terraform.io/">Terraform</a>,{" "}
              <a href="https://puppetlabs.com/">Puppet</a>,{" "}
              <a href="https://github.com/itamae-kitchen/itamae">Itamae</a>
            </li>
            <li>
              <b>Linux Distros:</b> <a href="http://www.debian.org/">Debian</a>,{" "}
              <a href="http://www.ubuntu.com/">Ubuntu</a>,{" "}
              <a href="https://www.archlinux.org/">Arch Linux</a> and{" "}
              <a href="http://www.gentoo.org">Gentoo</a>
            </li>
            <li>
              <b>Security:</b> X.509, OAuth 2, OpenID Connect, SAML, LDAP;
              Microsoft Intune, Jamf, Active Directory, Microsoft Entra ID
            </li>
            <li>
              <b>Web backend frameworks:</b>{" "}
              <a href="http://rubyonrails.org">Ruby on Rails</a> and{" "}
              <a href="http://www.sinatrarb.com">Sinatra</a>
            </li>
            <li>
              <b>Web frontend frameworks:</b> React (React Router, Next.js)
            </li>
            <li>
              <b>IP Network:</b> Cisco IOS, Juniper Junos, Ubiquiti Edgerouter;{" "}
              <a href="http://bird.network.cz">BIRd</a>,{" "}
              <a href="https://www.strongswan.org/">strongSwan</a>, Linux
              networking stack.
            </li>
            <li>
              <b>Databases:</b> MySQL, DynamoDB, Redis
            </li>
          </ul>
        </section>

        <section id="talks">
          <h2>Talks</h2>

          <ul>
            <li>
              <a href="https://speakerdeck.com/sorah/fastly-in-cookpad">
                Fastly in Cookpad
              </a>
              , Fastly Yamagoya 2017 in Tokyo, on October 2017
            </li>
            <li>
              <a href="https://speakerdeck.com/sorah/keynote-oedo-rubykaigi-06">
                Keynote
              </a>
              , Oedo RubyKaigi 06 in Tokyo at March 20th 2017
            </li>
            <li>
              <a href="https://speakerdeck.com/sorah/building-infrastructure-for-our-global-service">
                Building infrastructure for our global service
              </a>
              , Cookpad TechConf 2017 in Tokyo, at January 21st 2017
            </li>
            <li>
              <a href="https://speakerdeck.com/sorah/acmesmith-http2study8">
                acmesmith: An effective ACME client
              </a>
              , http2study #8 in Tokyo, May 30th 2016
            </li>
            <li>
              <a href="https://speakerdeck.com/sorah/scalable-deployments-how-we-deploy-rails-app-to-150-plus-hosts-in-a-minute">
                Scalable Deployments - How we deploy Rails app to 150+ hosts in
                a minute
              </a>
              , RubyKaigi 2014 in Tokyo, on September 2014
            </li>
            <li>
              <a href="https://speakerdeck.com/sorah/parallel-testing-world">
                Parallel Testing World
              </a>
              , RubyConf 2011 in New Orleans, on November 2011
            </li>
          </ul>
        </section>

        <section id="honors">
          <h2>Honors, Awards and Prizes</h2>
          <div>
            <section>
              <h3>
                <a href="https://aws.amazon.com/gameday/">AWS GameDay</a> at
                re:Invent 2022: 1st place (Monday Afternoon)
              </h3>
              <span>December 2022</span>
              <ul>
                <li>
                  "<a href="https://aws.amazon.com/gameday/">AWS GameDay</a> is
                  an interactive team-based learning exercise designed to give
                  players a chance to put their AWS skills to the test in a
                  real-world, gamified, risk-free environment."
                </li>
                <li>
                  <a href="https://twitter.com/unicorn_rentals/status/1598221226781990912">
                    https://twitter.com/unicorn_rentals/status/1598221226781990912
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/unicorn_rentals/status/1598475023156928513">
                    https://twitter.com/unicorn_rentals/status/1598475023156928513
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3>
                <a href="http://isucon.net/archives/45166636.html">ISUCON9</a>:
                1st place
              </h3>
              <span>September 2019 - November 2019</span>
              <ul>
                <li>
                  <i>
                    <a href="http://isucon.net/">ISUCON</a> is a famous
                    performance tuning contest of Web applications in Japan.
                  </i>
                </li>
                <li>
                  At{" "}
                  <a href="http://isucon.net/archives/53570241.html">ISUCON9</a>{" "}
                  in 2019, our team 白金動物園 took 1st place at the final
                  round.
                </li>
                <li>
                  <a href="http://isucon.net/archives/53877800.html">
                    http://isucon.net/archives/53877800.html
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3>
                <a href="https://aws.amazon.com/gameday/">AWS GameDay</a> at
                re:Invent 2019: 1st place (Afternoon)
              </h3>
              <span>December 2019</span>
              <ul>
                <li>
                  "<a href="https://aws.amazon.com/gameday/">AWS GameDay</a> is
                  an interactive team-based learning exercise designed to give
                  players a chance to put their AWS skills to the test in a
                  real-world, gamified, risk-free environment."
                </li>
                <li>
                  <a href="https://twitter.com/AWSreInvent/status/1202050428248248320">
                    https://twitter.com/AWSreInvent/status/1202050428248248320
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>
                <a href="http://isucon.net/archives/45166636.html">ISUCON5</a>:
                2nd place
              </h3>
              <span>September 2015 - November 2015</span>
              <ul>
                <li>
                  <a href="http://isucon.net/">ISUCON</a> is famous performance
                  tuning contest of Web applications in Japan.
                </li>
                <li>
                  At{" "}
                  <a href="http://isucon.net/archives/45166636.html">ISUCON5</a>{" "}
                  in 2015, our team 白金動物園 took 2nd place at the final
                  round.
                </li>
                <li>
                  <a href="http://diary.sorah.jp/2015/11/02/isucon5f">
                    http://diary.sorah.jp/2015/11/02/isucon5f
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3>第 7 回 日本OSS奨励賞 (Japan OSS Contributors Award)</h3>
              <span>March 2012</span>
              <ul>
                <li>
                  <a href="http://ossforum.jp/ossaward7th2">
                    http://ossforum.jp/ossaward7th2
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section id="affiliations">
          <h2>Other Affiliations</h2>

          <section id="communities_kmc">
            <h3>
              <a href="http://www.kmc.gr.jp/">
                Kyoto university Microcomputer Club (KMC)
              </a>
            </h3>
            <div>Member, Sysadmin</div>
            <span>August 2014 - present</span>
            <ul>
              <li>
                Participating for a project running AS (autonomous system) +
                eBGP in KMC network. (
                <a href="http://bgp.he.net/AS59128">AS59128</a>)
              </li>
              <li>
                <a href="https://www.kmc.gr.jp/projects/as/">
                  https://www.kmc.gr.jp/projects/as/
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section id="education">
          <h2>Education</h2>
          <h3>Utsunomiya-shi Yohoku Junior High School '12</h3>
          <span>April 2009 - March 2012</span>
          <ul>
            <li>宇都宮市立陽北中学校</li>
          </ul>
        </section>

        <section id="appearances">
          <h2>Appearances</h2>
          <section>
            <ul>
              <li>
                <a href="https://eh-career.com/engineerhub/entry/2020/09/08/103000">
                  ISUCONの問題作成の舞台裏を2020年の出題チーム・白金動物園に聞いてみた
                  - エンジニアHub｜Webエンジニアのキャリアを考える！
                </a>
              </li>
              <li>
                <a href="http://www.atmarkit.co.jp/news/201104/14/sora.html">
                  http://www.atmarkit.co.jp/news/201104/14/sora.html
                </a>{" "}
                (Japanese)
              </li>
              <li>
                <a href="http://gihyo.jp/magazine/wdpress/archive/2012/vol69#toc">
                  WEB+DB PRESS Vol.69
                </a>
              </li>
            </ul>
          </section>
        </section>
      </article>
    </main>
  );
}
