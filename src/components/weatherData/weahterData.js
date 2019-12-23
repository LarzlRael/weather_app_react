import React, { Component } from 'react';
import propTypes from 'prop-types'
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';
import './styles.css'
export default class weahterData extends Component {
    render() {
        
        const { temperature, weatherstate, humidity, wind } = this.props.data;
        
        
        return (
            <div className="weatherDataCount">
                <WeatherTemperature
                    temperature={temperature}
                    weatherState={weatherstate} />
                <WeatherExtraInfo humidity={humidity} wind={wind} />
            </div>
        )
    }
}
weahterData.propTypes = {
    data : propTypes.shape( {
            temperature : propTypes.number.isRequired,
            weatherstate: propTypes.string.isRequired,
            humidity : propTypes.number.isRequired,
            wind : propTypes.string.isRequired
        }
    )  
}


