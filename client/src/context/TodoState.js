import React, { createContext, useReducer } from 'react';
import TodoReducer from './TodoReducer';
import axios from 'axios';

const initialState = {
    todos: [],
    toast: { action: '', message: '', isShown: false }
}

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    async function getTodos() {
        try {
            clearToast();
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
            clearToast();
            await axios.delete(`/api/v1/todos/${id}`);
            dispatch({
                type: 'DELETE_TODO',
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
        if (todo.trim() === '') return;

        const newTodo = { text: todo, checked: false};
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        try {
            clearToast();
            const res = await axios.post('api/v1/todos', newTodo, config);
            dispatch({
                type: 'ADD_TODO',
                payload: res.data.data
            });
        } catch (err) {
            console.log('err =>', err);
            dispatch({
                type: 'TODOS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function checkTodo(todo) {
        const updatedTodo = { ...todo, checked: !todo.checked };
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            clearToast();
            const res = await axios.put(`api/v1/todos/${todo._id}`, updatedTodo, config);
            dispatch({
                type: 'CHECK_TODO',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TODOS_ERROR',
                payload: err.response.data.error
            })
        }
    }

    function clearToast() {
        dispatch({
            type: 'CLEAR_TOAST',
            payload: false
        });
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                toast: state.toast,
                getTodos,
                addTodo,
                checkTodo,
                deleteTodo,
                clearToast
            }}>
            {children}
        </TodoContext.Provider>
    );
}
