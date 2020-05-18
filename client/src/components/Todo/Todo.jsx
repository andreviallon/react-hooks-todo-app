import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoState';

export function Todo({ todo }) {
  const { deleteTodo, checkTodo } = useContext(TodoContext);

  return (
    <tr>
      <td className="table-todo">
        <label className="checkbox">
          <input type="checkbox" defaultChecked={todo.checked} onClick={() => checkTodo(todo)} />
          <div className="todo">{todo.text}</div>
        </label>
        <span className="delete" onClick={() => deleteTodo(todo._id)}/>
      </td>
    </tr>
  );
}
