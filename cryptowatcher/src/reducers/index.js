import { combineReducers } from 'redux'
import coins from './coins'
import coinpicker from './coinpicker'
import marketcap from './marketcap'

const coinApp = combineReducers({
  coins,
  coinpicker,
  marketcap
})

export default coinApp