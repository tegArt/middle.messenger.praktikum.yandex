import Component from '../../core/component'

export default class SignInPage extends Component {
  constructor(props) {
    super('div', props)
  }

  render(): string {
    return `
      {{ text }}
      {{{ heading }}}
      {{ button }}
      {{{ avatar }}}
      {{{ profileRow }}}
      {{{ error }}}
    `
  }
}
