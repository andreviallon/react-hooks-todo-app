import React, { createContext, useReducer } from 'react';
import TodoReducer from './TodoReducer';

const initialState = {
    todos: [
        { _id: 1, text: "Learn about React Hooks", checked: true },
        { _id: 2, text: "Code an app", checked: false },
        { _id: 3, text: "Code some more", checked: false }
    ]
}

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    function deleteTodo(id) {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        });
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                deleteTodo
            }}>
            {children}
        </TodoContext.Provider>
    );
}
