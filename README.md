# Проектная работа "Чат" [![Netlify Status](https://api.netlify.com/api/v1/badges/d7987e47-2bc9-46e0-8118-3855f7297cec/deploy-status)](https://app.netlify.com/sites/subtle-pavlova-2b08e3/deploys)

- [Макеты](https://www.figma.com/file/hbVBhopB0YdLJWQAlecsCY/Messenger?node-id=0%3A1)
- [Прототип](https://www.figma.com/proto/hbVBhopB0YdLJWQAlecsCY/Messenger?node-id=9%3A25&scaling=contain&page-id=0%3A1&starting-point-node-id=9%3A25)

### Потискать вживую http://es2022.ru/
- [страница входа](http://es2022.ru/)
- [регистрации](http://es2022.ru/?page=sign-up)
- [профиль](http://es2022.ru/?page=profile)
- [редактирование профиля](http://es2022.ru/?page=edit-profile)
- [смена пароля](http://es2022.ru/?page=change-password)
- [список чатов](http://es2022.ru/?page=chat-list)
- [выбранный чат](http://es2022.ru/?page=chat)
- [404](http://es2022.ru/?page=error-404)
- [500](http://es2022.ru/?page=error-500)

## Установка и запуск

- `npm install` — установка
- `npm run dev` — запуск для разработки с вотчером
- `npm run start` — запуск с Express
- `npm run build` — сборка стабильной версии

## Спринт 2

### Использование шаблонизатора и компонентного подхода

Создан ключевой компонент, добавлен eventbus, подготовлен http_transport

"Внедрен" какой-никакой typescript

Настроены линтеры js,ts и scss, добавлен конфиг для ide

Все страницы и компоненты переведены с лысого hbs на ключевой компонент

Реализован валидатор

### PR
https://github.com/tegArt/middle.messenger.praktikum.yandex/pull/2
