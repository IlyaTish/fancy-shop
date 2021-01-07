import './style.scoped.sass'

const CommonIcon = props => (
  <svg
    className={`${props.name} icon`}
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
  >
    <path
      d={props.icon}
      fill={props.fill}
    />
  </svg>
)

export default CommonIcon
