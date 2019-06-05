import React from 'react';

import dummyData from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaData: []
    }
  }
  componentDidMount = () => {
    this.setState({
      instaData: dummyData
    })
  }

  render () {
    return (
      /* This is where we want to have the  searchbar, inside h1*/
    <div className="App">
      <h1 className="Header">Instagram</h1>
      <PostContainer data={this.state.instaData} />
    </div>
    );
}
}

export default App;
