import React from 'react';

import styled from 'styled-components';
import './SearchBarStyles.css';

// Styled components
const Form = styled.form`
`;        
const Input = styled.input`        
`;

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        }
    }
    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    filterSearchResults = e => {
        e.preventDefault();
        this.props.filterSearchResults(this.state.searchTerm);
    }

    render() {
        return (
        <Form onSubmit={this.filterSearchResults}>
            <Input className='search-input'
            placeholder='Search...'
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleChanges}
            />
        </Form>              
        );
    }
}

export default SearchBar;