import React, { useContext, useEffect } from "react";
import "./Todos.css";
import { AddTodo } from "../AddTodo/AddTodo";
import { Todo } from "../Todo/Todo";
import { Toast } from '../Toast/Toast'
import { TodoContext } from "../../context/TodoState";

export function Todos() {
  const { todos, getTodos } = useContext(TodoContext);
  
  useEffect(() => {
    getTodos();
  }, []);

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
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
