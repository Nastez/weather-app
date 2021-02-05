import React from 'react';
import './components/App/App.module.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import AppContainer from "./components/App/App";

const WeatherApp = (props) => {
    return (
        <div>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </div>
    );
}

export default WeatherApp;
