interface Headers {
  [key: string]: string
}

interface Data {
  [key: string]: unknown
}

interface Options {
  method?: string,
  headers?: Headers,
  data?: Data,
  timeout?: number
}

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}

function queryStringify(data: Data) {
  let queryString = '?'

  Object.keys(data).forEach((key) => {
    queryString = `${queryString}${key}=${data[key]}&`
  })

  return queryString.slice(0, -1)
}

export default class HTTPTransport {
  static _instance: HTTPTransport

  constructor() {
    if (HTTPTransport._instance) {
      return HTTPTransport._instance
    }

    HTTPTransport._instance = this
  }

  get = (url: string, options: Options = {}) => {
    return this.request(
      options.data ? `${url}${queryStringify(options.data)}` : url,
      { ...options, method: METHODS.GET },
      options.timeout,
    )
  }

  put = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  post = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  delete = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  request = (url:string, options: Options, timeout = 5000) => {
    const { method, headers, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      const errorHandler = (error) => {
        reject(error)
      }

      xhr.open(method, url)
      xhr.timeout = timeout

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = () => {
        resolve(xhr)
      }

      xhr.onerror = errorHandler
      xhr.onabort = errorHandler
      xhr.ontimeout = errorHandler

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}
