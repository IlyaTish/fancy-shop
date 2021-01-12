import './style.scoped.sass'

const EvenoddIcon = props => (
  <svg
    className={`${props.name} icon`}
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      fill={props.fill}
      d={props.icon}
    />
  </svg>
)

export default EvenoddIcon
