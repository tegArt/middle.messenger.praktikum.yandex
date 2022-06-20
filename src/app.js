import mainTpl from './layout/main/main.hbs'
import './styles.scss'

const root = document.getElementById('root')

const context = {
    title: "Заголовок",
    text: 'Пробный текст hook test 2'
}
const html = mainTpl(context)

root.innerHTML = html

// hook test