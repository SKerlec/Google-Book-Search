import React, { Component } from 'react';
import './app.css';
import BookSearchApp from './BookSearchApp/BookSearchApp';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1>Google Book Search</h1>
        <BookSearchApp />
      </div>
    )
  }
}

export default App;