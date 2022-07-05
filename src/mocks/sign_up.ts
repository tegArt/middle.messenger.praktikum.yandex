export default {
  heading: {
    type: 'h1',
    isCentered: true,
  },
  fields: [
    {
      name: 'email',
      value: '',
      required: true,
      placeholder: 'Почта',
    },
    {
      name: 'login',
      value: '',
      required: true,
      placeholder: 'Логин',
    },
    {
      name: 'first_name',
      value: '',
      required: true,
      placeholder: 'Имя',
    },
    {
      name: 'second_name',
      value: '',
      required: true,
      placeholder: 'Фамилия',
    },
    {
      name: 'phone',
      value: '',
      required: true,
      placeholder: 'Телефон',
    },
    {
      name: 'password',
      isPassword: true,
      value: '',
      required: true,
      placeholder: 'Пароль',
    },
    {
      name: 'password_repeat',
      isPassword: true,
      value: '',
      required: true,
      placeholder: 'Пароль еще раз',
    },
  ],
  button: {
    text: 'Зарегистрироваться',
    isFullWidth: true,
    clickHandler: 'window.location = \'/?page=chatList\'',
  },
}
