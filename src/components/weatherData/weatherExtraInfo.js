import React, { Component } from 'react'
import propTypes from 'prop-types';
import './styles.css'

export default class weatherExtraInfo extends Component {

    render() {
        const { humidity, wind } = this.props
        return (
            <div className="weatherExtraInfoCont">
                <span className="extraInfoText" >Humedad : {`${humidity}%`}</span>
                <span className="extraInfoText">Viento : {`${wind}`}</span>
            </div>
        )
    }
}


weatherExtraInfo.propTypes  = {
    humidity : propTypes.number.isRequired,
    wind : propTypes.string
}