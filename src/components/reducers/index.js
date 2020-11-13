import { ADD_TODO, UPDATE_INPUT, SET_COMPLETED, CLEAR_COMPLETED } from '../actions'



const reducer = (state, action) => {
    switch(action.type) {        
        case UPDATE_INPUT:
            return { ...state, current_input: action.payload };
        case ADD_TODO:
            return { ...state, list: [...state.list, action.payload] };
        case SET_COMPLETED:
            return { ...state, list: action.payload };
        case CLEAR_COMPLETED:
            return { ...state, list: action.payload };
        default:
            return state;
    }
}

export default reducer;