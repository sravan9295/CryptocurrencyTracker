/* eslint-disable prettier/prettier */
// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {data} = props

  return (
    <div className="body-content">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="list-container">
        <div className="heading-container">
          <h3 className="heading coin-type">Coin Type</h3>
          <div className="together">
            <h3 className="heading">USD</h3>
            <h3 className="heading">EURO</h3>
          </div>
        </div>

        <ul className="ul">
          {data.map(eachData => (
            <CryptocurrencyItem key={eachData.id} details={eachData} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
