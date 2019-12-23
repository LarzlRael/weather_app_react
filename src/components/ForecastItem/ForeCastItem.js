import React, { Component } from 'react'
import propTypes from 'prop-types'
import WeahterData from '../weatherData/weahterData'

export default class ForeCastItem extends Component {

    render() {
        
        const { weekDay, hour, data } = this.props
        return (
            <div>
                <h3>
                    {weekDay} hora :{hour} hrs.
                </h3>
                <WeahterData data={data}></WeahterData>
            </div>
        )
    }
}
ForeCastItem.propTypes = {
    weekDay: propTypes.string.isRequired,
    hour: propTypes.number.isRequired
}