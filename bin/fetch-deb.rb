#!/usr/bin/env ruby
require 'open-uri'
require 'pp'
require 'json'
require 'fileutils'

repos = {
  ruby: {
    xenial: 'https://cache.ruby-lang.org/lab/sorah/deb/dists/xenial/main/binary-amd64/Packages',
    trusty: 'https://cache.ruby-lang.org/lab/sorah/deb/dists/trusty/main/binary-amd64/Packages',
  }
}

repos = repos.map do |repo, dists|
  [repo, dists.map do |dist, url|
    # source->package->versions
    debs = open(url, 'r', &:read)
      .each_line
      .slice_after{ |_| _.chomp.empty? }
      .map { |chunk| chunk.map(&:chomp).reject(&:empty?).slice_before { |_| _[0] != ' ' }.map { |_| key, val = _.first.split(': ', 2); [key.sub(/: ?\z/,''), [val.nil? || val.empty? ? nil : val, *_[1..-1].map{ |_| _.sub(/^ /,'') }].compact] }.to_h }
      .group_by{ |_| (_['Source'] || _['Package'])[0] }
      .map{ |source, versions| [source, versions.group_by{ |_| _['Package'][0] }] }
      .to_h

    [dist,
      debs.map do |source, packages|
        [source,
          packages.map do |package, versions|
            [ package, versions: versions.map { |_| _['Version'][0] } ]
          end.to_h
        ]
      end.to_h
    ]
  end.to_h]
end.to_h

FileUtils.mkdir_p File.join(__dir__, '..', 'data')
File.write File.join(__dir__, '..', 'data', 'deb.yml'), "#{repos.to_json}\n"
