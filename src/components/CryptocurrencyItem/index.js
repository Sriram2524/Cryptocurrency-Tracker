// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCorrencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCorrencyDetails
  return (
    <li className="list">
      <div className="bitcoin-con">
        <img className="bitcoin-logo" alt={currencyName} src={currencyLogo} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="currency-con">
        <p className="usd-value">{usdValue}</p>
        <p className="usd-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
