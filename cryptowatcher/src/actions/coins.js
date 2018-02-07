import _ from 'lodash';
const tryFetch = async(url, opts) => {
    return fetch(url, opts);
};
const tickerUrl = 'https://api.coinmarketcap.com/v1/ticker/'

export const REQUEST_COINS = "REQUEST_COINS";
export const RECEIVE_COINS = "RECEIVE_COINS";
export const COIN_SELECTED = "COIN_SELECTED";


export const requestCoins = () => ({ type: REQUEST_COINS });
export const receiveCoins = ( coins) => ({ type: RECEIVE_COINS, coins:coins, receivedAt: Date.now() })

export const selectCoin = (coin) => ({ type: COIN_SELECTED,selected: coin });

export const fetchCoins = () => (dispatch) => {
    dispatch(requestCoins());
    return fetch(tickerUrl)
        .then(response => response.json())
        .then(response => response || [])
        .then(res => {
            return dispatch(receiveCoins( res));
        });
};