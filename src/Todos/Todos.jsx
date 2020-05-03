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

  const deleteTodo = index => {
    //const newTodos = todos.splice(index, 1);
    console.log("index", index);
    //console.log("newTodos", newTodos);
    //setTodos(newTodos);
  };

  return (
    <div>
      <AddTodo onSubmit={todo => setTodos([todo, ...todos])} />
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
                    <span
                      className="delete"
                      onClick={index => deleteTodo(index)}
                    />
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
