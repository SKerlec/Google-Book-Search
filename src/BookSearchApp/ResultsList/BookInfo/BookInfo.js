import { findAllByTitle } from '@testing-library/react';
import React, { Component } from 'react';
import './bookInfo.css';

export default function BookInfo(props) {

    return (
        <div className='BookInfo'>
            <div className='BookInfo__img'>
                <img src={props.cover} ></img>
            </div> 
            <div className='BookInfo__information'>
                <div className='BookInfo__title'>
                    {props.title}
                </div>
                <div className='BookInfo__author'>
                    Author: {props.author}
                </div>
                <div className='BookInfo__price'>
                    Price: ${props.price}
                </div>
                <div className='BookInfo__description'>
                    {props.description}
                </div>
            </div>
                
        </div>
    )
}