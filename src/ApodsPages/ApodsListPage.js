import React, { Component } from 'react'
import ApodItem from './ApodItem'
import loadingCircle from '../assets/loadcircle.gif'

export default class ApodsListPage extends Component {
    render() {
        const loading = this.props.loading
        return (
            <div>
              { 
              loading
                ?
                <div><img className="loading-circle" src ={loadingCircle} alt="hi i'm loading"/></div>
                :
            <ul className="apod-list">
                {this.props.mapOutApods.map(oneApod => <ApodItem
                key={oneApod.id}
                key1={oneApod.id}
                apodProp={oneApod}
                deleteApod={this.props.deleteApod}/>)}
            </ul>

                }
            </div>
        )
    }
}
