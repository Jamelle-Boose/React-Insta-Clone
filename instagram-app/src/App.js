import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/postcontainer'

function App() {
  return (
    <div className="App">
      {dummyData.map(data => (
        <PostContainer data={data} />
      ))}
    </div>
  );
}

export default App;


/* 
iterate over said data, passing each individual object as a prop to an instance of `PostContainer`.
*/