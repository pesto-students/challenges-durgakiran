import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <div>
                <input 
                    {...this.props}
                />
            </div>
        );
    }
}

export default Input;