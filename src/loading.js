import React, { Component } from 'react'
import { loadcircle } from './assets/loadcircle.gif'

export default class loading extends Component {
    render() {
        return (
            <div>
                
                <img src={loadcircle} alt="loading"/>
                
            </div>
        )
    }
}
