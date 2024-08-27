import React from 'react';
import './styles.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

type TodosProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList = ({ todos, setTodos }: TodosProps) => {
  return (
    <div className='todos'>
      {
        todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  )
}

export default TodosList
