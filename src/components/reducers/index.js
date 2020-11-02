import { ADD_TODO, UPDATE_INPUT } from '../actions'



const reducer = (state, action) => {
    switch(action.type) {        
        case UPDATE_INPUT:
            return { ...state, current_input: action.payload };
        case ADD_TODO:
            return { ...state, list: [...state.list, action.payload] };
        default:
            return state;
    }
}

export default reducer;