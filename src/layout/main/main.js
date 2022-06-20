import Handlebars from 'handlebars'
import mainTpl from './main.hbs'

const template = Handlebars.compile(mainTpl)
const context = {
    header: "Заголовок",
    text: 'Пробный текст'
}
const html = template(context)

console.log('html -> ', mainTpl)

export default html
