import Component from '../../core/component'
import Heading from '../../components/heading'
import SignInForm from '../../components/sign_in_form'

export default class SignIn extends Component {
  constructor() {
    const heading = new Heading({
      tag: 'h1',
      text: 'Авторизуйтесь',
      className: '-centered'
    })

    const form = new SignInForm()

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
