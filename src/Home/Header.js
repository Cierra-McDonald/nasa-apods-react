import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import '../App.css'


export default withRouter (class Header extends Component {
    render() {
        return (
            
             <div className="header">
                 <h1 className="apod-header">WELCOME TO THE NASA APOD FINDER</h1>
             {
                  this.props.location.pathname !== '/'
                      &&<NavLink exact activeClassName="selected" to="/" className="nav-link">
                  Home Page
              </NavLink>
              }
              {
                  this.props.location.pathname !== '/signup'
                      && <NavLink exact activeClassName="selected" to="/signup" className="nav-link">
                  Sign-Up
              </NavLink>
              }
               {
                  this.props.location.pathname !== '/play'
                      && <NavLink exact activeClassName="selected" to="/play" className="nav-link">
                  Play LogIn
              </NavLink>
              }
              {
                  this.props.location.pathname !== '/login'
                      && <NavLink exact activeClassName="selected" to="/login" className="nav-link">
                  Log-In
              </NavLink>
              }
              {
            //       this.props.location.pathname !== '/myfavorites'
            //           && <NavLink exact activeClassName="selected" to="/myfavorites" className="nav-link">
            //         Favorites!      
            //   </NavLink>
                    this.props.user && this.props.user.token && <>
                    <NavLink to='/myfavorites'>Favorites!</NavLink>
                    <button onClick={this.props.handleLogout}>Sign Out</button>
                    </>
              }
    
          </div>
        )
    }
})

