import React from "react";

export function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <tr>
      <td className="table-todo">
        <label className="checkbox" onClick={() => completeTodo(index)}>
          <input type="checkbox" />
          <div className="todo">{todo.title}</div>
        </label>
        <span className="delete" onClick={() => deleteTodo(index)} />
      </td>
    </tr>
  );
}
