import React, { Component } from 'react'
import ForecastExtende from '../components/forecastExtende';
import { connect } from 'react-redux'
import propTypes from 'prop-types';
//import { getForecastDataFromCitis } from './../reducer/citys'

import { getCity, getForecastDataFromCities } from './../reducer/'

class ForecastExtendContainer extends Component {

    render() {
        const { city, forecastData } = this.props;

        return (
            city &&
            <ForecastExtende city={city} forecastData={forecastData} />
        )
    }
}

ForecastExtendContainer.propTypes = {
    city: propTypes.number.isRequired,
    forecastData: propTypes.array
}
const mapSateToProps = (state) =>
    ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });


export default connect(mapSateToProps, null)(ForecastExtendContainer);