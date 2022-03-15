/* eslint-disable prettier/prettier */
// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props

  return (
    <li className="item-container">
      <div className="together">
        <img
          className="icon"
          src={details.currency_logo}
          alt={details.currency_name}
        />
        <p className="space">{details.currency_name}</p>
      </div>
      <div className="together currency">
        <p className="space">{details.usd_value}</p>
        <p className="space">{details.euro_value}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
