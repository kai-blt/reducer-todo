export const ADD_TODO = 'ADD_TODO';
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const handleInput = (e) => {
    return({ type: UPDATE_INPUT, payload: e.target.value });
}

export const handleClick = (e, curr_input) => {
    e.preventDefault();
    return({ type:  ADD_TODO, payload: curr_input });
}
