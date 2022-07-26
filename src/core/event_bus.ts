type CallbackFunction = (...args: unknown[]) => void;

interface Listeners {
  [key: string]: CallbackFunction[]
}

export default class EventBus {
  listeners: Listeners

  constructor() {
    this.listeners = {}
  }

  on(event: string, callback: CallbackFunction) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  off(event: string, callback: CallbackFunction) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter((item) => item !== callback)
  }

  emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события ${event}`)
    }

    this.listeners[event].forEach((callback) => callback(...args))
  }
}
