import React, { Component } from 'react';
import './bookInfo.css';
import BookImg from './BookImg/BookImg';

class BookInfo extends Component {
    render() {
        return (
            <div className='BookInfo'>
                <div className='BookInfo__information'>
                    <div className='BookInfo__title'>

                    </div>
                    <div className='BookInfo__author'>

                    </div>
                    <div className='BookInfo__price'>

                    </div>
                    <div className='BookInfo__description'>

                    </div>
                </div>
                <div className='BookInfo__img'>
                    <BookImg />
                </div> 
            </div>
        )
    }
}

export default BookInfo;