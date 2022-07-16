import './profile.scss'

import Component from '../../core/component'
import ProfileAvatar from '../../components/profile_avatar'
import Heading from '../../components/heading'
import ProfileRow from '../../components/profile_row'

export default class Profile extends Component {
  constructor() {
    const profileAvatar = new ProfileAvatar({
      name: 'Username',
      canChange: true
    })

    const heading = new Heading({
      tag: 'h2',
      text: 'Илон',
      className: '-centered'
    })

    const profileFields = [
      {
        label: 'Почта',
        value: 'ilon@tothemars.com'
      },
      {
        label: 'Логин',
        value: 'IlonMusk007'
      },
      {
        label: 'Имя',
        value: 'Илон'
      },
      {
        label: 'Фамилия',
        value: 'Маск'
      },
      {
        label: 'Телефон',
        value: '+7 123 456 789'
      }
    ]

    const fields = profileFields.map(({label, value}) => {
      return new ProfileRow({
        label,
        value
      })
    })

    const props = {
      className: 'page',
      heading,
      profileAvatar,
      fields
    }

    super('div', props)
  }

  render(): string {
    return `
      {{#> MainLayout}}
        {{{ profileAvatar }}}
        {{{ heading }}}

        <div class="profile-card">
          {{{ fields }}}
        </div>

        <div class="profile-nav">
          <div class="profile-nav-colum">
            <a href="/?page=edit-profile">Изменить данные</a>
            <a href="/?page=change-password">Изменить пароль</a>
          </div>
          <div class="profile-nav-colum">
            <a href="/?page=chat-list">Вернуться к чатам</a>
            <a href="/" class="-red">Выйти</a>
          </div>
        </div>
      {{/MainLayout}}
    `
  }
}
