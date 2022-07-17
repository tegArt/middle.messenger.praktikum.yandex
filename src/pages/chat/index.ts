import Component from '../../core/component'
import ProfileLink from '../../components/profile_link'
import Search from '../../components/search'
import ChatsGroup from '../../components/chats_group'

//ToDo: слить Chat и ChatList в один компонент, конкретный чат подключать из страницы со списком
export default class Chat extends Component {
  constructor() {
    const profileLink = new ProfileLink()

    const search = new Search({
      events: {
        change: () => {
          console.log(this)
        }
      }
    })

    const chatList = new ChatsGroup({
      chats: [
        {
          id: 1,
          isActive: true,
          title: 'Чат с длиннющим названием в несколько строк',
          lastMessage: 'Вы: Кто-то задвинул длинный спич на несколько страниц задвинул длинный спич на несколько страниц',
          avatarUrl: '/img/ava.png',
          date: '12:07',
          newMessageCount: 120
        },
        {
          id: 2,
          title: 'Просто чат',
          lastMessage: 'Есть кто?',
          avatarUrl: '/img/ava.png',
          date: '15.07.2022',
          newMessageCount: 4
        },
        {
          id: 3,
          title: 'Чат с длиннющим названием в несколько строк',
          lastMessage: 'Вы: Кто-то задвинул длинный спич на несколько страниц задвинул длинный спич на несколько страниц',
          date: '15.07.2022',
        },
        {
          id: 4,
          title: 'Верните мой 2007й',
          avatarUrl: '/img/ava.png',
          date: '18.12.2007'
        }
      ]
    })

    const props = {
      className: 'page',
      profileLink,
      search,
      chatList
    }

    super('div', props)
  }

  render(): string {
    return `
      {{#> ChatLayout}}
        <aside class="chat-sidebar">
          {{{ profileLink }}}
          {{{ search }}}
          {{{ chatList }}}
        </aside>

        <main class="chat-area -empty">
            <p>Выберите вапвыпаение</p>
        </main>
      {{/ChatLayout}}
    `
  }
}
