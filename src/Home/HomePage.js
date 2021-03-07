import React, { Component } from 'react'
import { addApodToFavorites, getApodsByDate } from '../ApodsPages/apiUtilis'
// import { loading } from '../loading';

export default class HomePage extends Component {

    
    state = { 
        date: '',
        apod:'',
        loading: true
    }
    
    componentDidMount = async () => { 

        this.setState({ 
            loading: true
        })
        const date = new Date();
        const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

        const todayApod = await getApodsByDate(formattedDate)

        await this.setState({
            apod: todayApod,
            loading: false
        });


    }

    //need to add error handling!
    getApods = async (e) => { 

        const apodList = await getApodsByDate(e.target.value)
        
        await this.setState({
            apod: apodList
        });
    }


    handleDateChange = (e) => {
        e.preventDefault()
        

        this.setState({
            date: e.target.value
        })
        // this.props.history.push('/apods')
    }

    handleFavoriteButton = async (e) => { 
        
        e.preventDefault()

        try {
        await addApodToFavorites(this.props.user.token, {
            title: this.state.apod.title,
            date: this.state.apod.date,
            image: this.state.apod.url,
            description: this.state.apod.explanation
        })
        } catch(e) { 
            this.setState({ error: 'Uh oh, please login to add this to your favorites.' })
        }

        


    }

    


    render() {
        return (
            <div>
               
                <form className="calendar-form" onChange={this.getApods}>
                <h2>Choose a date to get started!</h2>
                <input type="date" id="date" name="date" placeholder="Choose a date"/>
                </form>
                {
                    this.state.loading 
                    ?
                    <div> Hi I'm loading! </div>
                    :
                    <div className="outer-apod-div">
                        <div className="apod-apod">
                            {this.state.error && <h5 style={{ color: 'red'}}>{this.state.error}</h5>}
                            <h3>{this.state.apod.title}</h3>
                            <p>Date:{this.state.apod.date}</p>
                            <img src={this.state.apod.url} alt={this.state.apod.title}/>
                            <p>{this.state.apod.explanation}</p>
                            <button onClick={this.handleFavoriteButton}>Add to Favorites!</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
