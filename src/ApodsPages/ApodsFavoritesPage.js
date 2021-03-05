import React, { Component } from 'react'
import { getApodFavorites } from './apiUtilis'
import ApodsListPage from './ApodsListPage'

export default class ApodsFavoritesPage extends Component {

    state = { 
        favoriteApods: [],
        loading: true
    }

    componentDidMount = async () => { 

        this.setState({
            loading: true
        })
        await this.getUserFaves()

        this.setState({
            loading: false
        })
    }

    getUserFaves = async () => {

        console.log(this.props.user.token);
        const userFaves = await getApodFavorites(this.props.user.token)
        console.log(userFaves);
        this.setState({
            favoriteApods: userFaves
        })
    }


    render() {
        return (
            <div>
                <ApodsListPage
                loading={this.state.loading}
                mapOutApods={this.state.favoriteApods}/>
            </div>
        )
    }
}
