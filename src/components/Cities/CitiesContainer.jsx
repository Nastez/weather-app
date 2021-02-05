import React from 'react';
import Cities from "./Cities";
import {connect} from "react-redux";
import {getCityTC} from "../../redux/citiesReducer";

class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.getCityTC(this.props.cities);
    }

    render() {
        return (
            <div>
                <Cities cities={this.props.cities}
                        sendCity={this.props.getCityTC}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.city
    }
}

export default connect(mapStateToProps, {getCityTC})(CitiesContainer);