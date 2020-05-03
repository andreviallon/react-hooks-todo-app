import React from "react";

export function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <tr>
      <td className="table-todo">
        <label className="checkbox">
          <input type="checkbox" defaultChecked={todo.isCompleted} onClick={() => completeTodo(index)}/>
          <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.title}</div>
        </label>
        <span className="delete" onClick={() => deleteTodo(index)} />
      </td>
    </tr>
  );
}
