import { resizedImageUrl } from '../image.js'

export function locationRender() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var asset_image = this.props.getAsset(image);

    return h('div', {className: 'container'},
        h('div', {className: 'row'},
            h('div', {className: 'col-md-8 col-md-offset-2'},
                h('h1', {}, entry.getIn(['data', 'title'])),
                h('img', {src: asset_image.toString(), width: 750, height: 500}),
                h('div', {className: 'spacer-20'}),
                this.props.widgetFor('body'),
                h('div', {className: 'spacer-20'}),
                h('div', {className: 'row gallery-items-nocaption'},
                    this.props.widgetsFor('gallery').map((gallery_item, index) => 
                        h('div', {key: index, className: 'col-md-4 col-sm-6 col-xs-6 gallery-grid-item'},
                            h('img', {src: resizedImageUrl(gallery_item.get('data').toString(), 358, 239), width: 358, height: 239})
                        )
                    )
                )
            )
        )
    )
}