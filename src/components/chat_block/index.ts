import Component from '../../core/component'
import './chat_block.scss'

export interface ChatBlockProps {
  id: number,
  title: string,
  isActive?: boolean,
  avatarUrl?: string,
  lastMessage?: string,
  date?: string,
  newMessageCount?: number
}

export default class ChatBlock extends Component {
  constructor(props: ChatBlockProps) {
    const className = props.isActive ? 'chat-block -active' : 'chat-block'

    super('div', {...props, className})
  }

  render(): string {
    return `
      <div class="avatar">
        {{#if avatarUrl}}
            <img src="{{ avatarUrl }}" alt="{{ title }}" />
        {{/if}}
      </div>

      <div class="description">
        <div class="title">{{ title }}</div>
        <div class="last-message">{{ lastMessage }}</div>
      </div>

      <div class="info {{#if newMessageCount}}-new-message{{/if}}">
        <div class="date">{{ date }}</div>
        <div class="new-messages">{{ newMessageCount }}</div>
      </div>
    `
  }
}
