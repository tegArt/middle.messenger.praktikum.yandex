import './scss/common.scss'

import { render } from './core/render_dom'
import SignInPage from './pages/sign_in'
import Heading from './components/heading'
import ProfileAvatar from './components/profile_avatar'
import ProfileRow from './components/profile_row'
import ErrorCode from './components/error_code'

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
  }),
  avatar: new ProfileAvatar({
    name: 'blabla'
  }),
  profileRow: new ProfileRow({
    label: 'blabla',
    value: 'val'
  }),
  error: new ErrorCode({
    numbers: ['5','0', '0'],
    isBroken: true
  })
})

render('.app', signInPage)
