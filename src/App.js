import React, { Component } from 'react';
import './app.css';
import BookSearchApp from './BookSearchApp/BookSearchApp';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <BookSearchApp />
      </div>
    )
  }
}

export default App;