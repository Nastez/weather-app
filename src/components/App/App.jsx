import React from 'react';
import s from './App.module.css'

import WeatherConditionsContainer from "../WeatherConditions/WeatherConditionsContainer";
import CurrentTempContainer from "../CurrentTemp/CurrentTempContainer";

const App = (props) => {
    return (
        <div className={`${s.appWrapper} ${s.appFlexRow}`}>
            <CurrentTempContainer />
            <WeatherConditionsContainer />
        </div>
    )
}

export default App;