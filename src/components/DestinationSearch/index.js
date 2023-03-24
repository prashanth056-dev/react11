import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList, funct} = props
  const onChangeInput = event => {
    funct(event)
  }
  return (
    <div className="mainBg">
      <h1>Destination Search</h1>
      <div className="center">
        <input
          type="search"
          className="input"
          placeholder="search"
          onChange={onChangeInput}
        />
        <img
          alt="search icon"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        />
      </div>
      <ul className="imgCont">
        {destinationsList.map(eachItem => (
          <DestinationItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
