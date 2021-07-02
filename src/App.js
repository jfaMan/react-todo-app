import React from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';

const App = () => {
  return (
    <div>
      <Header />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
};

export default App;