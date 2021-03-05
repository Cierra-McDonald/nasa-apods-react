import React, { Component } from 'react'
import { deleteApodFavorite, getApodFavorites } from './apiUtilis'
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

        const userFaves = await getApodFavorites(this.props.user.token)
        
        this.setState({
            favoriteApods: userFaves
        })
    }

    deleteUserFave = async (i) => { 

        await deleteApodFavorite(this.props.user.token, i.target.value);
        
        await this.getUserFaves()
        
        
    }


    render() {
        return (
            <div>
                <ApodsListPage
                loading={this.state.loading}
                mapOutApods={this.state.favoriteApods}
                deleteApod={()=>this.deleteUserFave}/>
            </div>
        )
    }
}
