import Component from '../../core/component'
import './profile_avatar.scss'

interface ProfileAvatarProps {
  name: string,
  avatarUrl?: string,
  canChange?: boolean
}

export default class ProfileAvatar extends Component {
  constructor(props: ProfileAvatarProps) {
    super('div', {...props, className: 'profile-avatar'})
  }

  render(): string {
    return `
      <img
          src="{{#unless avatarUrl}}/img/empty-avatar.svg{{else}}{{avatarUrl}}{{/unless}}"
          alt="{{name}}"
          {{#unless avatarUrl}}class="-empty"{{/unless}}
      />
      {{#if canChange}}
          <a href="#" class="change-link"><span>Поменять аватар</span></a>
          <input type="hidden" name="avatar" value="" /> {{!-- временно для выполнения условий тз на 1 спринт --}}
      {{/if}}
    `
  }
}
