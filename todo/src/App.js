import React, { Component } from 'react';
import './App.css';
import Todos from './ToDoList';

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'buy some milk'},
            {id: 2, content: 'play mario kart'},
            {id: 3, content: 'kill czarcza'}
        ]
    };

    render() {
        return (
            <div className = "App">
                <h1 className="center blue-text">Todo's</h1>
                <Todos
                    todos = {this.state.todos}
                />
            </div>
        )
    }
}
export default App;
