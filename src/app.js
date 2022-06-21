import mainTpl from './layout/main/main.hbs'
import './styles.scss'

const root = document.getElementById('root')

const context = {
    title: "Заголовок 1",
    text: 'Пробный текст hook test 9:19'
}
const html = mainTpl(context)

root.innerHTML = html

// hook test 234 :(