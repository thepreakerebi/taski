import React, { useRef } from 'react';
import './styles.css';

type InputFieldProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({todo, setTodo, handleAdd}: InputFieldProps) => {

    const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur()
    }} className="input">
      <input
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input-box"
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default InputField
