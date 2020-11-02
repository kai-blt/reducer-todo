import React, { useState, useReducer } from 'react';
import reducer from './reducers'
import { ADD_TODO, UPDATE_INPUT, handleInput, handleClick } from './actions'


export default function ToDoList(props) {
    //initial state
    const initialState = {
        current_input: '',
        list: []
    }

    //useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <form>
                <label>To Do:
                    <input 
                        type="text"
                        name="todo"
                        value={state.current_input}
                        onChange={(e) => dispatch(handleInput(e))}
                    />
                    <button onClick={(e) => dispatch(handleClick(e, state.current_input))}>Add</button>
                    <button>Clear Completed</button>
                </label>                
            </form>
            {state.list.length > 0 ?
                'Theres a list'
            :
                'no list'
            }
        </div>
    )
}