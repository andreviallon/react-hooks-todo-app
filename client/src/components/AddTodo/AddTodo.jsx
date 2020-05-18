import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoState';
import './AddTodo.css';

export const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { addTodo } = useContext(TodoContext);

  const onSubmit = event => {
    event.preventDefault()
    addTodo(todo);
    setTodo('');
  }

  return (
    <form className="flex-container" onSubmit={onSubmit}>
      <input className="input" type="text" placeholder="Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button className="button is-primary">Add Todo</button>
    </form>
  );
}
