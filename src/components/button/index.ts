import Component from '../../core/component'
import './button.scss'

interface ButtonProps {
  text: string,
  isFullWidth?: boolean,
  disabled?: boolean
}

export default class Button extends Component {
  constructor(props: ButtonProps) {
    super('div', props)
  }

  render(): string {
    return `
      <input
          type="submit"
          value="{{text}}"
          class="button {{#if isFullWidth}}-full-width{{/if}}"
          {{#if disabled}}disabled{{/if}}
          {{#unless disabled}}
              {{#if clickHandler}}onClick="{{clickHandler}}"{{/if}}
          {{/unless}}
      />
    `
  }
}
