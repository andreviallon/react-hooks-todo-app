import React, { useState } from "react";
import "./Todos.css";
import { AddTodo } from "../AddTodo/Add-Todo";
import { Todo } from "../Todo/Todo";

export function Todos() {
  const [todos, setTodos] = useState([
    "Learn about React Hooks",
    "Code an app",
    "Code some more"
  ]);

  return (
    <div>
      <AddTodo onSubmit={todo => setTodos([todo, ...todos])}/>
      <div className="todo-list">
        <div className="table-container">
          <table className="table is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>
                  <div title="Todos">Todos</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td className="table-todo">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <Todo todo={todo} />
                    </label>
                    <a className="delete"></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
