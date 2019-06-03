import React, { Component } from 'react';
import './App.scss';
import PostPage from './components/PostContainer/postpage'
import withAuthenticate from './components/Authentication/withauthenticate'
// import SearchBar from './components/SearchBar/searchbar'
// import { Columns } from "react-bulma-components/full";
// import { Image } from "react-bulma-components/full";
// import { Card } from "react-bulma-components/full";

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    )
  }
}


export default withAuthenticate(App);

