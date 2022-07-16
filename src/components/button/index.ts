import './button.scss'
import Component from '../../core/component'

interface ButtonProps {
  text: string,
  isFullWidth?: boolean,
  events?: Object
}

export default class Button extends Component {
  constructor(props: ButtonProps) {
    const className = props.isFullWidth ? 'button -full-width' : 'button'

    super('button', {...props, className})
  }

  render(): string {
    return `
      {{ text }}
    `
  }
}
