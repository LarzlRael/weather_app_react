import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './../reducer/index'
import thunk from 'redux-thunk'

const initialstate = {
    city: 3911925
}

const composeEnhacnes = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialstate, composeEnhacnes(applyMiddleware(thunk)));