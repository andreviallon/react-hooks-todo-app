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
        <div class="table-container">
          <table class="table is-fullwidth is-hoverable">
            <thead>
              <th>
                <div title="Todos">Todos</div>
              </th>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr>
                  <td className="table-todo">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <Todo key={index} index={index} todo={todo} />
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
