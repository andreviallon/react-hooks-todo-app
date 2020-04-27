import React, { useState } from "react";
import "./Todos.css";
import { AddTodo } from "../AddTodo/Add-Todo";
import { Todo } from "../Todo/Todo";

export function Todos() {
  const [todos, setTodos] = useState([
    { text: "Learn about React Hooks" },
    { text: "Code an app" },
    { text: "Code some more" }
  ]);

  return (
    <div>
      <AddTodo />
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
