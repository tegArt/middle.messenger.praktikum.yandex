export default {
    heading: {
        type: 'h1',
        isCentered: true
    },
    fields: [
        {
            name: 'login',
            value: '',
            required: true,
            placeholder: 'Почта'
        },
        {
            name: 'login',
            value: '',
            required: true,
            placeholder: 'Логин'
        },
        {
            name: 'login',
            value: '',
            required: true,
            placeholder: 'Имя'
        },
        {
            name: 'login',
            value: '',
            required: true,
            placeholder: 'Фамилия'
        },
        {
            name: 'login',
            value: '',
            required: true,
            placeholder: 'Телефон'
        },
        {
            name: 'password',
            isPassword: true,
            value: '',
            required: true,
            placeholder: 'Пароль'
        },
        {
            name: 'password',
            isPassword: true,
            value: '',
            required: true,
            placeholder: 'Пароль еще раз'
        }
    ],
    button: {
        text: 'Зарегистрироваться',
        isFullWidth: true,
        clickHandler: "window.location = '/?page=chatList'"
    }
}
