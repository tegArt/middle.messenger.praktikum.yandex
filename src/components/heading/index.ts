import Component from '../../core/component'
import './heading.scss'

interface HeadingProps {
  text: string,
  isCentered?: boolean,
  isLight?: boolean,
  isNoMargin?: boolean,
  type?: 'h1' | 'h2'
}

export default class Heading extends Component {
  constructor(props: HeadingProps) {
    super('div', props)
  }

  render(): string {
    return `
      {{#* inline "modifiers"}}
          class="{{#if isCentered}}-centered{{/if}} {{#if isLight}}-light{{/if}} {{#if isNoMargin}}-no-margin{{/if}}"
      {{/inline}}

      {{#if_eq type 'h1'}}
          <h1 {{>modifiers}}>
      {{else}}
          <h2 {{>modifiers}}>
      {{/if_eq}}
          {{ text }}
      {{#if_eq type 'h1'}}
          </h1>
      {{else}}
          </h2>
      {{/if_eq}}
    `
  }
}
