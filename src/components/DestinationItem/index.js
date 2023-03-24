import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem
  return (
    <li className="imgCard">
      <img alt={name} className="image" src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
