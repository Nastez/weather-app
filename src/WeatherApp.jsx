import React from 'react';
import './components/App/App.module.css';
import App from "./components/App/App";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

const WeatherApp = (props) => {
    return (
        <div>
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    );
}

export default WeatherApp;
