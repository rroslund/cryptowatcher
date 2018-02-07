import _ from 'lodash';
import {fetchCoins} from './index';
const tryFetch = async(url, opts) => {
    return fetch(url, opts);
};
const globalUrl = 'https://api.coinmarketcap.com/v1/global/'
const tickerUrl = 'https://api.coinmarketcap.com/v1/ticker/'

export const REQUEST_MARKETCAP = "REQUEST_MARKETCAP";
export const RECEIVE_MARKETCAP = "RECEIVE_MARKETCAP";
export const TIMER_START="TIMER_START";

export const requestMarketCap = () => ({ type: REQUEST_MARKETCAP });
export const receiveMarketCap = ( total,volume) => ({ type: RECEIVE_MARKETCAP, total,volume, receivedAt: Date.now() })

export const fetchTotalMarketCap = () => (dispatch) => {
    dispatch(requestMarketCap());
    return fetch(globalUrl)
        .then(response => response.json())
        .then(response => response || [])
        .then(marketcap => {
            return dispatch(receiveMarketCap( marketcap.total_market_cap_usd,marketcap.total_24h_volume_usd));
        });
};

let timer = null;
export const startTimer = () => (dispatch) =>{
    clearInterval(timer);
    timer = setInterval(() => {
        dispatch(fetchTotalMarketCap());
        dispatch(fetchCoins());
    }, 15*1000);
    dispatch({ type: TIMER_START });
    dispatch(fetchTotalMarketCap());
    dispatch(fetchCoins());
}

export const stopTimer = () => (dispatch) =>{
    clearInterval(timer);
}
