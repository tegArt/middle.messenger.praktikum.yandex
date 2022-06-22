import './layout/main'
import './layout/chat'

import './components/button'
import './components/error_code'
import './components/form'
import './components/form_buttons'
import './components/form_row'
import './components/heading'
import './components/profile_avatar'
import './components/profile_row'

import './scss/common.scss'

const root = document.getElementById('root')
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let page

if (urlParams.has('page')) {
    page = urlParams.get('page')
} else {
    page = "signIn"
}

switch (page) {
    case 'signIn':
        console.log('signIn')
        break
    default:
        console.log(page)
}
