import './scss/common.scss'

import { render } from './core/render_dom'
import SignInPage from './pages/sign_in'
import Heading from './components/heading'

const signInPage = new SignInPage({
  text: 'тест страницы',
  className: '-wow-class -wow-second',
  heading: new Heading({
    tag: 'h1',
    text: 'Настоящий заголовок',
    className: 'bla',
    events: {
      click: (event) => {
        console.log('saaaaaaaaaaaaaa')
        console.log(event)
      }
    }
  })
})

render('.app', signInPage)
