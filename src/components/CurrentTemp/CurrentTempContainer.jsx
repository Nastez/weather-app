import React from 'react';
import s from './CurrentTemp.module.css';
import {connect} from "react-redux";
import {requestCurrentTemp} from "../../redux/currentTempReducer";

class CurrentTempContainer extends React.Component {

    componentDidMount() {
        this.props.requestCurrentTemp();
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
        currentTemp: state.currentTemp.currentTemp
    }
}

export default connect(mapStateToProps, {requestCurrentTemp})(CurrentTempContainer);


