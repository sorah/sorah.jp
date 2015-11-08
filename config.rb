###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  # activate :minify_css
  # activate :minify_javascript
  activate :asset_hash
  # activate :relative_assets
  # set :http_prefix, "/Content/images/"
end

activate :es6

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 'sorah.jp'
  s3_sync.region                     = 'ap-northeast-1'
  s3_sync.delete                     = true
  s3_sync.after_build                = false
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = nil
  s3_sync.version_bucket             = false
end

# default_caching_policy public: true, max_age: 60 * 60 * 24, must_revalidate: true
caching_policy 'text/css', public: true, max_age: 60 * 60 * 24 * 2, must_revalidate: false

%w(application/x-font-opentype application/font-sfnt application/vnd.ms-fontobject application/font-woff).each do |type|
  caching_policy type, public: true, max_age: 60 * 60 * 24 * 7, must_revalidate: false
end
