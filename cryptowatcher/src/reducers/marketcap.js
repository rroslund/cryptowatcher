import {
    REQUEST_MARKETCAP,
    RECEIVE_MARKETCAP
 } from '../actions'
 
 const marketcap = (state = {
   isFetching: false,
   receivedAt: null,
   total: null,
   initialTotal:null,
   history:[]
 }, action) => {
   
   switch (action.type) {
     case REQUEST_MARKETCAP:
       return {
         ...state,
         isFetching: true,
       };
     case RECEIVE_MARKETCAP:
       return {
         ...state,
         isFetching: false,
         receivedAt:Date.now(),
         initialTotal: state.initialTotal?state.initialTotal:action.total,
         change:state.total?(1-(state.total/action.total)):0,
         totalchange:state.initialTotal?(1 - (state.initialTotal/action.total)):0,
         total:action.total,
         volume:action.volume,
         history:state.history.concat([{date:Date.now(),total:action.total,volume:action.volume}])
       }
     default:
       return state
   }
 }
 
 export default marketcap;