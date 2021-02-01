import React from 'react';
import s from './WeatherConditions.module.css';
import {connect} from "react-redux";
import {requestWeatherConditions} from "../../redux/weatherConditionsReducer";
import clearWeatherIcon from './../../assets/images/clear.png';
import cloudsWeatherIcon from './../../assets/images/clouds.png';
import drizzleWeatherIcon from './../../assets/images/drizzle.png';
import mistWeatherIcon from './../../assets/images/mist.png';
import rainWeatherIcon from './../../assets/images/rain.png';
import snowWeatherIcon from './../../assets/images/snow.png';
import thunderstormWeatherIcon from './../../assets/images/thunderstorm.png';

class WeatherConditionsContainer extends React.Component {

    componentDidMount() {
        this.props.requestWeatherConditions();
    }

    render() {
        return (
            <WeatherConditions conditions={this.props.weatherConditions}/>
        )
    }
}

const WeatherConditions = (props) => {

    let conditionsValue = props.conditions;

    const getWeatherConditionsImg = () => {
        switch (conditionsValue) {
            case 'Thunderstorm':
                return <img src={thunderstormWeatherIcon}/>;
            case 'Drizzle':
                return <img src={drizzleWeatherIcon}/>;
            case 'Rain':
                return <img src={rainWeatherIcon}/>;
            case 'Snow':
                return <img src={snowWeatherIcon}/>;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                return <img src={mistWeatherIcon}/>;
            case 'Clear':
                return <img src={clearWeatherIcon}/>;
            case 'Clouds':
                return <img src={cloudsWeatherIcon}/>;
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
        weatherConditions: state.weatherConditions.weatherConditions
    }
}

export default connect(mapStateToProps, {requestWeatherConditions})(WeatherConditionsContainer);