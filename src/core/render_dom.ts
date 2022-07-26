import Component from './component'

export function render(query: string, component: Component) {
  const root = document.querySelector(query)

  if (!root) {
    return
  }

  root.replaceWith(component.getContent())
  component.dispatchComponentDidMount()

  return root
}
