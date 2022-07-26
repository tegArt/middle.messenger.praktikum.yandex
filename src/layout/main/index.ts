import Handlebars from 'handlebars'
import './main.scss'

Handlebars.registerPartial('MainLayout', `
  <div class="global-centered-wrapper">
      <div class="global-centered-inner">
          {{> @partial-block }}
      </div>
  </div>
`)
