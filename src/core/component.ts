import EventBus from './event_bus'
import Handlebars from 'handlebars'
import { v4 as makeUUID } from 'uuid'
import '../helpers'

interface Props {
  [key: string]: string | any
}

interface Children {
  [key: string]: Component
}

interface PropsAndChildren {
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

  _element: HTMLElement
  _meta: Meta
  _id: string | null = null

  EventBus: EventBus
  props: Props = {}
  children: Children = {}

  constructor(tagName: string = 'div', propsAndChildren:  PropsAndChildren = {}) {
    const {props, children} = this._getChildren(propsAndChildren)

    this.EventBus = new EventBus()

    this._meta = {
      tagName,
      props,
    }
    this._id = makeUUID()

    this.children = children
    this.props = this._makePropsProxy({...props, __id: this._id })

    this._registerEvents()
    this.EventBus.emit(Component.EVENTS.INIT)
  }

  _getChildren(propsAndChildren) {
    const children = {}
    const props = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value
      } else {
        props[key] = value
      }
    })

    return { children, props }
  }

  _registerEvents() {
    this.EventBus.on(Component.EVENTS.INIT, this.init.bind(this))
    this.EventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    this.EventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    this.EventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources() {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init() {
    this._createResources()
    this.EventBus.emit(Component.EVENTS.FLOW_RENDER)
  }

  _componentDidMount() {
    this.componentDidMount()

    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount()
    })
  }

  componentDidMount() {
  }

  dispatchComponentDidMount() {
    this.EventBus.emit(Component.EVENTS.FLOW_CDM)
  }

  _componentDidUpdate(oldProps, newProps) {
    this.componentDidUpdate(oldProps, newProps)
    this.EventBus.emit(Component.EVENTS.FLOW_RENDER)
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
    const template = this.compile(this.render(), this.props)

    this._removeEvents()
    this._element.innerHTML = ''

    if (this.props.className) {
      this._element.className = this.props.className
    }

    this._element.appendChild(template)
    this._addEvents()
  }

  compile(template, props) {
    const fragment = this._createDocumentElement('template')
    const templateForStubs = Handlebars.compile(template)
    const propsAndStubs = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`
    })

    fragment.innerHTML = templateForStubs(propsAndStubs)

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)

      stub.replaceWith(child.getContent())
    })

    return fragment.content
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
      set: (target, prop, value) => {
        const oldProps = { ...target }

        if (target[prop] !== value) {
          target[prop] = value
          this.EventBus.emit(Component.EVENTS.FLOW_CDU, oldProps, target)
          return true
        }

        return false
      },
      deleteProperty: () => {
        throw new Error('Нет доступа')
      },
    })
  }

  _createDocumentElement(tagName) {
    const element = document.createElement(tagName)

    return element
  }

  _addEvents() {
    const {events = {}} = this.props

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName])
    })
  }

  _removeEvents() {
    const {events = {}} = this.props

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName])
    })
  }

  show() {
    this.element.style.display = 'block'
  }

  hide() {
    this.element.style.display = 'none'
  }
}
