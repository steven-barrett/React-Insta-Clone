import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
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

  filterSearchResults = () => {

  }

  render () {
    return (
      /* This is where we want to have the  searchbar, inside h1*/
    <div className="App">
      <div className="Header">
        <img src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-57-512.png' className ='instagram-icon' alt='Instagram' />        
        <SearchBar />      
      </div>
      <PostContainer data={this.state.instaData} />
    </div>
    );
}
}

export default App;
