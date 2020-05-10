import React, { useState, useContext } from "react";
import "./Todos.css";
import { AddTodo } from "../AddTodo/AddTodo";
import { Todo } from "../Todo/Todo";
import { TodoContext } from "../../context/TodoState";

export function Todos() {
  const { todos } = useContext(TodoContext);

  // const deleteTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = !newTodos[index].isCompleted;
  //   setTodos(newTodos);
  // };

  return (
    <div>
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
