import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';
import cartReducer from './store/reducers/cartReducer';
import shopReducer from './store/reducers/shopReducer';
import collectionReducer from './store/reducers/collectionReducer';
import authReducer from './store/reducers/authReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    collection: collectionReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
