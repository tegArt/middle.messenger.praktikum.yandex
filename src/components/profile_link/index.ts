import Component from '../../core/component'
import './profile_link.scss'

export default class ProfileLink extends Component {
  constructor() {
    super('div', {className: 'profile-link'})
  }

  render(): string {
    return `
      <a href="/?page=profile">
        <span>Мой профиль</span>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="#666666"/>
        </svg>
      </a>
    `
  }
}
