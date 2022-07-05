import Handlebars from 'handlebars'
import './helpers'

import './layout/main'
import './layout/chat'

import './pages/sign_in'
import './pages/sign_up'
import './pages/chat_list'
import './pages/error_404'
import './pages/error_500'
import './pages/profile'
import './pages/edit_profile'
import './pages/change_password'

import './components/button'
import './components/error_code'
import './components/form'
import './components/form_buttons'
import './components/form_row'
import './components/heading'
import './components/profile_avatar'
import './components/profile_row'

import './scss/common.scss'

import mock from './mocks'

const root = document.getElementById('root')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const page = urlParams.has('page') ? urlParams.get('page') : 'signIn'

const templateName = `${page.charAt(0).toUpperCase()}${page.slice(1)}Page`

const compiledTemplate = Handlebars.compile(`{{> ${templateName} }}`)

root.innerHTML = compiledTemplate(mock[page])
