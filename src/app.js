import mainTpl from './layout/main/main.hbs'
import './components/button'
import './styles.scss'

const root = document.getElementById('root')

const html = mainTpl({
    title: 'Титл',
    text: 'probe',
    btn: {
        text: 'ссыль',
        link: '#12'
    }
})

root.innerHTML = html
