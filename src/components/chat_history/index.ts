import Component from '../../core/component'
import ChatMessage, { ChatMessageProps } from '../chat_message'
import './chat_history.scss'

interface ChatHistoryProps {
  messages: ChatMessageProps[]
}

export default class ChatHistory extends Component {
  constructor(props: ChatHistoryProps) {
    const messages = props.messages.map((chatMessageProps) => {
      return new ChatMessage(chatMessageProps)
    })

    super('section', {...props, messages, className: 'chat-history'})
  }

  render(): string {
    return `
      {{{ messages }}}
    `
  }
}
