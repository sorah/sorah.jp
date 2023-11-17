import { styleEntryContent } from "@/styles/blog/EntryView.css";
import { stylePageMain } from "@/styles/page.css";

export default async function DebianPage() {
  return (
    <main className={stylePageMain}>
      <article className={styleEntryContent}>
        <header>
          <h1>{"Sorah's Debian packages"}</h1>
        </header>

        <section>
          <h2>sorah-rbpkg repo</h2>

          <p>@sorah's Ruby binary packages for Ubuntu and Debian.</p>

          <p>
            Package sources are based on Debian Ruby Team's work and maintained
            to keep closer to them. This project aims to deliver major and
            stable releases early using APT without upgrading distributions or
            waiting new release of distributions. Because of version and branch
            disparity, most ruby-* Debian package are not expected to work with.
            You'll find sorah-rbpkg sourced packages useful to spin your own
            application.
          </p>

          <ul>
            <li>
              Source:{" "}
              <a href="https://github.com/sorah-rbpkg">
                https://github.com/sorah-rbpkg
              </a>
              <ul>
                <li>Built packages are also available at GitHub releases</li>
              </ul>
            </li>
            <li>
              Repository signing key:{" "}
              <a href="/packaging/debian/3F0F56A8.pub.txt">
                https://sorah.jp/packaging/debian/3F0F56A8.pub.txt
              </a>
            </li>
            <li>
              Docker images:{" "}
              <a href="https://github.com/sorah-rbpkg/dockerfiles">
                https://github.com/sorah-rbpkg/dockerfiles
              </a>
            </li>
          </ul>

          <pre>
            <code>
              {[
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ trusty main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ xenial main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ bionic main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ focal main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ jammy main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ stretch main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ buster main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ bullseye main",
                "deb https://cache.ruby-lang.org/lab/sorah/deb/ bookworm main",
              ].join("\n")}
            </code>
          </pre>

          <p>
            <strong>
              Note: this repository is NOT SUPPORTED by Ruby core team.
            </strong>{" "}
            Maintained by Sorah, a Ruby committer, individually.
          </p>

          <h3>Distribution Support Matrix</h3>

          <p>
            <a href="https://github.com/sorah/config/blob/master/etc/debian-packages.txt">
              https://github.com/sorah/config/blob/master/etc/debian-packages.txt
            </a>
          </p>

          <h4>Caveats</h4>

          <ul>
            <li>YJIT is enabled since Ruby 3.2.</li>
            <li>arm64 (aarch64) packages available since Ruby 2.7</li>
            <li>
              All packages are stored in the single repository. I recommend to
              pin ruby-default packages to prevent yourself from unintentionally
              upgrading to newer Ruby minor release.
            </li>
            <li>
              Older packages are all retained in the apt repository. So a list
              of packages is available through apt release file, or check GitHub
              releases.
            </li>
            <li>
              <a href="https://ko-fi.com/J3J8CKMUU" target="_blank">
                Buy me a coffee at ko-fi.com
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>nkmideb repo</h2>

          <ul>
            <li>
              Source:{" "}
              <a href="https://github.com/sorah-rbpkg">
                https://github.com/sorah-rbpkg
              </a>
              <ul>
                <li>Built packages are also available at GitHub releases</li>
              </ul>
            </li>
            <li>
              Repository signing key:{" "}
              <a href="/packaging/debian/C3FF3305.pub.txt">
                https://sorah.jp/packaging/debian/C3FF3305.pub.txt
              </a>
            </li>
            <li>
              Docker images:{" "}
              <a href="https://github.com/sorah-rbpkg/dockerfiles">
                https://github.com/sorah-rbpkg/dockerfiles
              </a>
            </li>
          </ul>

          <pre>
            <code>
              {[
                "deb https://deb.nekom.it/ trusty main",
                "deb https://deb.nekom.it/ xenial main",
                "deb https://deb.nekom.it/ bionic main",
                "deb https://deb.nekom.it/ focal main",
                "deb https://deb.nekom.it/ jammy main",
                "deb https://deb.nekom.it/ stretch main",
                "deb https://deb.nekom.it/ buster main",
                "deb https://deb.nekom.it/ bullseye main",
                "deb https://deb.nekom.it/ bookworm main",
              ].join("\n")}
            </code>
          </pre>
        </section>

        <section>
          <h2>Disclaimer</h2>

          <p>
            ALL FILES IN THESE REPOSITORIES ARE PROVIDED {'"AS IS",'} WITHOUT
            WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
            TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
            COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
            OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </section>
      </article>
    </main>
  );
}
