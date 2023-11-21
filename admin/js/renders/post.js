import { resizedImageUrl } from '../image.js'

export function postRender() {
    var entry = this.props.entry;
    var banner_image = entry.getIn(['data', 'banner_image']);
    var asset_banner_image = this.props.getAsset(banner_image);

    var widgetBody = this.props.widgetFor('body')
    widgetBody.props.value = widgetBody.props.value.replaceAll(/{% youtube \"https:\/\/www.youtube.com\/watch\?v=(.*)" %}/g, '<div class="format-video"><a href="https://www.youtube.com/watch?v=$1" class="media-box magnific-video"> <img src="https://img.youtube.com/vi/$1/mqdefault.jpg" width="555" height="370" alt="" /></a></div>');

    return h('div', {className: 'container'},
      h('div', {className: 'row'},
        h('div', {className: 'col-md-8 content-block'},
          h('h1', {}, entry.getIn(['data', 'title'])),
          h('div', {className: 'post-media'},
            h('img', {src: resizedImageUrl(asset_banner_image.toString(), '750x500'), width: 750, height: 500}),
          h('div', {className: 'post-content'},
              widgetBody
            ),
            h('div', {className: 'tag-cloud'},
              h('i', {className: 'fa fa-tags'}),
              this.props.widgetsFor('tags').map((tag, index) => 
                h('a', {key: index}, tag.get('data'))
              )
            )
          )
        )
      )
    )
  }