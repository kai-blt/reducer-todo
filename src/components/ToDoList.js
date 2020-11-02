import React, { useState, useReducer } from 'react';

const initialToDoItems = {
    list: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { ...state, list: [...state.list, action.payload] };
            console.log(state)
        default:
            return state;
    }
}


export default function ToDoList(props) {
    const [toDoInput, setToDoInput] = useState('')
    const [state, dispatch] = useReducer(reducer, initialToDoItems)

    const handleChange = (e) => {
        setToDoInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: toDoInput });
    }

    return (
        <div>
            <form>
                <label>To Do:
                    <input 
                        type="text"
                        name="todo"
                        value={toDoInput}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Add</button>
                    <button>Clear Completed</button>
                </label>
                
            </form>
        </div>
    )
}