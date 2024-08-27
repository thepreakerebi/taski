import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodosList from './components/TodosList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[] >([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo('');
    }
  }


  return (
    <div className="App">
      <span className='heading'>Taski</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
