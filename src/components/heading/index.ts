import Component from '../../core/component'
import './heading.scss'

interface HeadingProps {
  tag: 'h1' | 'h2',
  text: string,
  className?: string,
  events: Object
}

export default class Heading extends Component {
  constructor(props: HeadingProps) {
    super(props.tag, props)
  }

  render(): string {
    return `
      {{ text }}
    `
  }
}
