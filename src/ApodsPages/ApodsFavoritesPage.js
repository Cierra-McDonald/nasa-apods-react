import React, { Component } from 'react'
import { getApodFavorites } from './apiUtilis'
import ApodsListPage from './ApodsListPage'

export default class ApodsFavoritesPage extends Component {

    state = { 
        favoriteApods: [],
    }

    componentDidMount = async () => { 
        await this.getUserFaves()
    }

    getUserFaves = async () => {

        console.log(this.props.user.token);
        const userFaves = await getApodFavorites(this.props.user.token)

        this.setState({
            favoriteApods: userFaves
        })
    }


    render() {
        return (
            <div>
                <ApodsListPage
                mapOutApods={this.getUserFaves}/>
            </div>
        )
    }
}
