import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/index';
import { AUTH_USER } from './actions/types';
import Cookies from 'js-cookie';
import logger from 'redux-logger';

// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = Cookies.get('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.wrapper')
);
