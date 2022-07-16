import Component from '../../core/component'
import Button from '../button'
import FormRow from '../form_row'
import { allSettled } from '../../utils/allSettled'

export default class SignUpForm extends Component {
  constructor() {
    const emailField = new FormRow({
      fieldName: 'email',
      checkType: 'isEmail',
      placeholder: 'Почта'
    })

    const loginField = new FormRow({
      fieldName: 'login',
      checkType: 'isLogin',
      placeholder: 'Логин'
    })

    const nameField = new FormRow({
      fieldName: 'first_name',
      checkType: 'isName',
      placeholder: 'Имя'
    })

    const surnameField = new FormRow({
      fieldName: 'second_name',
      checkType: 'isName',
      placeholder: 'Фамилия'
    })

    const phoneField = new FormRow({
      fieldName: 'phone',
      checkType: 'isPhone',
      placeholder: 'Телефон'
    })

    const passwordField = new FormRow({
      fieldName: 'password',
      isPassword: true,
      checkType: 'isPassword',
      placeholder: 'Пароль'
    })

    const passwordRepeatField = new FormRow({
      fieldName: 'password_repeat',
      isPassword: true,
      checkType: 'isEqual',
      equalFieldName: 'password',
      placeholder: 'Повторите пароль'
    })

    const button = new Button({
      text: 'Создать аккаунт',
      isFullWidth: true,
      events: {
        click: () => {
          allSettled([
            emailField.check(),
            loginField.check(),
            nameField.check(),
            surnameField.check(),
            phoneField.check(),
            passwordField.check(),
            passwordRepeatField.check()
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
      emailField,
      loginField,
      nameField,
      surnameField,
      phoneField,
      passwordField,
      passwordRepeatField,
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
      {{{ emailField }}}
      {{{ loginField }}}
      {{{ nameField }}}
      {{{ surnameField }}}
      {{{ phoneField }}}
      {{{ passwordField }}}
      {{{ passwordRepeatField }}}

      <div class="form-buttons">
        {{{ button }}}
        <a href="/?page=sign-in">Уже есть аккаунт?</a>
      </div>
    `
  }
}
