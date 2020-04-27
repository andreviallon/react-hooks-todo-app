import React from "react";
import "./Add-Todo.css";

export function AddTodo() {
  return (
    <div className="flex-container">
      <input className="input" type="text" placeholder="Text input" />
      <button class="button is-primary">Add Todo</button>
    </div>
  );
}
