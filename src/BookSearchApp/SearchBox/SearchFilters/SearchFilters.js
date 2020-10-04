import React, { Component } from 'react';
import PrintTypeSelector from './PrintTypeSelector/PrintTypeSelector';
import BookTypeSelector from './BookTypeSelector/BookTypeSelector';

class SearchFilters extends Component {
    render() {
        return (
            <div className='SearchFilters'>
                <PrintTypeSelector 
                    printType={this.props.printType}
                    printTypeSelection={this.props.printTypeSelection} />
                <BookTypeSelector 
                    bookType={this.props.bookType}
                    bookTypeSelection={this.props.bookTypeSelection} />
            </div>
        )
    }
}

export default SearchFilters;