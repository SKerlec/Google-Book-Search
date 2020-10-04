import React, { Component } from 'react';
import './bookSearchApp.css';
import SearchBar from './SearchBar/SearchBar';
import ResultsList from './ResultsList/ResultsList';

class BookSearchApp extends Component {

    render() {
        return (
            <div className='BookSearchApp'>
              <h1>Google Book Search</h1>
              <SearchBar />
              <ResultsList />
            </div>
        )
    }
}

export default BookSearchApp;