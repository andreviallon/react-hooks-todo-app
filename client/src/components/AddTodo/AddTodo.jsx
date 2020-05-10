import React, { useState } from "react";
import "./AddTodo.css";

const InputValue = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    clear: () => setValue("")
  };
};

export function AddTodo({ onSubmit }) {
  const todo = InputValue("");

  return (
    <form
      className="flex-container"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(todo.value);
        todo.clear();
      }}
    >
      <input className="input" type="text" placeholder="Todo" {...todo} />
      <button className="button is-primary">Add Todo</button>
    </form>
  );
}
