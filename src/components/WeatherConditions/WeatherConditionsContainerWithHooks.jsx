import React, {useEffect} from 'react';
import s from './WeatherConditions.module.css';
import {connect} from "react-redux";
import {requestWeather} from "../../redux/weatherReducer";
import clearWeatherIcon from './../../assets/images/clear.svg';
import cloudsWeatherIcon from './../../assets/images/clouds.svg';
import drizzleWeatherIcon from './../../assets/images/drizzle.svg';
import mistWeatherIcon from './../../assets/images/mist.svg';
import rainWeatherIcon from './../../assets/images/rain.svg';
import snowWeatherIcon from './../../assets/images/snow.svg';
import thunderstormWeatherIcon from './../../assets/images/thunderstorm.svg';

const WeatherConditionsContainerWithHooks = ({weatherConditions, lat, lon, requestWeather}) => {

    useEffect(() => {requestWeather(lat, lon)}, [requestWeather, lat, lon])

    return (
        <WeatherConditions conditions={weatherConditions}/>
    )
}

const WeatherConditions = (props) => {

    let conditionsValue = props.conditions;

    const getWeatherConditionsImg = () => {
        switch (conditionsValue) {
            case 'Thunderstorm':
                return <img alt='' src={thunderstormWeatherIcon}/>;
            case 'Drizzle':
                return <img alt='' src={drizzleWeatherIcon}/>;
            case 'Rain':
                return <img alt='' src={rainWeatherIcon}/>;
            case 'Snow':
                return <img alt='' src={snowWeatherIcon}/>;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                return <img alt='' src={mistWeatherIcon}/>;
            case 'Clear':
                return <img alt='' src={clearWeatherIcon}/>;
            case 'Clouds':
                return <img alt='' src={cloudsWeatherIcon}/>;
            default:
                return null;
        }
    }

    return (
        <div className={s.conditionsImg}>
            {getWeatherConditionsImg()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weatherConditions: state.weather.weatherConditions,
        lat: state.cities.lat,
        lon: state.cities.lon
    }
}

export default connect(mapStateToProps, {requestWeather})(WeatherConditionsContainerWithHooks);