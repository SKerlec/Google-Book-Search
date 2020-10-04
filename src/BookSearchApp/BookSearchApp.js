import React, { Component } from 'react';
import './bookSearchApp.css';
import PrintTypeSelector from './PrintTypeSelector/PrintTypeSelector';
import BookTypeSelector from './BookTypeSelector/BookTypeSelector';
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

    handleSubmit(e) {
        e.preventDefault();
        const baseUrl = 'https://www.googleapis.com/books/v1/volumes?';
        const apiKey = 'AIzaSyDArRvH5yYDA1Gy-3_4cHhIh6g1CuyPkfU';
        const encodedSearchEntry = encodeURIComponent(this.state.searchEntry).replace(' ', '+');
        const url = baseUrl + 'q=' + encodedSearchEntry + '&printtype=' + this.state.printType + '&booktype=' + this.state.bookType + '&key=' + apiKey;

        fetch(url)
        .then(res => {
            if(!res.ok) {
            throw new Error(`Sorry, we could not find any results matching "${this.state.searchEntry}" at this time.`);
            }
            return res;
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
            searchResults: [data],
            error: null
            });
            console.log(url);
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
          searchResults: [...this.state.searchResults, newResults]
        });
    }

    render() {

        return (
            <div className='BookSearchApp'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='SearchBar__input'>Search: </label>
                    <input 
                        type='text' 
                        name='SearchBar__input' 
                        id='SearchBar__input' 
                        placeholder='Book Title' 
                        value={this.props.searchEntry}
                        onChange={e => this.searchEntryChanged(e.target.value)}/>
                    <button 
                        htmlFor='form' 
                        className='SearchBar__button'
                        type='submit'
                        >
                        Search
                    </button>
                </form>
                <div className='SearchBar__filters'>
                    <BookTypeSelector 
                        bookTypeSelection={bookTypeSel => this.bookTypeChanged(bookTypeSel)}
                    />
                    <PrintTypeSelector 
                        printTypeSelection={printTypeSel => this.printTypeChanged(printTypeSel)}    
                    />
                </div>
                <div className='Results'>
                    <ResultsList 
                        searchResults={this.state.searchResults}
                    />
                </div>
            </div>
        )
    }
}

export default BookSearchApp;