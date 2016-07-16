---
title: Software Repositories - sorah.jp
---

Sorah (nekom.it) maintains some binary packages and its repositories.

## Debian Packages

### sorah-rbpkg repo

- https://github.com/sorah-rbpkg
- Key: [sorah-rbpkg (3F0F56A8)](./3F0F56A8.pub.txt)

```
deb https://cache.ruby-lang.org/~sorah/deb/ trusty main
deb https://cache.ruby-lang.org/~sorah/deb/ xenial main
```

This is sorah's repo, note that NOT OFFICIALLY SUPPORTED by ruby core team.

#### Packages

Ubuntu (amd64): xenial, trusty

- [ruby-defaults](https://github.com/sorah-rbpkg/ruby-defaults/releases) (ruby, ruby-dev, ruby-all-dev, libruby, ri, ruby-full)
  - `1:2.1.6+0nkmi2~trusty`, `1:2.1.6+0nkmi2~xenial`
  - `1:2.2.4+0nkmi1~trusty`, `1:2.2.4+0nkmi1~xenial`
  - `1:2.3.0+4nkmi2~trusty`, `1:2.3.0+4nkmi2~xenial`
- [ruby2.3](https://github.com/sorah-rbpkg/ruby/releases) (ruby2.3, libruby2.3, ruby2.3-gems, libruby2.3-dbg, ruby2.3-dev, ruby2.3-doc)
  - `2.3.1-5nkmi5~trusty`, `2.3.1-5nkmi5~xenial`
- [ruby2.2](https://github.com/sorah-rbpkg/ruby/releases) (ruby2.2, libruby2.2, libruby2.2-dbg, ruby2.2-dev, ruby2.2-doc)
  - `2.2.5-0nkmi2~trusty`, `2.2.5-0nkmi2~xenial`
- [ruby2.1](https://github.com/sorah-rbpkg/ruby/releases) (ruby2.1, libruby2.1, libruby2.1-dbg, ruby2.l-dev, ruby2.1-doc)
  - `2.1.9-0nkmi1~trusty`, `2.1.9-0nkmi1~xenial`
- [rubygems-integrations](https://github.com/sorah-rbpkg/rubygems-integrations)

Versions may inaccurate, check `apt-cache show-policy` or refer https://github.com/sorah-rbpkg release page

### nekomit-originals repo

- https://github.com/nkmideb
- https://bintray.com/nekomit/deb-originals
- Key: [nekomit-bintray (C3FF3305)](./C3FF3305.pub.txt)

```
deb https://dl.bintray.com/nekomit/deb-originals trusty main
deb https://dl.bintray.com/nekomit/deb-originals xenial main
```

#### Packages

- envchain https://github.com/nkmideb/envchain (source: https://github.com/sorah/envchain )
  - Ubuntu (amd64): xenial, trusty

## Disclaimer

ALL FILES IN THESE REPOSITORIES ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
