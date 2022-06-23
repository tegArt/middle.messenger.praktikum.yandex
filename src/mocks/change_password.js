export default {
    name: 'Илон',
    profileAvatar: {
        name: 'Илон',
        canChange: false
    },
    heading: {
        type: 'h2',
        isCentered: true
    },
    fields: [
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
            placeholder: 'Новый пароль'
        },
        {
            name: 'password',
            isPassword: true,
            value: '',
            required: true,
            placeholder: 'Повторите новый пароль'
        }
    ],
    button: {
        text: 'Сохранить',
        isFullWidth: true,
        clickHandler: "window.location = '/?page=chatList'"
    }
}
