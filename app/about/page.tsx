import { Identifier } from "@/components/Identifier";
import {
  styleAboutBioName,
  styleAboutColumns,
  styleAboutListMargin,
} from "@/styles/AboutPage.css";
import { styleIdentifierList } from "@/styles/Identifier.css";
import { styleIdsAvatars, styleIdsIds } from "@/styles/IdsPage.css";
import { styleEntry, styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";
import {
  SiAdobelightroom,
  SiDiscord,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiMastodon,
  SiRss,
  SiSpeakerdeck,
  SiTwitter,
} from "@icons-pack/react-simple-icons";

export default async function AboutPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <section id="bio">
          <header>
            <h1 className={styleAboutBioName}>Sorah Fukumori</h1>
            <div>Software Engineer</div>
          </header>

          <p>
            Sorah is a Rubyist, and a Rustacean. Sorah has a broad expertise,
            including: Cloud infrastructure, Security, Digital identity &amp;
            authentication, Network. And is capable to act as a{" "}
            <i>full-stack</i> engineer ranging from low-level infrastructure to
            web frontend. Sorah's currently working as a software enginner of
            Site Reliability and Corporate Engineering (IT) for{" "}
            <a href="https://cookpad.com/uk">Cookpad</a>.
          </p>

          <p>
            During her spare time, Sorah is sometimes powers conference up with
            Wi-Fi, organizes an international conference on Ruby, contributes to
            Ruby Core, and operates non-commercial BGP AS{" "}
            <a href="https://bgp.tools/as/59128">59128</a>.
          </p>

          <p>
            <i>
              <span>Sorah is also known as:</span> sora_h, soraher,
            </i>{" "}
            そらは, 福森空葉
          </p>
        </section>

        <section id="identifications">
          <h2>Links and Contacts</h2>

          <div className={styleAboutColumns}>
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
                <Identifier href="#">
                  <SiDiscord title="Discord" />
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
                <Identifier href="http://twitter.com/sora_h">
                  <SiTwitter title="Twitter" />
                  @sora_h
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
                  lightroom.adobe.com/gallery
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
              <a href="https://cookpad.com/uk">Cookpad Inc.</a>
            </h3>
            <div>
              Staff Software Engineer (Site Reliability, Security and Corporate
              Engineering)
            </div>
            <span>April 2012 - Present</span>
            <ul>
              <li>
                Plays various important roles in the company. Responsible for:
                End-user facing cloud infrastructure and its reliablity,
                Security, and Employee Productivity (IT and Engineering
                Platform) in the both Cookpad Japan and Global organisation;{" "}
                <i>
                  Note: Cookpad Global develops and operates international
                  service independently from Japan domestic business.
                </i>
              </li>
            </ul>
            <div>
              <section id="proexp_cookpad_it">
                <h4>Corporate Engineering Team (a.k.a. IT)</h4>
                <span>October 2019 - Present</span>
                <ul className={styleAboutListMargin}>
                  <li>
                    Responsible for Security, IdP, MDM, corporate IP network,
                    and Employee Productivity.
                  </li>

                  <li>
                    Delivered a Google Workspace primary domain rename with zero
                    downtime and confusion, including most of external SaaS used
                    in the company. (
                    <a href="https://techlife.cookpad.com/entry/2023/06/28/170451">
                      Blog post
                    </a>
                    , 2023)
                  </li>
                  <li>
                    Contributed to system design of in-house workflow and
                    inquiries management system; built with Rails, React and AWS
                    Step Functions. (2023)
                  </li>

                  <li>
                    Delivered office relocation to Yokohama; As a part of
                    responsibility, delivered IT and Network related changes,
                    but not limited to: Assisted a lot of things by working
                    closely with board members. During the project, Sorah
                    redesigned corporate office networks and moved core
                    functionality to a data centre. (2021)
                  </li>
                  <li>
                    Led technical operation of annual global all-hands meetings;
                    Designed and operated a single live stream with speakers
                    from various locations worldwide, including office premises
                    and remote attendees. (2019-2020)
                  </li>
                  <li>
                    Launched a IT team in company{"'"}s UK office to improve
                    local operations and support coverage of its local
                    employees. Ran onboarding of the initial member hired
                    locally. (2019)
                  </li>
                  <li>
                    Built Jamf and Intune setup; Enabled iOS/Android BYOD based
                    on Intune, migrated all corporate-owned MacBooks to
                    Jamf-controlled, and enabled zero-touch setup for most
                    devices. (2018-2019, 2022)
                  </li>
                  <li>
                    Built multi-region Active Directory fleet for LDAP
                    workloads, along with Azure AD (Entra ID) as a primary
                    IDaaS. (2019)
                  </li>
                  <li>
                    Built in-house web-based tool to self-manage passwords and
                    groups in Active Directory. It also actively replicates data
                    to separate OpenLDAP instance for gradual consolidation with
                    AD. (2017)
                  </li>

                  <li>
                    Organized the company{"'"}s tech conference {"'"}
                    <a href="https://techconf.cookpad.com/">Cookpad TechConf</a>
                    {"'"}; This includes running Wi-Fi for a large number of
                    attendees. (
                    <a href="https://techlife.cookpad.com/entry/2017/01/26/120222">
                      Blog post
                    </a>
                    ; 2017-2019, 2022)
                  </li>
                </ul>
              </section>

              <section id="proexp_cookpad_sre">
                <h4>Site Reliablity Engineering Team</h4>
                <span>May 2015 - Present</span>
                <ul className={styleAboutListMargin}>
                  <li>
                    Responsible for Security and Developer Experience in Japan
                    and Global organisation.
                  </li>
                  <li>
                    Decommissioned a traditional IPsec appliance and replaced
                    with <a href="https://www.twingate.com/">Twingate</a> to
                    enhance security of non-Web based internal servers with
                    per-DNS-name access control. (2022)
                  </li>
                  <li>
                    Launched efforts to improve communication between end-users,
                    support team, and SRE team during service outages and
                    issues.{" "}
                    <a href="https://www.cookpadstatus.com/">
                      A service status page
                    </a>{" "}
                    was also published during the project. (2020)
                  </li>
                  <li>
                    Led severe security incident response at{" "}
                    <a href="https://info.cookpad.com/pr/news/press_2020_0903">
                      private information exposure in the album feature
                      (「料理アルバム」における保存写真の表示不具合)
                    </a>
                    . (2020)
                  </li>
                  <li>
                    Proposed and executed legacy TLS deprecation (TLS 1.0 and
                    1.1), to keep following modern best practices in the
                    industry. Launched a in-house portal to allow service
                    developers to check legacy protocol usage in their systems,
                    and turn them off easily. (
                    <a href="https://techlife.cookpad.com/entry/2021/08/19/100000">
                      Blog post
                    </a>
                    , 2020)
                  </li>
                  <li>
                    Designed and built a IoT infrastructure for{" "}
                    <a href="https://cookpad-mart.com/">Cookpad Mart</a> for
                    fridges and label printers with{" "}
                    <a href="https://www.soracom.io/">SORACOM</a>; This includes
                    Linux base system images for Raspberry Pi with CI, fleet
                    management service including OTA update delivery and network
                    infrastructure to connect server-side systems with deployed
                    IoT devices. (
                    <a href="https://techlife.cookpad.com/entry/2019/04/10/180000">
                      blog post
                    </a>
                    , 2019)
                  </li>
                  <li>
                    Ran in-house ISUCON (web app performance competition) as a
                    company-wide activity in the engineering organisation to
                    share knowledge of designing and building high performance
                    web application. (2019)
                  </li>
                  <li>
                    Built a multi-region aware SSH bastion server that a single
                    connection to a bastion in the closest region can reach
                    servers in all regions and data centers. (2018)
                  </li>
                  <li>
                    Built a in-house mobile app distribution service 'Haneda';
                    All employees can install nightly apps or in-house apps
                    easily into their mobile phones. (2018)
                  </li>
                  <li>
                    Launched a in-house portal to self-manage AWS IAM user and
                    console access; This removed human intervention to issue
                    access keys on their first use. (2018)
                  </li>
                  <li>
                    Assisted a launch of SRE team dedicated for international
                    service located in UK, including onboarding the initial
                    members hired locally. (2017-2018)
                  </li>
                  <li>
                    Migrated GitHub Enterprise Server from on-premises to AWS.
                    We were the initial customer for its AWS support. (
                    <a href="https://techlife.cookpad.com/entry/20150113/104500/ghe-v2">
                      Blog post
                    </a>
                    , 2015)
                  </li>
                  <li>
                    Launched a new infrastructure for{" "}
                    <a href="https://cookpad.com/uk">
                      international service ('Global')
                    </a>{" "}
                    from scratch in a AWS region apart from domestic service,
                    and enhanced use of AWS managed services and features.
                    (2015)
                  </li>
                </ul>
              </section>

              <section id="proexp_cookpad_dev-infra">
                <h4>Development Infrastructure Team</h4>
                <span>April 2012 - April 2015</span>
                <ul>
                  <li>
                    Delivered several Ruby and Rails upgrades of the world's
                    largest Rails monolith.
                  </li>
                  <li>
                    Delivered{" "}
                    <a href="https://github.com/sorah/mamiya">Mamiya</a>, to
                    enable fast deployment of large application to large server
                    fleet.
                  </li>
                  <li>
                    Developed{" "}
                    <a href="https://github.com/sorah/envchain">Envchain</a>,
                    which make use of environment environments for secrets on
                    local development more secure.
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </section>

        <section id="works">
          <h2>Works available as a Open Source Software</h2>

          <div className={styleAboutColumns}>
            <section id="works_himari">
              <h4>
                <a href="https://github.com/sorah/himari">himari</a>
              </h4>
              <span>March 2023</span>
              <ul>
                <li>
                  A small OIDC IdP backed with Omniauth designed for small teams
                  and organisations, and targeted to run in AWS Lambda for low
                  running cost. RubyKaigi and KMC uses this to provide their
                  team members an access to their AWS account and OIDC-enabled
                  AWS ALB using GitHub login, in combination with{" "}
                  <a href="https://github.com/sorah/himari2amc">
                    sorah/himari2amc
                  </a>{" "}
                </li>
              </ul>
            </section>
            <section id="works_needroleshere">
              <h4>
                <a href="https://github.com/sorah/needroleshere">
                  needroleshere
                </a>
              </h4>
              <span>September 2022</span>
              <ul>
                <li>
                  An alternative helper software for AWS IAM Roles Anywhere
                  targeted for Linux server machines, to bring several
                  advantages over the official one including: Scoped exposure of
                  credentials (without giving direct access to the certificate),
                  systemd integration; Built in Rust.
                </li>
              </ul>
            </section>
            <section id="works_apigatewayv2rack">
              <h4>
                <a href="https://github.com/sorah/apigatewayv2_rack">
                  apigatewayv2_rack
                </a>
              </h4>
              <span>October 2022</span>
              <ul>
                <li>
                  A lightweight Ruby library to run a Rack web application in
                  AWS Lambda through API Gateway and Function URL.
                </li>
              </ul>
            </section>
            <section id="works_ecamo">
              <h4>
                <a href="https://github.com/cookpad/ecamo">ecamo</a>
              </h4>
              <span>November 2021</span>
              <ul>
                <li>
                  An HTTP image proxy with JWT authentication for my company
                  {"'"}s internal pages to deal with 3rd party cookie.
                  Integrates with Fastly Compute@Edge for edge caching, as we
                  had employees worldwide. Built in Rust.
                </li>
              </ul>
            </section>
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
                  chat) for <a href="https://rubykaigi.org">RubyKaigi</a>. Built
                  using Rails, React, Amazon Chime SDK, and Amazon IVS.
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
            <i>
              Find more at <a href="https://github.com/sorah">my GitHub</a>.
            </i>
          </p>
        </section>

        <section id="contributions">
          <h2>Selected Activities and Affilications</h2>

          <div>
            <section id="contrib_rk">
              <h3>
                <a href="https://rubykaigi.org/">RubyKaigi</a>
              </h3>
              <div>Conference Organizer, Wi-Fi Network Operations Lead</div>
              <span>September 2017 - present</span>
              <ul>
                <li>
                  <i>
                    RubyKaigi is the world&apos;s largest international
                    conference on the Ruby programming language.
                  </i>
                </li>
                <li>
                  Manages Wi-Fi service for a large number of attendees (approx
                  1,300 devices);{" "}
                  <a href="https://github.com/ruby-no-kai/rubykaigi-nw">
                    GitHub Repo
                  </a>
                  {", "}
                  <a href="https://techlife.cookpad.com/entry/2023/05/31/113000">
                    Blog post (2023)
                  </a>
                  {", "}
                  <a href="https://diary.sorah.jp/2017/09/25/rubykaigi2017-wifi">
                    Blog post (2017)
                  </a>
                </li>
                <li>
                  Run Sponsor Relations; Maintains{" "}
                  <a href="https://github.com/ruby-no-kai/sponsor-app">
                    sponsor-app
                  </a>{" "}
                  for CRM.
                </li>
                <li>
                  Operated virtual venue during COVID-19 for remote attendees;
                  Built a web application called{" "}
                  <a href="https://github.com/ruby-no-kai/takeout-app">
                    takeout-app
                  </a>
                  .
                </li>
                <li>
                  Wi-Fi and Network Operations; Running a large Wi-Fi network
                  for attendees.{" "}
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
                    <a href="http://isucon.net/">ISUCON</a> is the famous web
                    app performance competition of Web applications in Japan. I,{" "}
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
                  Built a web-based system to run the competition (
                  <a href="https://github.com/isucon/isucon10-portal">
                    isucon/isucon10-portal
                  </a>
                  ); This includes judge, benchmark queue, leaderboard, and
                  clarification forms. Used by contestants and admins during the
                  competition.
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
                  performance tuning competition of Web applications in Japan.
                  At 2014,{" "}
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

            <p>
              <i>
                Find more contributions at{" "}
                <a href="https://github.com/sorah">my GitHub</a>.
              </i>
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills, Expertises</h2>
          <ul>
            <li>
              <b>Programming Languages:</b>{" "}
              <a href="http://www.ruby-lang.org">Ruby</a>,{" "}
              <a href="https://www.rust-lang.org/">Rust</a>,{" "}
              <a href="https://www.typescriptlang.org/">TypeScript</a>, and{" "}
              <a href="https://golang.org">Golang</a>
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
              <b>Linux init systems:</b> systemd
            </li>
            <li>
              <b>Security:</b> X.509 fundamentals, Cryptography fundamentals,
              OAuth 2, OpenID Connect, SAML, LDAP; Microsoft Intune, Jamf,
              Active Directory, Microsoft Entra ID
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
                    performance tuning competition of Web applications in Japan.
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
                  <a href="http://isucon.net/">ISUCON</a> is famous web
                  performance tuning competition of Web applications in Japan.
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
