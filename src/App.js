import React from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import ContactCard from './components/ContactCard';

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
        <ContactCard 
          contact = {{name: "Bob", type: "dog", age: "3"}}
        />
        <ContactCard
          contact = {{name: "Tam", type: "cat", age: "8"}}
        />
      </div>
    </div>
  )
};

export default App;