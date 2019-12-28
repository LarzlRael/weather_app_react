import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
// importando la funcion desde la carpeta de acciones

import { setSelectedCity, setWeather } from '../actions/index';

// importadno el componete de location_list
import LocationList from '../components/LocationList';
//importando de el reducer
import { getWeatherCities, getCity } from './../reducer'

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setCity, cities, city } = this.props;

        setWeather(cities);
        
        setCity(city);
    }


    handleSelectionLocation = (city) => {
        this.props.setCity(city)
    }

    render() {
        return (
            <div>
                <LocationList cities={this.props.citiesWeather}
                    onSelectedLocation={this.handleSelectionLocation} />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: propTypes.func.isRequired,
    cities: propTypes.array.isRequired,
    citiesWeather: propTypes.array,
    city: propTypes.string.isRequired,
}

const mapDistpaccProps = (distpach) => ({
    setCity: value => distpach(setSelectedCity(value)),
    setWeather: cities => distpach(setWeather(cities))
})

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

export default connect(mapStateToProps, mapDistpaccProps)(LocationListContainer)