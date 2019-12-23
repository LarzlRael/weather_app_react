import React, { Component } from 'react'
import propTypes from 'prop-types';
import './stylesLocation.css'
export default class location extends Component {

    render() {
        const { city } = this.props
        console.log('ciudad recibida :' + city)
        return (
            <div className="locationCount">
                <h1>{city}</h1>
            </div>
        )
    }
}
Location.propTypes = {
    city: propTypes.string.isRequired,
}