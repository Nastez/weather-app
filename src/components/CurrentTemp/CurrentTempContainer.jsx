import React from 'react';
import s from './CurrentTemp.module.css';
import {connect} from "react-redux";
import {requestWeather} from "../../redux/weatherReducer";

class CurrentTempContainer extends React.Component {

    componentDidMount() {
        this.props.requestWeather();
    }

    render() {
        return (
            <div>
                <CurrentTemp currentTemp={this.props.currentTemp}/>
            </div>
        )
    }
}

const CurrentTemp = (props) => {

    let roundedCurrentTemp = Math.floor(props.currentTemp) + '\u00B0';

    return (
        <div className={s.currentTempText}>
            {roundedCurrentTemp}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentTemp: state.weather.currentTemp
    }
}

export default connect(mapStateToProps, {requestWeather})(CurrentTempContainer);


