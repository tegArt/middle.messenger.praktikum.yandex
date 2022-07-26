import Component from '../../core/component'
import ChatHeader from '../chat_header'
import ChatForm from '../chat_form'
import ChatHistory from '../chat_history'
import './chat.scss'

interface ChatProps {
  id?: number
}

export default class Chat extends Component {
  constructor(props: ChatProps) {

    const header = new ChatHeader({
      text: 'Название чата'
    })

    const history = new ChatHistory({
      messages: [
        {
          type: 'text',
          date: '15:20',
          isOwn: false,
          content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
          isDelivered: true
        },
        {
          type: 'text',
          date: '15:23',
          isOwn: false,
          content: 'Ну ты прочитал нет?',
          isDelivered: true
        },
        {
          type: 'text',
          date: '17:52',
          isOwn: true,
          content: 'ага, прост не до этого было',
          isDelivered: true
        }
      ]
    })

    const form = new ChatForm({
      events: {
        submit: (event: Event) => {
          event.preventDefault()
          console.log('send message')
        }
      }
    })

    const isChatSelected = !!props.id
    const className = isChatSelected ? 'chat-area' : 'chat-area -empty'

    const innerProps = {
      className,
      isChatSelected,
      header,
      history,
      form
    }

    super('main', {...props, ...innerProps})
  }

  render(): string {
    return `
      {{#if isChatSelected}}
        {{{ header }}}
        {{{ history }}}
        {{{ form }}}
      {{else}}
        <p>Выберите чат чтобы отправить сообщение</p>
      {{/if}}
    `
  }
}
