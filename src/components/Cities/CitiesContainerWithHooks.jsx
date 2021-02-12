import React, {useEffect} from 'react';
import Cities from './Cities';
import {connect} from 'react-redux';
import {getCityTC} from '../../redux/citiesReducer';

const CitiesContainerWithHooks = ({getCityTC, cities}) => {

    useEffect(() => {getCityTC(cities)}, [cities, getCityTC])

        return (
            <div>
                <Cities cities={cities}
                        sendCity={getCityTC}
                />
            </div>
        )

}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.city
    }
}

export default connect(mapStateToProps, {getCityTC})(CitiesContainerWithHooks);