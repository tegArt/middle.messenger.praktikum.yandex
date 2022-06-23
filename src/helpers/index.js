import Handlebars from 'handlebars'

Handlebars.registerHelper('if_eq', function(a, b, options) {
    return (a == b) ? options.fn(this) : options.inverse(this)
})
