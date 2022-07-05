export default {
  heading: {
    type: 'h1',
    isCentered: true,
  },
  fields: [
    {
      name: 'login',
      value: '',
      required: true,
      placeholder: 'Логин',
    },
    {
      name: 'password',
      isPassword: true,
      value: '',
      required: true,
      placeholder: 'Пароль',
    },
  ],
  button: {
    text: 'Войти',
    isFullWidth: true,
    clickHandler: 'window.location = \'/?page=chatList\'',
  },
}
