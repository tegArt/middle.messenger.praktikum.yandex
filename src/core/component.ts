import Mediator from './mediator'
import Handlebars from 'handlebars'

interface Props {
  [key: string]: string | any
}

interface Meta {
  tagName: string,
  props: Props
}

export default class Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  _element: HTMLElement = null
  _meta: Meta = null

  mediator = null
  props: Props = {}

  constructor(tagName: string = 'div', props: Props) {
    this.mediator = new Mediator()
    this._meta = {
      tagName,
      props,
    }

    this.props = this._makePropsProxy(props)

    this._registerEvents()
    this.mediator.emit(Component.EVENTS.INIT)
  }

  _registerEvents() {
    this.mediator.on(Component.EVENTS.INIT, this.init.bind(this))
    this.mediator.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    this.mediator.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    this.mediator.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources() {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init() {
    this._createResources()
    this.mediator.emit(Component.EVENTS.FLOW_RENDER)
  }

  _componentDidMount() {
    this.componentDidMount()
  }

  componentDidMount() {
  }

  dispatchComponentDidMount() {
    this.mediator.emit(Component.EVENTS.FLOW_CDM)
  }

  _componentDidUpdate(oldProps, newProps) {
    this.componentDidUpdate(oldProps, newProps)
    this.mediator.emit(Component.EVENTS.FLOW_RENDER)
  }

  componentDidUpdate(oldProps: unknown, newProps: unknown) {
    console.log(`${oldProps}=>${newProps}`)
    return true
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element
  }

  _render() {
    const template = Handlebars.compile(this.render())

    this._element.innerHTML = template(this.props)
  }

  render() {
    return '<div>empty component</div>'
  }

  getContent() {
    return this.element
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target, prop, val) => {
        const oldProps = { ...target }
        if (target[prop] !== val) {
          target[prop] = val
          this._componentDidUpdate(oldProps, target)
          return true
        }

        return false
      },
      deleteProperty: () => {
        throw 'нет доступа'
      },
    })
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName)
  }

  show() {
    this.element.style.display = 'block'
  }

  hide() {
    this.element.style.display = 'none'
  }
}
