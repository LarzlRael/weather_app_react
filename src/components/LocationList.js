import React, { Component } from 'react'
import WeatherLocation from './weatherData/index'
import propTypes from 'prop-types'
import './weatherData/locationListStyle.css';

export default class LocationList extends Component {

    handleWeatherLocationClick = (city) => {
        const { onSelectedLocation } = this.props;
        console.log(`ciudad Seleccionada: ${onSelectedLocation}`);
        onSelectedLocation(city)
    }
    strTocomponenets = cities => (
        cities.map((city, i) =>
            <WeatherLocation
                key={i}
                city={city.name}
                onWeatherLocationClick={() => this.handleWeatherLocationClick(city.name)}
                data={city.data} />)
    )

    render() {
        const { cities } = this.props
        return (
            <div className="locationList" >
                {this.strTocomponenets(cities)}
            </div>
        )
    }
}
LocationList.propType = {
    cities: propTypes.array.isRequired,
    onSelectLocation: propTypes.func
}