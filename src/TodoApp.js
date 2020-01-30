import React from 'react';
import {TodoList} from './TodoList';

 class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date().toDateString() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23).toDateString() },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30).toDateString() }], text: '' , priority: '', dueDate: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleChangePrior = this.handleChangePrior.bind(this);
      this.handleChangeDate = this.handleChangeDate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO List</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Do you want to add another?
            </label>
            <input
              id="new-todoText"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <input
              id="new-todoPrior"
              onChange={this.handleChangePrior}
              value={this.state.priority}
            />
            <input
              type="date"
              id="new-todoDate"
              onChange={this.handleChangeDate}
              value={this.state.dueDate}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    handleChangePrior(e) {
      this.setState({ priority: e.target.value });
    }
    handleChangeDate(e) {
      this.setState({ dueDate: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      
      const newItem = {
        text: this.state.text,
        priority : this.state.priority,
        dueDate : this.state.dueDate,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

export default TodoApp;