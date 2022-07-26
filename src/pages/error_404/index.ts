import Component from '../../core/component'
import ErrorCode from '../../components/error_code'

export default class Error404 extends Component {
  constructor() {
    const errorCode = new ErrorCode({
      numbers: ['4', '0', '4']
    })

    const props = {
      errorCode
    }

    super('div', {...props, className: 'page'})
  }

  render(): string {
    return `
      {{#> MainLayout}}
        {{{ errorCode }}}

        Страница не найдена. <a href="/?page=chat-list">Перейти к списку чатов</a>
      {{/MainLayout}}
    `
  }
}
