import React, {useEffect} from 'react';
import s from './CurrentTemp.module.css';
import {connect} from 'react-redux';
import {requestWeather} from '../../redux/weatherReducer';

const CurrentTempContainerWithHooks = ({lat, lon, requestWeather, currentTemp}) => {

    useEffect(() => {
        requestWeather(lat, lon)
    }, [lat, lon, requestWeather])

    return (
        <div>
            <CurrentTemp lat={lat} lon={lon} currentTemp={currentTemp}/>
        </div>
    )
}

const CurrentTemp = (props) => {

    let roundedCurrentTemp = Math.floor(props.currentTemp) + '\u00B0';

    return (
        <div>
            <div className={s.currentTempText}>
                {roundedCurrentTemp}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentTemp: state.weather.currentTemp,
        lat: state.cities.lat,
        lon: state.cities.lon
    }
}

export default connect(mapStateToProps, {requestWeather})(CurrentTempContainerWithHooks);