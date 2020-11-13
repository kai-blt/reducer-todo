export const ADD_TODO = 'ADD_TODO';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const SET_COMPLETED = 'SET_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

/*default To Do Item 
 {  
    item: curr_input,
    completed: false,
    id: (Math.round(Math.random() * 1000))
 }
*/


export const handleInput = (e) => {
    return({ type: UPDATE_INPUT, payload: e.target.value });
}

export const handleClick = (e, curr_input) => {
    e.preventDefault();
    return({ type: ADD_TODO, payload: { item: curr_input, completed: false, id: (Math.round(Math.random() * 1000)) } });
}


export const setCompleted = (e, id, list) => {
    e.preventDefault();
    const updatedList = list.map(item => {
        if (item.id === id) {
         item.completed = !item.completed;
        }
        return item;
    })

    console.log(updatedList)
    return({ type: SET_COMPLETED, payload: updatedList });
}

export const clearCompleted = (e, list) => {
    e.preventDefault();
    const clearedList = list.filter(item => {
        if (!item.completed) {
            return item;
        } 
    });
    console.log(clearedList)
    return({ type: CLEAR_COMPLETED, payload: clearedList });
}