import weatherReducer from './weatherReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    weather: weatherReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
