import React, { createContext, useReducer } from 'react';
import TodoReducer from './TodoReducer';
import axios from 'axios';

const initialState = {
    todos: [],
    error: null,
    loading: false
}

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    async function getTodos() {
        try {
            const res = await axios.get('/api/v1/todos');
            dispatch({
                type: 'GET_TODOS',
                payload: res.data.data
            })
        } catch(err) {
            dispatch({
                type: 'TODOS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTodo(id) {
        try {
            await axios.delete(`/api/v1/todos/${id}`);
            dispatch({
                type: "DELETE_TODO",
                payload: id
            });
        }
        catch(err) {
            dispatch({
                type: 'TODOS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addTodo(todo) {
        const newTodo = { text: todo, checkTodo: false};
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        try {
            const res = await axios.post('api/v1/todos', newTodo, config)
            dispatch({
                type: "ADD_TODO",
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TODOS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function checkTodo(todo) {
        try {
            const updatedTodo = { ...todo, checked: !todo.checked }
            await axios.patch(`/api/v1/todos/${todo._id}`);
            dispatch({
                type: "CHECK_TODO",
                payload: updatedTodo
            });
        }
        catch (err) {
            dispatch({
                type: 'TODOS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                error: state.error,
                loading: state.loading,
                getTodos,
                addTodo,
                deleteTodo,
                checkTodo
            }}>
            {children}
        </TodoContext.Provider>
    );
}
