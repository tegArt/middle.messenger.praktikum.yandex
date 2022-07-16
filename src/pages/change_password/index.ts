import Component from '../../core/component'
import ChangePasswordForm from '../../components/change_password_form'
import ProfileAvatar from '../../components/profile_avatar'
import Heading from '../../components/heading'

export default class ChangePassword extends Component {
  constructor() {
    const profileAvatar = new ProfileAvatar({
      name: 'Username',
      canChange: false
    })

    const heading = new Heading({
      tag: 'h2',
      text: 'Илон',
      className: '-centered'
    })

    const form = new ChangePasswordForm()

    const props = {
      className: 'page',
      profileAvatar,
      heading,
      form
    }

    super('div', props)
  }

  render(): string {
    return `
      {{#> MainLayout}}
        {{{ profileAvatar }}}
        {{{ heading }}}
        {{{ form }}}
      {{/MainLayout}}
    `
  }
}
