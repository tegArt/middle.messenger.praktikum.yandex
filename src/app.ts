import './scss/common.scss'

import './layout/main'
import './layout/chat'

import { render } from './core/render_dom'
import SignIn from './pages/sign_in'
import Error404 from './pages/error_404'
import Error500 from './pages/error_500'
import SignUp from './pages/sign_up'
import ChangePassword from './pages/change_password'
import EditProfile from './pages/edit_profile'
import Profile from './pages/profile'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const page = urlParams.get('page')
let pageComponent

switch (page) {
  case 'error-404':
    pageComponent = new Error404()
    break
  case 'error-500':
    pageComponent = new Error500()
    break
  case 'profile':
    pageComponent = new Profile()
    break
  case 'edit-profile':
    pageComponent = new EditProfile()
    break
  case 'change-password':
    pageComponent = new ChangePassword()
    break
  case 'chat-list':
    pageComponent = new ChatList()
    break
  case 'chat':
    pageComponent = new Chat()
    break
  case 'sign-up':
    pageComponent = new SignUp()
    break
  default:
    pageComponent = new SignIn()
}

render('.app', pageComponent)
