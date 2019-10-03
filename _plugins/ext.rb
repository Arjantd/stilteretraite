# _plugins/ext.rb allows you to define custom plugins and/or require
# plugins that otherwise wouldn't work with Jekyll

# Activate jekyll-tagging
# https://github.com/pattex/jekyll-tagging
require 'jekyll/tagging'

module Jekyll
    module Filters
        module ImageURLFilters
            def resized_image_url(input, dimensions)
                return if input.nil?

                uri = URI.parse(URI.encode(input))
                "#{uri.scheme}://#{uri.host}/#{dimensions}#{uri.path}"
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::Filters::ImageURLFilters)