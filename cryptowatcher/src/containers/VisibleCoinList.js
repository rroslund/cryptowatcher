import { connect } from 'react-redux'
import CoinList from '../components/CoinList'

const getVisibleCoins = (coins) => {
  return coins
}

const mapStateToProps = (state) => ({
  coins: getVisibleCoins(state.coins)
})

const mapDispatchToProps = {
  onCoinClick: () =>{console.log("CoinClick");}
}

const VisibleCoinList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList)

export default VisibleCoinList