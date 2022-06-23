import Handlebars from 'handlebars'

import './layout/main'
import './layout/chat'

import './pages/sign_in'
import './pages/error_page'

import './components/button'
import './components/error_code'
import './components/form'
import './components/form_buttons'
import './components/form_row'
import './components/heading'
import './components/profile_avatar'
import './components/profile_row'

import './scss/common.scss'

Handlebars.registerHelper('if_eq', function(a, b, options) {
    return (a == b) ? options.fn(this) : options.inverse(this)
})

const root = document.getElementById('root')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let page
let pageHTML = 'something went wrong'

const mock = {
    signIn: {
        heading: {
            type: 'h1',
            isCentered: true
        },
        fields: [
            {
                name: 'login',
                value: '',
                required: true,
                placeholder: 'Логин'
            },
            {
                name: 'password',
                value: '',
                required: true,
                placeholder: 'Пароль'
            }
        ],
        button: {
            text: 'Войти',
            isFullWidth: true
        }
    }
}

if (urlParams.has('page')) {
    page = urlParams.get('page')
} else {
    page = "signIn"
}

switch (page) {
    case 'signIn':
        const tpl = Handlebars.compile(`{{> SignInPage }}`)
        pageHTML = tpl(mock.signIn)
        break
    default:
        console.log(page)
}

root.innerHTML = pageHTML