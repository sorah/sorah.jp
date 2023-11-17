#!/usr/bin/env ruby
require 'aws-sdk-s3'
require 'aws-sdk-cloudfront'
require 'securerandom'
require 'digest/md5'
require 'logger'
require 'thread'

$stdout.sync = true

CACHE_CONTROLS = {
  'font/woff2' => 'max-age=31536000',
  'text/css; charset=utf-8' => 'max-age=31536000',
  'text/javascript; charset=utf-8' => 'max-age=31536000',
  'text/plain; charset=utf-8' => 'public, must-revalidate, s-maxage=31536000',
  'text/html; charset=utf-8' => 'public, must-revalidate, s-maxage=31536000',
  'application/atom+xml; charset=utf-8' => 'public, must-revalidate, s-maxage=86400',
  'application/json; charset=utf-8' => 'public, must-revalidate, s-maxage=86400',
}
DISTRIBUTIONS = {
  'sorah-jp' => 'EVCPGMJHRENHF',
}

bucket = 'sorah-jp'
@s3 = Aws::S3::Client.new(region: 'us-west-2', logger: Logger.new($stdout))

srcdir, prefix = ARGV[0,2]
abort "usage: #$0 srcdir prefix" unless srcdir && prefix
site_id = ARGV[2]

present_etags = @s3.list_objects_v2(bucket: bucket, prefix: prefix).flat_map(&:contents).map do |c|
  [c.key, c.etag]
end.to_h

remaining_keys = {}
uploaded_keys = {}

Op = Struct.new(:op, :args, keyword_init: true)
queue = Queue.new

ths = 30.times.map do
  Thread.new  do
    while op = queue.pop
      case op.op
      when :put_object
        begin
          file = op.args.delete(:file)
          if file
            io = File.open(file, 'rb')
            op.args[:body] = io
          end
          @s3.put_object(op.args)
        ensure
          io&.close
        end
      when :delete_object
        @s3.delete_object(op.args)
      else
        raise op.inspect
      end
    end
  end
end

Dir[File.join(srcdir, '**', '*')].each do |path|
  next if File.directory?(path)
  key = "#{prefix}#{path[(srcdir.size + File::SEPARATOR.size)..-1].split(File::SEPARATOR).join('/')}"
    .sub(/\.html$/,'')

  case path
  when File.join(srcdir, 'index.html')
    key = "#{prefix}index.html"
  when File.join(srcdir, 'feeds', 'feed.xml')
    key = "#{prefix}feed"
  when File.join(srcdir, 'feeds', 'feed.json')
    key = "#{prefix}feed.json"
  end

  remaining_keys[key] = true

  present_etag = present_etags[key]
  if present_etag
    local_etag = %{"#{Digest::MD5.file(path)}"}
    next if present_etag == local_etag
  end

  content_type = case path
                 when /\.(?:txt|asc)$/
                   'text/plain; charset=utf-8'
                 when /\.html$/
                   'text/html; charset=utf-8'
                 when /\.js$/
                   'text/javascript; charset=utf-8'
                 when /\.css$/
                   'text/css; charset=utf-8'
                 when /feed\.xml$/
                   'application/atom+xml; charset=utf-8'
                 when /\.json$/
                   'application/json; charset=utf-8'
                  when /\.woff2$/
                    'font/woff2'
                 end

    cache_control = CACHE_CONTROLS[content_type]
    queue.push Op.new(op: :put_object, args: {
      bucket: bucket,
      key: key,
      content_type: content_type,
      cache_control: cache_control,
      file: path,
    })
    uploaded_keys[key] = true
end

keys_to_delete = present_etags.dup
remaining_keys.each_key { keys_to_delete.delete(_1) }
keys_to_delete.each_key do |key|
  queue.push Op.new(op: :delete_object, args: {
    bucket: bucket,
    key: key,
  })
end

queue.close
ths.each(&:join)

pp(uploaded_keys.keys.reject { _1.start_with?("#{prefix}_next/") })

dist_id = DISTRIBUTIONS[site_id]
if dist_id
  @cf = Aws::CloudFront::Client.new(region: 'us-east-1', logger: Logger.new($stdout))
  resp = @cf.create_invalidation(
    distribution_id: dist_id,
    invalidation_batch: {
      paths: {
        quantity: 1,
        items: ['/*'],
      },
      caller_reference: ENV['GITHUB_ACTION'] ? "#{ENV['GITHUB_ACTION']}_#{ENV['GITHUB_RUN_ID']}" : SecureRandom.hex(10),
    },
  )
  @cf.wait_until(:invalidation_completed, { distribution_id: dist_id, id: resp.invalidation.id })
else
  warn "No distribution found for #{site_id.inspect}"
end
