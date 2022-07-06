import React, { useState } from 'react';

import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './Models/Todo';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== todoId);
    })
  }

  return (
    <div className="container">
      <div className="row mb-5 mt-2">
        <NewTodo 
          onAddTodo={todoAddHandler} 
        />
      </div>
      <div className="row">
        <TodoList
          items={todos}
          onDeleteTodo={todoDeleteHandler} 
        />
      </div>
    </div>
  );
}

export default App;
