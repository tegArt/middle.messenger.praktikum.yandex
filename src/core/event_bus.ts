type CallbackFunction = (...args: unknown[]) => void;

interface Listeners {
  [key: string]: CallbackFunction[]
}

export default class EventBus {
  listeners: Listeners

  constructor() {
    this.listeners = {}
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off(event, callback) {
    if (!this.listeners[event]) {
      throw `Нет события ${event}`
    }

    this.listeners[event] = this.listeners[event].filter((item) => item !== callback)
  }

  emit(event, ...args) {
    if (!this.listeners[event]) {
      throw `Нет события ${event}`
    }

    this.listeners[event].forEach((callback) => callback(...args))
  }
}
