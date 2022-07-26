import EventBus from './event_bus'
import Handlebars from 'handlebars'
import { v4 as makeUUID } from 'uuid'

interface Props {
  [key: string | symbol]: Object | string | boolean | null
}

interface Children {
  [key: string]: Component
}

interface PropsAndChildren {
  [key: string]: Object | string | boolean | null | Component
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
      props
    }
    this._id = makeUUID()

    this.children = children
    this.props = this._makePropsProxy({...props, __id: this._id })

    this._registerEvents()
    this.EventBus.emit(Component.EVENTS.INIT)
  }

  _getChildren(propsAndChildren: PropsAndChildren) {
    const children: any = {}
    const props: any = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value
      } else {
        if (Array.isArray(value) && value[0] instanceof Component) {
          value.forEach((item, index) => {
            if (!children[key]) {
              children[key] = []
            }

            children[key][index] = item
          })
        } else {
          props[key] = value
        }
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
      if (Array.isArray(child)) {
        child.forEach((arrayChild) => {
          arrayChild.dispatchComponentDidMount()
        })
      } else {
        child.dispatchComponentDidMount()
      }
    })
  }

  componentDidMount() {
  }

  dispatchComponentDidMount() {
    this.EventBus.emit(Component.EVENTS.FLOW_CDM)
  }

  _componentDidUpdate(oldProps: Object, newProps: Object) {
    this.componentDidUpdate(oldProps, newProps)
    this.EventBus.emit(Component.EVENTS.FLOW_RENDER)
  }

  // @ts-ignore
  componentDidUpdate(oldProps: Object, newProps: Object) {
    return true
  }

  setProps = (nextProps: Object) => {
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
      this._element.className = <string>this.props.className
    }

    this._element.appendChild(template)
    this._addEvents()
  }

  compile(template: string, props: Props) {
    const fragment = this._createDocumentElement('template')
    const templateForStubs = Handlebars.compile(template)
    const propsAndStubs = { ...props }

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = ''

        child.forEach((arrayChild) => {
          propsAndStubs[key] = `${propsAndStubs[key]} <div data-id="${arrayChild._id}"></div>`
        })
      } else {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`
      }
    })

    fragment.innerHTML = templateForStubs(propsAndStubs)

    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach((arrayChild) => {
          this.replaceStub(fragment, arrayChild)
        })
      } else {
        this.replaceStub(fragment, child)
      }
    })

    return fragment.content
  }

  replaceStub(fragment: HTMLElement, component: Component) {
    const stub = fragment.content.querySelector(`[data-id="${component._id}"]`)

    if (stub) {
      stub.replaceWith(component.getContent())
    }
  }

  render() {
    return '<div>empty component</div>'
  }

  getContent() {
    return this.element
  }

  _makePropsProxy(props: Props) {
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
        }

        return true
      },
      deleteProperty: () => {
        throw new Error('Нет доступа')
      },
    })
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName)
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
