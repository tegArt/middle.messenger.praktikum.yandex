import Component from '../../core/component'
import Button from '../button'
import FormRow from '../form_row'
import { allSettled } from '../../utils/allSettled'

export default class ChangePasswordForm extends Component {
  constructor() {
    const oldPasswordField = new FormRow({
      fieldName: 'oldPassword',
      isPassword: true,
      checkType: 'isPassword',
      placeholder: 'Старый пароль'
    })

    const newPasswordField = new FormRow({
      fieldName: 'newPassword',
      isPassword: true,
      checkType: 'isPassword',
      placeholder: 'Новый пароль'
    })

    const newPasswordRepeatField = new FormRow({
      fieldName: 'newPasswordRepeat',
      isPassword: true,
      checkType: 'isEqual',
      equalFieldName: 'newPassword',
      placeholder: 'Повторите новый пароль'
    })

    const button = new Button({
      text: 'Сохранить',
      isFullWidth: true,
      events: {
        click: () => {
          allSettled([
            oldPasswordField.check(),
            newPasswordField.check(),
            newPasswordRepeatField.check()
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
      oldPasswordField,
      newPasswordField,
      newPasswordRepeatField,
      button
    }

    super('div', {...props, className: 'form-wrapper'})
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
      {{{ oldPasswordField }}}
      {{{ newPasswordField }}}
      {{{ newPasswordRepeatField }}}

      <div class="form-buttons">
        {{{ button }}}
        <a href="/?page=profile">Вернуться в профиль</a>
      </div>
    `
  }
}
