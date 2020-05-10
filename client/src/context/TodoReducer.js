export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload)
            };
        default:
            return state;
    }
}
