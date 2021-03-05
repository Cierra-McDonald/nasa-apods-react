import React, { Component } from 'react'
import { addApodToFavorites, getApodsByDate } from '../ApodsPages/apiUtilis'

export default class HomePage extends Component {

    
    state = { 
        date: '',
        apod:''
    }
    
    componentDidMount = async () => { 
        const date = new Date();
        const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

        const todayApod = await getApodsByDate(formattedDate)

        await this.setState({
            apod: todayApod
        });


    }

    //need to add error handling!
    getApods = async (e) => { 

        const apodList = await getApodsByDate(e.target.value)
        console.log(apodList);

        await this.setState({
            apod: apodList
        });
    }


    handleDateChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)

        this.setState({
            date: e.target.value
        })
        // this.props.history.push('/apods')
    }

    handleFavoriteButton = async (e) => { 
        
        e.preventDefault()
        console.log(this.props.user.token);
        await addApodToFavorites(this.props.user.token, {
            title: this.state.apod.title,
            date: this.state.apod.date,
            image: this.state.apod.url,
            description: this.state.apod.explanation
        })

        if (!this.props.user.token) {
            return 'You are not logged in! Please sign up or log in before adding to your favorites'
        }


    }

    


    render() {
        return (
            <div>
               
                <form className="calendar-form" onChange={this.getApods}>
                <h2>Choose a date to get started!</h2>
                <input type="date" id="date" name="date" placeholder="Choose a date"/>
                </form>
                
                    <div className="apod-apod">
                        <h3>{this.state.apod.title}</h3>
                        <p>Date:{this.state.apod.date}</p>
                        <img src={this.state.apod.url} alt={this.state.apod.title}/>
                        <p>{this.state.apod.explanation}</p>
                        <button onClick={this.handleFavoriteButton}>Add to Favorites!</button>
                    </div>
               
            </div>
        )
    }
}
