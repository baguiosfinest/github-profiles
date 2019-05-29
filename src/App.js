import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Page from './Components/Page';

import axios from 'axios';


class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          username: 'baguiosfinest',
          userData: [],
          userRepos: [],
          perPage: 10
      }
  }

  getUserData() {
    axios.get(`https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`)
      .then((res) => {
        console.log('User:', res.data);
        this.setState({
          userData: res.data
        })
      })
      .catch((err) => {
        console.log('Error:' , err);
      })
  }

  getUserRepos() {
    axios.get(`https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`)
      .then((res) => {
        console.log('Repos:', res.data);
        this.setState({
          userRepos: res.data
        })
      })
      .catch((err) => {
        console.log('Error:' , err);
      })
  }

  handleFormSubmit(username) {

    this.setState({ username: username }, function() {
      // re render
      this.getUserData();
      this.getUserRepos();
    })

  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return (
      <div className="App h-100">
        <Header></Header>
        <Page {...this.state} handleFormSubmit={ this.handleFormSubmit.bind(this) }></Page>
        <Footer></Footer>
      </div>
    );
  }

}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
}

App.defaultProps = {
  clientId: '5918bd3871c7123a3ed3',
  clientSecret: 'ebba7702ce052a101e460459ed023160d162c124'
}

export default App;