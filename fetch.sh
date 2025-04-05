#!/bin/bash
set -e
set -x

mkdir -p public/data/fetch
bundle exec ruby fetch_ongeki_score.rb
