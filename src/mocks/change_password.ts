export default {
  name: 'Илон',
  profileAvatar: {
    name: 'Илон',
    canChange: false,
  },
  heading: {
    type: 'h2',
    isCentered: true,
  },
  fields: [
    {
      name: 'oldPassword',
      isPassword: true,
      value: '',
      required: true,
      placeholder: 'Пароль',
    },
    {
      name: 'newPassword',
      isPassword: true,
      value: '',
      required: true,
      placeholder: 'Новый пароль',
    },
    {
      name: 'passwordRepeat',
      isPassword: true,
      value: '',
      required: true,
      placeholder: 'Повторите новый пароль',
    },
  ],
  button: {
    text: 'Сохранить',
    isFullWidth: true,
    clickHandler: 'window.location = \'/?page=chatList\'',
  },
}
