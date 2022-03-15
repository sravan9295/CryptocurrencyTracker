/* eslint-disable prettier/prettier */
// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

let data = []

class CryptocurrencyTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const list = await response.json()
    data = list
    this.setState({isLoading: false})
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />{' '}
          </div>
        ) : (
          <CryptocurrenciesList data={data} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
