const reducer = (state,action) => {
    switch(action.type){
        default: return state;
        case 'NEW_TASK': return {
        ...state,
        tasksList: [...state.tasksList,action.payload]
        }
    }
}

export default reducer;
