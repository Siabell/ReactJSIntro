import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';

function App() {
  const todos = [
    {text:"Learn React", priority:5, dueDate: new Date().toDateString() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23).toDateString() },
    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30).toDateString() }];
  return (
    <div>
      <TodoList todoList={todos}/>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
          
        </a>
      </header>
  -->*/}
    </div>
  );
}

export default App;
