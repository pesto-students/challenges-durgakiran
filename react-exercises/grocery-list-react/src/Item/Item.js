import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Item.css';

class Item extends Component {


    handleSelect(value) {
        this.props.handleSelect(value);
    }

    render() {
        return (
            <div className="item">
                <Input 
                    type="checkbox"
                    id="selectAll"
                    name="selectAll"
                    checked={this.props.isSelected}
                    onChange={({ target: { checked } }) => this.handleSelect(checked)}
                />
                <Button onClick={() => this.props.deleteItem(this.props.index)}>
                    <span className="iconify" data-icon="ic:baseline-delete" data-inline="false"></span>
                </Button>
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}

export default Item;