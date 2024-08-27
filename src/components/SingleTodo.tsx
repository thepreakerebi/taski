import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';


type TodoProps = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: TodoProps) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);


  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, todo: editTodo} : todo
    )));
    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return (
    <form className="single-todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo-single-text"
        />
      ) : todo.isDone ? (
        <s className="todo-single-text">{todo.todo}</s>
      ) : (
        <span className="todo-single-text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon">
          <MdDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo
