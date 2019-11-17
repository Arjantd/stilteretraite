# _plugins/ext.rb allows you to define custom plugins and/or require
# plugins that otherwise wouldn't work with Jekyll

# Activate jekyll-tagging
# https://github.com/pattex/jekyll-tagging
require 'jekyll/tagging'

module Jekyll
    module Filters
        module ImageURLFilters
            def resized_image_url(input, dimensions, fit=nil)
                return if input.nil?

                uri = URI.parse(URI.encode(input))
                fit_string = fit ? "-#{fit}" : ""
                "#{uri.scheme}://#{uri.host}/#{dimensions}#{fit_string}#{uri.path}"
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::Filters::ImageURLFilters)