import Component from '../../core/component'
import Button from '../button'
import FormRow from '../form_row'
import { allSettled } from '../../utils/allSettled'

export default class EditProfileForm extends Component {
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

    const displayNameField = new FormRow({
      fieldName: 'display_name',
      checkType: 'isNotEmpty',
      placeholder: 'Отображаемое имя'
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

    const button = new Button({
      text: 'Сохранить',
      isFullWidth: true,
      events: {
        click: () => {
          allSettled([
            emailField.check(),
            loginField.check(),
            displayNameField.check(),
            nameField.check(),
            surnameField.check(),
            phoneField.check()
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
      displayNameField,
      nameField,
      surnameField,
      phoneField,
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
      {{{ displayNameField }}}
      {{{ nameField }}}
      {{{ surnameField }}}
      {{{ phoneField }}}
      {{{ passwordField }}}
      {{{ passwordRepeatField }}}

      <div class="form-buttons">
        {{{ button }}}
        <a href="/?page=profile">Отменить и вернуться в профиль</a>
      </div>
    `
  }
}
