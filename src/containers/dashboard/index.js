import React from 'react';
import ToDoItem from '../../components/todoitem';
import classes from './dashboard.module.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }
        this.addNew = this.addNew.bind(this);
    }

    delItem(keyClick) {
        const newList = this.state.items.filter(item => item.key !== keyClick);
        this.setState({items:newList});
    }

    addNew() {
        
        // console.log(this._inputElement.value);
        if (this._inputElement!=="") {
            const newItem = {
                title: this._inputElement.value,
                key: Date.now()
            }
            
            this.setState({items: [...this.state.items, newItem]});

        }
        

        this._inputElement.value='';
    }

    render() {
        return (
            <div className = {classes.dash_container}>
                <input type="text" placeholder = 'Item' ref = {(a) => this._inputElement = a }/>
                <button onClick = {this.addNew}>Enter</button>

                <div>
                    {this.state.items.map((item) => 
                    <ToDoItem 
                    click = {() => {this.delItem(item.key)}} 
                    title = {item.title}
                    key = {item.key}
                    />
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Dashboard;
