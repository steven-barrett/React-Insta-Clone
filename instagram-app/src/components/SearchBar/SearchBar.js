import React from 'react';

import './SearchBarStyles.css';

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
        <form onSubmit={this.filterSearchResults}>
            <input className='search-input'
            placeholder='Search...'
            value={this.state.searchTerm}
            name="searchTerm"
            onChange={this.handleChanges}
            />
        </form>              
        );
    }
}

export default SearchBar;