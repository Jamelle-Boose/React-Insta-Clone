import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/searchbarcontainer'
// import SearchBar from './components/SearchBar/searchbar'
// import { Columns } from "react-bulma-components/full";
// import { Image } from "react-bulma-components/full";
// import { Card } from "react-bulma-components/full";

class App extends Component {
  constructor() {
  super()
  this.state = {
    data: [],
    filteredPosts: []
  } 
}

componentDidMount() {
  this.setState({
    data: dummyData
  })
}

searchPostsHandler = e => {
  const data = this.state.data.filter(p => {
    if (p.username.includes(e.target.value)) {
      return p
    }
  })
  this.setState({
    filteredPosts: data
  })
}

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
        data={
          this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
          : this.state.data
        }
        />
      </div>
    )
  }
}

export default App;


/* 
iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.

        <Columns>
          <Columns.Column size="three-quarters">
          <Card>
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
            <Image renderAs="a" href="https://google.com" className="card-header-icon" target="_blank" aria-label="more options" />
          </header>
          </Card>
          </Columns.Column>
        </Columns>

*/