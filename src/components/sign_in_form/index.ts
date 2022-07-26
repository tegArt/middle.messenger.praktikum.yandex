import Component from '../../core/component'
import Button from '../button'
import FormRow from '../form_row'
import { allSettled } from '../../utils/allSettled'

export default class SignInForm extends Component {
  constructor() {
    const loginField = new FormRow({
      fieldName: 'login',
      checkType: 'isLogin',
      placeholder: 'Логин'
    })

    const passwordField = new FormRow({
      fieldName: 'password',
      isPassword: true,
      checkType: 'isPassword',
      placeholder: 'Пароль'
    })

    const button = new Button({
      text: 'Войти',
      isFullWidth: true,
      events: {
        click: () => {
          allSettled([
            loginField.check(),
            passwordField.check()
          ]).then((result) => {
            const isValidForm = result.every((field) => field.status === 'resolved')

            if (isValidForm) {
              this.send()
            }
          })
        }
      }
    })

    const props = {
      className: 'form-wrapper',
      loginField,
      passwordField,
      button
    }

    super('div', props)
  }

  send() {
    let data: {[key: string]: string} = {}
    const fields = this.element.querySelectorAll('input')

    fields.forEach((field) => {
      data[field.name] = field.value
    })

    console.log(data)
  }

  render(): string {
    return `
      {{{ loginField }}}
      {{{ passwordField }}}

      <div class="form-buttons">
        {{{ button }}}
        <a href="/?page=sign-up">Нет аккаунта?</a>
      </div>
    `
  }
}
