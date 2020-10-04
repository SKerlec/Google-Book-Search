import React, { Component } from 'react';
import './printTypeSelector.css';

class PrintTypeSelector extends Component {
    render() {

        return (
            <div className='PrintTypeSelector'>
                <form>
                    <label htmlFor='PrintTypeSelector__options'>Print type: </label>
                    <select 
                        id='PrintTypeSelector__options' 
                        name='PrintTypeSelector__options' 
                        value={this.props.printType}
                        onChange={e => this.props.printTypeSelection(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default PrintTypeSelector;