import currentTempReducer from './currentTempReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";
import weatherConditionsReducer from "./weatherConditionsReducer";

let reducers = combineReducers({
    currentTemp: currentTempReducer,
    weatherConditions: weatherConditionsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
