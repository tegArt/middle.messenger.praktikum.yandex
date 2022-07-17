import Component from '../../core/component'
import ChatBlock, { ChatBlockProps } from '../chat_block'

interface ChatsGroupProps {
  chats: ChatBlockProps[]
}

export default class ChatsGroup extends Component {
  constructor(props: ChatsGroupProps) {
    const chats = props.chats.map((chatBlockProps) => {
      return new ChatBlock(chatBlockProps)
    })

    super('div', {...props, chats, className: 'chat-list'})
  }

  render(): string {
    return `
      {{{ chats }}}
    `
  }
}
