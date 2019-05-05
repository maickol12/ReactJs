import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Cards from './components/Cards';
import TodoForm from './components/TodoForm';

import {todos} from './todos.json';
class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddToDo    = this.handleAddToDo.bind(this);
    this.handleRemoveToDo = this.handleRemoveToDo.bind(this);
  }
  handleAddToDo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    });
  }
  handleRemoveToDo(index){
    this.setState({
      todos: this.state.todos.filter((e,i)=>{
        return i !== index
      })
    });
  }
  render() {
    return (
      <div className="App">
          <Navigation todos={this.state}/>
          <TodoForm onAddToDo={this.handleAddToDo}/>
          <Cards todos={this.state} onRemoveToDoIndex={this.handleRemoveToDo} />
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
