import Component from '../../core/component'
import './chat_message.scss'

export interface ChatMessageProps {
  type: 'text' | 'photo',
  date: string,
  isOwn: boolean,
  content: string,
  isDelivered: boolean
}

export default class ChatMessage extends Component {
  constructor(props: ChatMessageProps) {
    const className = props.isOwn ? 'chat-message -own' : 'chat-message'

    super('div', {...props, className})
  }

  render(): string {
    return `
      {{ content }}
      <div class="chat-message-date">
        {{ date }}
      </div>
    `
  }
}
