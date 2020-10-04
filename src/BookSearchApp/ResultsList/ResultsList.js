import React, { Component } from 'react';
import './resultsList.css';
import BookInfo from './BookInfo/BookInfo';

class ResultsList extends Component {

    render() {
    
        const booksList = this
            .props
            .searchResults
            .map((items, i) => 
            <BookInfo 
                searchResults={this.props.searchResults} 
                { ...items } 
                key={i}
            />);

        return (
            <div className='ResultsList'>
                { booksList }
            </div>
        )
    }
}

ResultsList.defaultProps = {
    searchResults: []
};

export default ResultsList;