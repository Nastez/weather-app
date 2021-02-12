import React, {useEffect} from 'react';
import s from './App.module.css'
import {connect} from 'react-redux';
import {initializeApp} from '../../redux/app-reducer';
import Preloader from '../common/Preloader/Preloader';
import CurrentTempContainerWithHooks from "../CurrentTemp/CurrentTempContainerWithHooks";
import WeatherConditionsContainerWithHooks from "../WeatherConditions/WeatherConditionsContainerWithHooks";
import CitiesContainerWithHooks from "../Cities/CitiesContainerWithHooks";

const App = ({initializeApp, city, lat, lon, isInitialized}) => {

    useEffect(() => {
        initializeApp(city, lat, lon)
    }, [initializeApp, city, lat, lon])

    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <div className={s.blockContainer}>
            <div className={s.appFlexRow}>
                <CurrentTempContainerWithHooks/>
                <WeatherConditionsContainerWithHooks/>

            </div>
            <div>
                <CitiesContainerWithHooks/>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized,
        city: state.cities.city,
        lat: state.cities.lat,
        lon: state.cities.lon
    }
}

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

export default AppContainer;

