import Handlebars from 'handlebars'
import './chat.scss'

Handlebars.registerPartial('ChatLayout', `
  <div class="chat-wrapper">
      {{> @partial-block }}
  </div>
`)
