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
      name: 'email',
      value: 'ilon@tothemars.com',
      required: true,
      placeholder: 'Почта',
    },
    {
      name: 'login',
      value: 'IlonMusk007',
      required: true,
      placeholder: 'Логин',
    },
    {
      name: 'first_name',
      value: 'Илон',
      required: true,
      placeholder: 'Имя',
    },
    {
      name: 'second_name',
      value: 'Маск',
      required: true,
      placeholder: 'Фамилия',
    },
    {
      name: 'display_name',
      value: 'IlonMusk007',
      required: true,
      placeholder: 'Отображаемое имя',
    },
    {
      name: 'phone',
      value: '+7 123 456 789',
      required: true,
      placeholder: 'Телефон',
    },
  ],
  button: {
    text: 'Сохранить',
    isFullWidth: true,
    clickHandler: 'window.location = \'/?page=chatList\'',
  },
}
