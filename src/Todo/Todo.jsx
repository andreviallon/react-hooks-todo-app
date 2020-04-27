import React from "react";

export function Todo({ todo }) {
  return <div className="todo">{todo.text}</div>;
}
