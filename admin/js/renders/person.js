export function personRender() {
    var entry = this.props.entry;
    var thumbnail = entry.getIn(['data', 'thumbnail']);
    var asset_thumbnail = this.props.getAsset(thumbnail);

    return h('div', {className: 'container'},
      h('h3', {}, entry.getIn(['data', 'title'])),
      h('img', {src: asset_thumbnail.toString(), width: 750, height: 500}),
      this.props.widgetFor('body')
    )
  }