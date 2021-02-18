export default (state, action) => {
    switch(action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                toast: { action: 'add', message: 'Todo Added', isShown: true }
            };
        case 'CHECK_TODO':
            return {
                ...state
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload),
                toast: { action: 'delete', message: 'Todo Deleted', isShown: true }
            };
        case 'TODOS_ERROR':
            return {
                ...state,
                toast: { action: 'error', message: action.payload, isShown: true }
            };
        case 'CLEAR_TOAST':
            return {
                ...state,
                toast: { ...state.toast, isShown: action.payload }
            };
        default:
            return state;
    }
}
