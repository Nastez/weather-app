import weatherReducer from './weatherReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";
import citiesReducer from "./citiesReducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    weather: weatherReducer,
    cities: citiesReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
