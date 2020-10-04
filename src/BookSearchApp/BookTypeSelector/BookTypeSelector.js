import React, { Component } from 'react';
import './bookTypeSelector.css';

class BookTypeSelector extends Component {
    render() {
        return (
            <div className='BookTypeSelector'>
                <form>
                    <label htmlFor='BookTypeSelector__options'>Book Type: </label>
                    <select 
                        id='BookTypeSelector__options' 
                        name='BookTypeSelector__options' 
                        onChange={e => this.props.bookTypeSelection(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='full'>Full</option>
                        <option value='partial'>Partial</option>
                        <option value='ebook'>eBook</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default BookTypeSelector;