import React, { Component } from 'react'
import ApodItem from './ApodItem'

export default class ApodsListPage extends Component {
    render() {
        const loading = this.props.loading
        return (
            <div>
              { 
              loading
                ?
                <div>Coming back from space!</div>
                :
            <ul className="apod-list">
                {this.props.mapOutApods.map(oneApod => <ApodItem
                key={oneApod.id}
                apodProp={oneApod}/>)}
            </ul>

                }
            </div>
        )
    }
}
