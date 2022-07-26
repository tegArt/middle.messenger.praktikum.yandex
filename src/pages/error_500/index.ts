import Component from '../../core/component'
import ErrorCode from '../../components/error_code'

export default class Error500 extends Component {
  constructor() {
    const errorCode = new ErrorCode({
      numbers: ['5', '0', '0'],
      isBroken: true
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

        Что-то пошло не так. <a href="/?page=chat-list">Перейти к списку чатов</a>
      {{/MainLayout}}
    `
  }
}
