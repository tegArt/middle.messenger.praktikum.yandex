import mainTpl from './layout/main/main.hbs'

const root = document.getElementById('root')

const context = {
    title: "Заголовок",
    text: 'Пробный текст'
}
const html = mainTpl(context)

root.innerHTML = html
