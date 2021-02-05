import React from 'react';
import s from './CurrentTemp.module.css';
import {connect} from "react-redux";
import {requestWeather} from "../../redux/weatherReducer";

class CurrentTempContainer extends React.Component {

    componentDidMount() {
        this.props.requestWeather(this.props.lat, this.props.lon);
    }

    render() {
        return (
            <div>
                <CurrentTemp lat={this.props.lat} lon={this.props.lon} currentTemp={this.props.currentTemp}/>
            </div>
        )
    }
}

const CurrentTemp = (props) => {

    let roundedCurrentTemp = Math.floor(props.currentTemp) + '\u00B0';

    return (
        <div>
            <div className={s.currentTempText}>
                {roundedCurrentTemp}

            </div>
            <div>
                {props.lat}
            </div>
            <div>
                {props.lon}
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

export default connect(mapStateToProps, {requestWeather})(CurrentTempContainer);


