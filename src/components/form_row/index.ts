import './form_row.scss'
import Component from '../../core/component'
import { validate } from '../../utils/validator'

interface FormRowProps {
  fieldName: string,
  value?: string,
  placeholder?: string,
  isPassword?: boolean,
  checkType?: string,
  equalFieldName?: string,
  isError?: boolean
}

export default class FormRow extends Component {
  constructor(props: FormRowProps) {
    const events = {
      change: () => {
        this.check()
      }
    }

    super('div', {...props, events, className: 'form-row'})
  }

  check() {
    const input = this.getContent().querySelector('input')
    let value = ''

    if (input) {
      value = input.value
    }

    return new Promise((resolve, reject) => {
      const result = validate(value, <string>this.props.checkType, <string>this.props.equalFieldName)

      if (result.isValid) {
        this.setProps({
          value: result.value,
          isError: false,
          note: ''
        })

        resolve(result)
      } else {
        this.setProps({
          value: result.value,
          isError: true,
          note: result.rule
        })

        reject(result)
      }
    })
  }

  render(): string {
    return `
      <input
          type="{{#if isPassword}}password{{else}}text{{/if}}"
          name="{{ fieldName }}"
          value="{{ value }}"
          class="form-field {{#if isError}}-error{{/if}}"
          required
      />
      <div class="placeholder">{{ placeholder }}</div>
      <div class="form-note {{#if isError}}-error{{/if}}">{{ note }}</div>
    `
  }
}
