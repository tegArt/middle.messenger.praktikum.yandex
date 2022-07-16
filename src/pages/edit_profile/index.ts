import Component from '../../core/component'
import EditProfileForm from '../../components/edit_profile_form'
import ProfileAvatar from '../../components/profile_avatar'
import Heading from '../../components/heading'

export default class EditProfile extends Component {
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

    const form = new EditProfileForm()

    const props = {
      className: 'page',
      heading,
      profileAvatar,
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
