import React, { Component } from 'react';
import propTypes from 'prop-types';
import ForeCastItem from './ForecastItem/ForeCastItem'
import './weatherData/locationListStyle.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformerForecast from './weatherData/services/transformerForecast';
import axios from 'axios';

export default class forecastExtende extends Component {

    constructor() {
        super();
        this.state = {
            forecasetData: null,

        };
        console.log(this.state)
    }


    appid = '1df4b54c2551746c00253fd4a88eedb4'
    uri = 'http://api.openweathermap.org/data/2.5/forecast'
    //ejemplo de la peiticion con id el 
    //https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22

    async  componentDidMount() {
        this.updateCity(this.getCity())
        
    }
    //compoente recivira un componete
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.getCity()) {
            this.setState({ forecasetData: null })
            this.updateCity(nextProps.city)
        }

    }

    updateCity = async city => {
        const url_forecast = `${this.uri}?id=${this.getCity()}&appid=${this.appid}`;
        const weatherData = await (await axios.get(url_forecast)).data;
        const forecasetData = transformerForecast(weatherData)
        console.log(weatherData)
        console.log(forecasetData)
        this.setState({ forecasetData })
        
        const city_name = this.props.city_name;
        console.log('ciudad: ' + city_name)
        //console.log(url_forecast)
    }
    renderProgres() {
        return (<CircularProgress />)
    }
    renderForeCastItemDay(forecasetData) {
        return forecasetData.map(forecast =>
            (<ForeCastItem key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                data={forecast.data}
                hour={forecast.hour} />))
    }

    getCity() {
        return this.props.city;
    }

    render() {
        // console.log('(forestcamp)ciudad recibida : ' + city)
        const { forecasetData } = this.state;
        return (
            <div>
                <h2 className="forest-title">Pronostico extendido para
                 {this.getCity()}</h2>
                {/* {this.renderForeCastItemDay()} */}
                {forecasetData ? this.renderForeCastItemDay(forecasetData) : this.renderProgres()}
            </div>
        );
    }
}

forecastExtende.propTypes = {
    city: propTypes.string.isRequired,
    data: propTypes.shape({
        temperature: propTypes.number.isRequired,
        weatherstate: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.string.isRequired
    }
    )
}
