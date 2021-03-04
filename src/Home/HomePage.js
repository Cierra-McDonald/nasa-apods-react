import React, { Component } from 'react'

export default class HomePage extends Component {

    state = { 
        date: '',
        apodList: []
    }


    handleDateChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)

        this.setState({
            date: e.target.value
        })
        this.props.history.push('/apods')
    }

    render() {
        return (
            <div>
               
                <form className="calendar-form" onChange={this.handleDateChange}>
                <h2>Choose a date to get started!</h2>
                <input type="date" id="date" name="date" placeholder="Choose a date"/>
                </form>
                <p>{this.state.date} delete this later</p> 
            </div>
        )
    }
}
