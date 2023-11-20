import { resizedImageUrl } from '../image.js'

export function eventRender() {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'image']);
    var asset_image = this.props.getAsset(image);

    var fromDate = new Date(entry.getIn(['data', 'from_date']));
    var toDate = new Date(entry.getIn(['data', 'to_date']));

    return h('div', {className: 'container'},
      h('div', {className: 'row'},
        h('h1', {}, entry.getIn(['data', 'title'])),
        h('div', {className: 'row'},
          h('div', {className: 'col-md-8 content-block'},
            h('div', {className: 'post-media'},
              h('img', {src: resizedImageUrl(asset_image.toString(), '750x500'), width: 750, height: 500})
            ),
            h('div', {className: 'row'},
              h('div', {className: 'col-md-6 col-sm-6'},
                h('span', {className: 'event-date'},
                  h('span', {className: 'date'}, fromDate.getDate()),
                  h('span', {className: 'month'}, new Intl.DateTimeFormat('nl', { month: 'short' }).format(fromDate)),
                  h('span', {className: 'year'}, fromDate.getFullYear())
                ),
                h('span', {className: 'meta-data'}, `${fromDate.getDate()} ${new Intl.DateTimeFormat('nl', { month: 'short' }).format(fromDate)} ${fromDate.getFullYear()} - ${toDate.getDate()} ${new Intl.DateTimeFormat('nl', { month: 'short' }).format(toDate)} ${toDate.getFullYear()}`),
                h('a', {href: '#', className: 'btn btn-primary btn-event-single-book'}, 'Aanmelden'),
                h('a', {href: '#', className: 'basic-link', style: { marginTop: '16px' }},
                  h('i', {className: 'fa fa-angle-right'}),
                  'Bekijk locatie'
                )
              ),
              h('div', {className: 'col-md-6 col-sm-6'},
                h('ul', {className: 'list-group'},
                  h('li', {className: 'list-group-item'},
                    '(location)',
                    h('span', {className: 'badge'}, 'Locatie')
                  ),
                  h('li', {className: 'list-group-item'},
                    entry.getIn(['data', 'length_of_time']),
                    h('span', {className: 'badge'}, 'Duur')
                  ),
                  h('li', {className: 'list-group-item'},
                    `€ ${entry.getIn(['data', 'price'])}`,
                    h('span', {className: 'badge'}, 'Kosten')
                  )
                )
              )
            ),
            h('div', {className: 'spacer-20'}),
            h('p', {className: 'lead'}, entry.getIn(['data', 'lead_text'])),
            this.props.widgetFor('body')
          )
        )
      )
    )
  }