import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Item from '../Item/Item';
import './Grocery.css';

class Grocery extends Component {

    state = {
        items: [
            {
                name: 'Oil',
                isBought: false,
                isSelected: false,
            },
            {
                name: 'Toothpaste',
                isBought: false,
                isSelected: true,
            },
            {
                name: 'Mutton',
                isBought: false,
                isSelected: false,
            },
        ],
        groceryName: '',
    };


    addGrocery() {
        if(this.state.groceryName) {
            const items = [...this.state.items];
            items.push({
                name: this.state.groceryName,
                isBought: false
            });
            this.setState({ items, groceryName: '' });
        }
    }

    deleteItem(index) {
        console.log(index);
        if(Number.isSafeInteger(index)) {
            const items = [...this.state.items];
            items.splice(index, 1);
            console.log(items);
            this.setState({ items });
        }
    }

    handleSelect(index, value) {
        if(Number.isSafeInteger(index)) {
            const items = [...this.state.items];
            items[index].isSelected = value;
            console.log(items);
            this.setState({ items });
        }
    }

    handleInputValue(value) {
        this.setState({
            groceryName: value
        });
    }

    handleSelectAll(value) {
        if( value ) {
            const items = [...this.state.items];
            items.forEach((item) => {
                item.isSelected = true;
            });
            this.setState({ items });
        } else {
            const items = [...this.state.items];
            items.forEach((item) => {
                item.isSelected = false;
            });
            this.setState({ items });
        }
    }

    deleteAll() {
        const items = [...this.state.items];
        const newItems = items.filter((item) => !item.isSelected  );
        this.setState({items: newItems });
    }

    render() {
        return (
            <div className="grocery">
                <h2>Grocery List</h2>
                <div className="grocery__actions">
                    <div className="grocery__select-all">
                        <Input 
                            type="checkbox"
                            id="selectAll"
                            name="selectAll"
                            onChange={({ target: { checked } }) => this.handleSelectAll(checked)}
                        />
                        <Button onClick={() => this.deleteAll()}>
                            <span className="iconify" data-icon="ic:baseline-delete" data-inline="false"></span>
                        </Button>
                        <Button onClick={() => console.log('done all clicked')}>
                            <span className="iconify" data-icon="ion:checkmark-done" data-inline="false"></span>
                        </Button>
                    </div>
                    <div className="grocery__new-item">
                        <Input 
                            type="text"
                            id="newItem"
                            name="newItem"
                            placeholder="Add Grocery Item..."
                            value={this.state.groceryName}
                            onChange={({ target: { value } }) => this.handleInputValue(value)}
                        />
                        <Button onClick={() => this.addGrocery()}>
                           Add
                        </Button>
                    </div>
                </div>
                <hr />
                {
                     this.state.items.map((value, i) => {
                        return <Item deleteItem={() => this.deleteItem(i)} 
                                    name={value.name} 
                                    bought={value.isBought} 
                                    index={i} 
                                    isSelected={value.isSelected}
                                    key={i}
                                    handleSelect={(value) => this.handleSelect(i, value)}
                                />
                    })
                }
            </div>
        );
    }
}

Grocery.propTypes = {

};

export default Grocery;


/**
 * This would be container component of all
 */