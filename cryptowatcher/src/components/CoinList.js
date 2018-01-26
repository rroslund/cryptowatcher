import React from 'react'
import PropTypes from 'prop-types';
import Coin from './Coin'

const CoinList = ({ coins, onCoinClick }) => (
  <ul>
    {coins.map(coin =>
      <Coin
        key={coin.id}
        {...coin}
        onClick={() => onCoinClick(coin.id)}
      />
    )}
  </ul>
)

CoinList.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCoinClick: PropTypes.func.isRequired
}

export default CoinList