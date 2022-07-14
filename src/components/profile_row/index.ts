import Component from '../../core/component'
import './profile_row.scss'

interface ProfileRowProps {
  label: string,
  value: string
}

export default class ProfileRow extends Component {
  constructor(props: ProfileRowProps) {
    super('div', {...props, className: 'profile-row'})
  }

  render(): string {
    return `
      <span class="profile-label">{{label}}</span>
      <span class="profile-value">{{value}}</span>
    `
  }
}
