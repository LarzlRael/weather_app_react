import React, { Component } from 'react'
import WeatherIcons from 'react-weathericons'
import propTypes from 'prop-types';
import './styles.css'
import { SUN, SNOW, RAIN, CLOUD, DRIZZLE, THUNDER } from '../../constants/weatherConstans'
export default class weatherTemperature extends Component {

    icons = {
        [CLOUD]: 'cloud',
        [SUN]: 'day-sunny',
        [RAIN]: 'rain',
        [SNOW]: 'snow',
        [DRIZZLE]: 'day-showers',
        [THUNDER]: 'day-thunderstorn',
    };
    getWheatherIcon(weatherState) {
        const icon = this.icons[weatherState]
        const sizeIcon = "4x"
        if (icon) {
            //console.log("icono : "+icon)
            return <WeatherIcons className="wicon" name={icon}
                size={sizeIcon} />
        }
        else {
            //console.log("icono : " + icon)
            return <WeatherIcons className="wicon" name="{day-sunny}"
                size={sizeIcon} />
        }
    }

    render() {
        const { temperature, weatherState } = this.props
        //console.log('element enviado : ' + weatherState + "\ntemperatura :" + temperature)
        return (
            <div className="weatherTemperature">
                {this.getWheatherIcon(weatherState)}

                <span className="temperature">{`${temperature} `}</span>
                <span className="temperatureType">C°</span>
            </div >
        )
    }
}

weatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired
}