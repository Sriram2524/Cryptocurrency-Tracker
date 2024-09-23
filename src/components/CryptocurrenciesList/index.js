// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyItems: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetailss()
  }

  getCurrencyDetailss = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptocurrencyItems: formattedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyItems, isLoading} = this.state
    return (
      <div className="bg-constainer">
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrency-list">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="img"
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <ul className="unordered-list">
              <li className="coin-type-list">
                <h1 className="coin-type-head">Coin Type</h1>
                <div className="usd-euro-con">
                  <h1 className="usd">USD</h1>
                  <h1 className="usd">EURO</h1>
                </div>
              </li>
              {cryptocurrencyItems.map(each => (
                <CryptocurrencyItem key={each.id} eachCorrencyDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
