import React, { Component } from 'react';
import './bookSearchApp.css';
import SearchBox from './SearchBox/SearchBox';
import ResultsList from './ResultsList/ResultsList';

class BookSearchApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      printType: 'all',
      bookType: 'all',
      searchEntry: '',
      searchResults: [],
      error: null
    };
  }

  componentDidMount() {

    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?';
    const apiKey = 'AIzaSyDArRvH5yYDA1Gy-3_4cHhIh6g1CuyPkfU';
    const fullUrl = baseUrl + 'q=' + this.state.searchEntry + '&printtype=' + this.state.printType + '&booktype=' + this.state.bookType + '&key=' + apiKey;

    fetch(fullUrl)
      .then(res => {
        if(!res.ok) {
          throw new Error(`Sorry, we could not find any results matching "${this.state.searchEntry}" at this time.`);
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchResults: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  printTypeChanged(printTypeSel) {
    this.setState({
      printType: printTypeSel
    });
  }

  bookTypeChanged(bookTypeSel) {
    this.setState({
      bookType: bookTypeSel
    });
  }

  searchEntryChanged(entryVal) {
    this.setState({
      searchEntry: entryVal
    });
  }

  searchResultsChanged(newResults) {
    this.setState({
      searchResults: newResults
    });
  }

    render() {
      const error = this.state.error
        ? <div className='error'>{this.state.error}</div>
        : ''

        return (
            <div className='BookSearchApp'>
              <h1>Google Book Search</h1>
              <SearchBox 
                printType={this.state.printType}
                printTypeSelection={printTypeSel => this.printTypeChanged(printTypeSel)}
                bookType={this.state.bookType}
                bookTypeSelection={bookTypeSel => this.bookTypeChanged(bookTypeSel)}
                searchVal={entryVal => this.searchEntryChanged(entryVal)}
                searchEntry={this.state.searchEntry}
              />
              { error }
              <ResultsList 
                searchResults={this.state.searchResults}
                showResults={newResults => this.searchResultsChanged(newResults)} />
            </div>
        )
    }
}

export default BookSearchApp;