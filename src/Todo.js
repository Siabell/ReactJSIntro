import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <div>
                <h4>{this.props.text}</h4>                
                <h4>{this.props.priority}</h4>
                <h4>{this.props.dueDate}</h4>
            </div>
        );
    }
    

}

