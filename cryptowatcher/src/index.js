import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers'
import { createStore,applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fetchTotalMarketCap,startTimer } from './actions'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {IntlProvider} from 'react-intl';

const loggerMiddleware = createLogger()

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(startTimer());
//.then(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();