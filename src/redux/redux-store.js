import currentTempReducer from './currentTempReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    currentTemp: currentTempReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
