import React, { Component } from 'react'

export default class ApodItem extends Component {


    render() {
        return (
            <div>
                <div className="apod-item">
                    <div className="apod-map">{this.props.apodProp.title}</div>
                    <div className="apod-map">{this.props.apodProp.date}</div>
                    <img className="apod-map" src={this.props.apodProp.image} alt={this.props.apodProp.title}/>
                    {/* <div className="apod-map">{this.props.apodProp.description}</div> */}
                    <button value={this.props.key1} onClick={this.props.deleteApod(this.props.key1)}>Delete From Space Faves</button>
                </div>
                
            </div>
        )
    }
}
