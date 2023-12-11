export function testimonialsRender() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var asset_image = this.props.getAsset(image);

    return h('div', {className: 'container'},
      h('h1', {}, entry.getIn(['data', 'title'])),
      this.props.widgetsFor('testimonials').map((testimonial, index) => 
        h('div', {key: index, className: 'mb-5'},
          h('div', {className: 'testimonial-block'},
            h('blockquote',{},
              h('h3', {}, testimonial.getIn(['data', 'title']).toString()),
              h('h4', {}, testimonial.getIn(['data', 'subtitle']).toString()),
              testimonial.getIn(['widgets', 'text'])
            ),
            h('div', {className: 'testimonial-info'},
              h('div', {className: 'testimonial-info-in'},
                h('strong', {}, testimonial.getIn(['data', 'participant']))
              )
            )
          )
        )
      )
    )
  }