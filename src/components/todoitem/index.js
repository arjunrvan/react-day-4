import React from 'react';

class ToDoItem extends React.Component {

    render() {
        return (
            <div onClick = {this.props.click}>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default ToDoItem;
