# nethttp.rb
require 'uri'
require 'net/http'

uri = URI('https://github.com/TomoshigeJ')
res = Net::HTTP.get_response(uri)
puts res.code
