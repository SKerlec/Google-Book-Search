import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {

    render() {

        return (
            <div className='SearchBar'>
                <form>
                    <label htmlFor='SearchBar__input'>Search: </label>
                    <input 
                        type='text' 
                        name='SearchBar__input' 
                        id='SearchBar__input' 
                        placeholder='Book Title' 
                        value={this.props.searchEntry}
                        onChange={e => this.props.searchVal(e.target.value)}/>
                    <button htmlFor='SearchBar__input' className='SearchBar__button'>Search</button>
                </form>
                
            </div>
        )
    }
}

export default SearchBar;