import React from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AnimalCard from './components/AnimalCard';
import todosData from './components/todosData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
         todo.completed = !todo.completed 
        }
        return todo  
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        <div className="todo-list">
          <Header />
          {todoItems}
        </div>
        <div className='contacts'>
          <AnimalCard 
            contact = {{name: "Wolfy", type: "dog", age: "3"}}
          />
          <AnimalCard
            contact = {{name: "Tom", type: "cat", age: "8"}}
          />
          <AnimalCard
            contact = {{name: "Jerry", type: "mouse", age: "4"}}
          />
          <AnimalCard
            contact = {{name: "Daffy", type: "duck", age: "16"}}
          />
        </div>
      </div>
    )
  }

};

export default App;