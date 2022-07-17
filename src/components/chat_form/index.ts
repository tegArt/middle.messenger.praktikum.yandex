import Component from '../../core/component'
import './chat_form.scss'

interface ChatFormProps {
  events?: Object
}

export default class ChatForm extends Component {
  constructor(props: ChatFormProps) {
    super('form', {...props, className: 'chat-form'})
  }

  render(): string {
    return `
      <input type="text" name="message" value="" class="message-field" placeholder="Сообщение"/>
      <input type="submit" class="send-button" value="">
    `
  }
}
