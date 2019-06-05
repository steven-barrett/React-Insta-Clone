import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaData: [],
      filteredData: []
    }
  }
  componentDidMount = () => {
    this.setState({
      instaData: dummyData
    })
  }

  filterSearchResults = (searchTerm) => {
    if (searchTerm === '') {
      // We'll want to return the original array to the list
      this.setState({
        filteredData: []
      })
    }
    let resultingArray = this.state.instaData.filter(item => {
      if (item.username.includes(searchTerm)) {
        return item;
      }
    })
    this.setState({
      filteredData: resultingArray
    })

  }

  render () {
    // Determine which array to pass to PostContainer
    let arrayToUse = [];
    if (this.state.filteredData.length > 0) {
      arrayToUse = [...this.state.filteredData];
    } 
    else {
      arrayToUse = [...this.state.instaData];
    }
    
    return (
      /* This is where we want to have the  searchbar, inside h1*/
    <div className="App">
      <div className="Header">
        <img src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-57-512.png' className ='instagram-icon' alt='Instagram' />  
        <p>Instagram</p>      
        <SearchBar filterSearchResults={this.filterSearchResults} />      
      </div>
      <PostContainer data={arrayToUse} />
    </div>
    );
}
}

export default App;
