import React, { Component } from 'react';
import './searchBox.css';
import SearchBar from './SearchBar/SearchBar';
import SearchFilters from './SearchFilters/SearchFilters';

class SearchBox extends Component {
    render() {
        return (
            <div className='SearchBox'>
                <SearchBar 
                    searchEntry={this.props.searchEntry} 
                    searchVal={this.props.searchVal}
                    />
                <SearchFilters 
                    printType={this.props.printType}
                    printTypeSelection={this.props.printTypeSelection}
                    bookType={this.props.bookType}
                    bookTypeSelection={this.props.bookTypeSelection}
                />
            </div>
        )
    }
}

export default SearchBox;