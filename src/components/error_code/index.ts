import Component from '../../core/component'
import './error_code.scss'

interface ErrorCodeProps {
  isBroken?: boolean,
  numbers: string[]
}

export default class ErrorCode extends Component {
  constructor(props: ErrorCodeProps) {
    super('div', {...props, className: 'error-code'})
  }

  render(): string {
    return `
      {{#each numbers}}
          <span
              {{#if @last}}
                  {{#if ../isBroken}}class="-broken"{{/if}}
              {{/if}}
          >
              {{this}}
          </span>
      {{/each}}
    `
  }
}
