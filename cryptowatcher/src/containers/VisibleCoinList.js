import { connect } from 'react-redux'
import CoinList from '../components/CoinList'
import { fetchTotalMarketCap } from '../actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    coins: state.coins.selected,
    total: {
      ...state.marketcap,
      name: "Total"
    }
}
};

const mapDispatchToProps  = (key) => dispatch => {
  return{
    onCoinClick: () =>{console.log("CoinClick");},
    getTotalMarketCap: () =>{dispatch(fetchTotalMarketCap())},
    // getCoins: () =>{dispatch(fetchCoins())}
  };
}

const VisibleCoinList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList)

export default VisibleCoinList