import _ from 'lodash'; 
import {
    REQUEST_COINS,
    RECEIVE_COINS,
    COIN_SELECTED
 } from '../actions'
const coins = (state = {
  isFetching: false,
  all:[],
  selected:[],
  receivedAt: null,
  history:[]
}, action) => {
  
  switch (action.type) {
    case 'ADD_COIN':
        return {
          id: action.id,
          name: action.name
        }
    case REQUEST_COINS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_COINS:
      return {
        ...state,
        isFetching: false,
        receivedAt:Date.now(),
        all:action.coins,
        history:state.history.concat([{date:Date.now(),all:action.coins}])
      }
    case COIN_SELECTED:
      return {
        ...state,
        selected:state.selected.concat([_.find(state.all,(c) => c.name==action.selected)])
      }
    default:
      return state
  }
}
export default coins