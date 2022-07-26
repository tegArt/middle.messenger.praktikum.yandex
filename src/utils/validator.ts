interface ValidatorResponse {
  value: string,
  isValid: boolean,
  rule: string
}

export function validate(value: string, checkType: string, equalFieldName: string): ValidatorResponse {
  let regex
  let rule

  if (!checkType) {
    return {
      value,
      isValid: true,
      rule: 'Не требует проверки'
    }
  }

  switch (checkType) {
    case 'isName':
      regex = /^[A-ZА-Я][a-zа-я\-]*$/
      rule = 'Допустимы буквы и дефис, первая буква должна быть заглавной'
      break
    case 'isLogin':
      regex = /(?!^\d+$)^[\w\-]{3,20}$/i
      rule = 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них. Допустимы дефис и нижнее подчёркивание'
      break
    case 'isEmail':
      regex = /^[\w\-]+@[\w\-]+\.[a-z]{2,}$/i
      rule = 'Никогда мыла нормального не видел?'
      break
    case 'isPassword':
      regex = /(?=.*[A-ZА-Я])(?=.*\d)^.{8,40}$/
      rule = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
      break
    case 'isPhone':
      regex = /^([+]\d{9,14})|(\d{10,15})$/
      rule = 'От 10 до 15 символов, состоит из цифр, может начинается с плюса'
      break
    case 'isNotEmpty':
      regex = /^.+$/
      rule = 'Поле не должно быть пустым'
      break
    case 'isEqual':
      const equalField: HTMLFormElement | null = document.querySelector(`[name=${equalFieldName}]`)
      let equalValue = ''

      if (equalField) {
        equalValue = equalField.value
      }

      regex = new RegExp(`^${equalValue}$`)
      rule = 'Значения должны совпадать'
      break
    default:
      throw new Error('Нет подходящего валидатора')
  }

  return {
    value,
    isValid: regex.test(value),
    rule
  }
}
