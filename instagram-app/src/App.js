import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/searchbar'
import { Columns } from "react-bulma-components/full";
import { Image } from "react-bulma-components/full";
import { Card } from "react-bulma-components/full";

class App extends React.Component {
  constructor() {
  super()
  this.state = {
    posts: dummyData
  } 
}
  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(data => (
          <PostContainer data={data} />
        ))}
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
      </div>
    );
  }
}

export default App;


/* 
iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.
*/