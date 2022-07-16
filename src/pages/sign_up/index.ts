import Component from '../../core/component'
import Heading from '../../components/heading'
import SignUpForm from '../../components/sign_up_form'

export default class SignUp extends Component {
  constructor() {
    const heading = new Heading({
      tag: 'h1',
      text: 'Регистрация',
      className: '-centered'
    })

    const form = new SignUpForm()

    const props = {
      className: 'page',
      heading,
      form
    }

    super('div', props)
  }

  render(): string {
    return `
      {{#> MainLayout}}
        {{{ heading }}}
        {{{ form }}}
      {{/MainLayout}}
    `
  }
}
