import React, { useState } from "react";
import "./Todos.css";
import { AddTodo } from "../AddTodo/AddTodo";
import { Todo } from "../Todo/Todo";

export function Todos() {
  const [todos, setTodos] = useState([
    { title: "Learn about React Hooks", isCompleted: true },
    { title: "Code an app", isCompleted: false },
    { title: "Code some more", isCompleted: false }
  ]);

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div>
      <AddTodo
        onSubmit={todo =>
          setTodos([...todos, { title: todo, isCompleted: false }])
        }
      />
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
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
