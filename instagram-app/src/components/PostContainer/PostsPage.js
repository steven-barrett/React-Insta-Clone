import React from 'react';

import dummyData from '../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import styled from 'styled-components';
import './PostContainerStyles.css';

// styled components
const WrapperDiv = styled.div`
width: 100%;
height: 100%;
display: flex;    
font-size: 20px;
justify-content: flex-start;
border-bottom: lightgray solid 2px;
margin-bottom: 5px;
`;
const Div = styled.div`
text-align: center;
`;
const P = styled.p`
`;
const Img = styled.img`
`;

class PostsPage extends React.Component {
    constructor(){
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
      resetUserName = () => {
        // localStorage.removeItem('username');
      }
      render() {    
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
        <Div>
        <WrapperDiv>
          <Img src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-57-512.png' className ='instagram-icon' alt='Instagram' />  
          <P>Instagram</P>      
          <SearchBar filterSearchResults={this.filterSearchResults} />          
        </WrapperDiv>
        <PostContainer data={arrayToUse} />
      </Div>
        );
      }

}

export default PostsPage;