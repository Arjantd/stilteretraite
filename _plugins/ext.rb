# _plugins/ext.rb allows you to define custom plugins and/or require
# plugins that otherwise wouldn't work with Jekyll

# Activate jekyll-tagging
# https://github.com/pattex/jekyll-tagging
require 'jekyll/tagging'

module Jekyll
    module Filters
        module ImageURLFilters
            def resized_image_url(input, width, height, fit='')
                return if input.nil?

                "/.netlify/images?url=/#{input}&fit=#{fit}&w=#{width}&h=#{height}"
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