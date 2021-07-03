import React from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AnimalCard from './components/AnimalCard';

const App = () => {
  return (
    <div>
      <div className="todo-list">
        <Header />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
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
};

export default App;