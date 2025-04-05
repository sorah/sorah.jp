#!/usr/bin/env ruby
require 'nokogiri'
require 'json'
require 'open-uri'
html = Nokogiri::HTML(URI.open('https://ongeki-score.net/music', 'r', { 'User-Agent' => 'sorah-jp-build (+https://github.com/sorah/sorah.jp)' }, &:read))

songs = []
html.search('table.music-list tbody tr').each do |tr|
  songs.push({
    title: tr.at('a').inner_text,
    difficulty: tr.search('td')[1].inner_text,
    constant: tr.at('.sort_extra_level').inner_text.to_f,
    estimated: tr.at('.estimated-rating') ? true : false,
  })
end

File.write 'public/data/fetch/ongeki_songs.json', JSON.pretty_generate(songs)
