import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

import Header from './Home/Header';
import HomePage from './Home/HomePage';
import LoginPage from './AuthPages/LoginPage'
import SignUpPage from './AuthPages/SignUpPage';
import ApodsListPage from './ApodsPages/ApodsListPage';
import ApodsFavoritesPage from './ApodsPages/ApodsFavoritesPage';
import PrivateRoute from './Home/PrivateRoute';
import { addUserToLocalStorage, getUserFromLocalStorage } from './localStorageUtils'

export default class App extends Component {

  state = { 
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => { 
    
    this.setState({ user })

    addUserToLocalStorage(user);
    
  }


  render() {
    const { user } = this.state;
   
      return (
          <div>
              <Router>
              <Header
              user={this.state.user}/>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <HomePage {...routerProps} />} 
                      />
                      <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => <SignUpPage {...routerProps} 
                          handleUserChange={this.handleUserChange}/>} 
                      />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <LoginPage {...routerProps} />} 
                      />
                      <Route 
                          path="/apods" 
                          exact
                          render={(routerProps) => <ApodsListPage {...routerProps}
                          />} 
                      />
                        <PrivateRoute 
                          path="/myfavorites" 
                          exact
                          token={user && user.token}
                          render={(routerProps) => 
                          <ApodsFavoritesPage
                            user={this.state.user}
                            {...routerProps} />} 
                      />
                     
                  </Switch>
              </Router>
          </div>
      )
  }
}