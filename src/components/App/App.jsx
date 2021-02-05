import React from 'react';
import s from './App.module.css'
import WeatherConditionsContainer from "../WeatherConditions/WeatherConditionsContainer";
import CurrentTempContainer from "../CurrentTemp/CurrentTempContainer";
import CitiesContainer from "../Cities/CitiesContainer";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "../common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp(this.props.city, this.props.lat, this.props.lon);
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <div className={`${s.appWrapper} ${s.appFlexRow}`}>
                <CurrentTempContainer/>
                <WeatherConditionsContainer/>
                <CitiesContainer/>
            </div>
        )
    }
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