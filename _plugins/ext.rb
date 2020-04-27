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
        module OpenGraphFilters
            def og_image(page, paginator)
                site = @context.registers[:site]
                case page["layout"]
                when "post"
                    page["banner_image"]
                when "posts"
                    paginator["posts"][0]["banner_image"]
                when "locations"
                    location = site.collections["locations"].docs.detect { |d| d.path.end_with? page["locations"][0]}
                    location["image"]
                when "events"
                    site.collections["events"].docs[0]["image"]
                else
                    page["image"]
                end
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::Filters::ImageURLFilters)
Liquid::Template.register_filter(Jekyll::Filters::OpenGraphFilters)