import _ from 'lodash';
const tryFetch = async(url, opts) => {
    return fetch(url, opts);
};
const tickerUrl = 'https://api.coinmarketcap.com/v1/ticker/'

export const REQUEST_TICKER = "REQUEST_TICKER";
export const RECEIVE_TICKER = "RECEIVE_TICKER";
export const TIMER_START="TIMER_START";

export const requestTicker = () => ({ type: REQUEST_TICKER });
export const receiveTicker = ( coins) => ({ type: RECEIVE_TICKER, coins, receivedAt: Date.now() })
export const fetchTicker = () => (dispatch) => {
    dispatch(requestTicker());
    return fetch(globalUrl)
        .then(response => response.json())
        .then(response => response || [])
        .then(tickers => {
            return dispatch(receiveTicker(tickers));
        });
};

let timer = null;
export const startTimer = () => (dispatch) =>{
    clearInterval(timer);
    timer = setInterval(() => dispatch(fetchTicker()), 45*1000);
    dispatch({ type: TIMER_START });
    dispatch(fetchTicker())
}
