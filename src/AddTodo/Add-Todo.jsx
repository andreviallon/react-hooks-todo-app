import React, { useState } from "react";
import "./Add-Todo.css";

const InputValue = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

export function AddTodo(submit) {
  const todo = InputValue('');

  return (
    <form
      className="flex-container"
      onSubmit={e => {
        e.preventDefault();
        submit.onSubmit(todo.value);
      }}>
      <input className="input" type="text" placeholder="Todo" {...todo}/>
      <button className="button is-primary">Add Todo</button>
    </form>
  );
}
