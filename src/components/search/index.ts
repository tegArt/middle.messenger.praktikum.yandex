import Component from '../../core/component'
import './search.scss'

interface SearchProps {
  events?: Object
}

export default class Search extends Component {
  constructor(props: SearchProps) {
    super('div', {...props, className: 'chat-search'})
  }

  render(): string {
    return `
      <input type="text" value="" placeholder="Поиск..." class="search-field">
    `
  }
}
