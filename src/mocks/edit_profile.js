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
            name: 'login',
            value: 'ilon@tothemars.com',
            required: true,
            placeholder: 'Почта'
        },
        {
            name: 'login',
            value: 'IlonMusk007',
            required: true,
            placeholder: 'Логин'
        },
        {
            name: 'login',
            value: 'Илон',
            required: true,
            placeholder: 'Имя'
        },
        {
            name: 'login',
            value: 'Маск',
            required: true,
            placeholder: 'Фамилия'
        },
        {
            name: 'login',
            value: '+7 123 456 789',
            required: true,
            placeholder: 'Телефон'
        }
    ],
    button: {
        text: 'Сохранить',
        isFullWidth: true,
        clickHandler: "window.location = '/?page=chatList'"
    }
}
