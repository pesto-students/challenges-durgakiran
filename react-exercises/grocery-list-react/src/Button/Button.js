import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div>
                <button { ...this.props } >
                    {this.props.children}
                </button>
            </div>
        );
    }
}

export default Button;