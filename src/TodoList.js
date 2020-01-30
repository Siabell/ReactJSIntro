import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        const data = this.props;
    }   

    

    render() {
        const data = this.props.todoList;
        const todoLis = data.map((todo,i) => (
            <li key={'todo-'+i}><Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate} /></li>
        ));
        return (  
            <ul>{todoLis}</ul>
        );
    }


    



}