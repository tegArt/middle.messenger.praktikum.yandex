import Component from '../../core/component'
import './chat_header.scss'

interface ChatHeaderProps {
  text: string
}

export default class ChatHeader extends Component {
  constructor(props: ChatHeaderProps) {
    super('div', {...props, className: 'chat-header'})
  }

  render(): string {
    return `
      <h1>{{ text }}</h1>
    `
  }
}
