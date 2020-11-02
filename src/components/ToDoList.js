import React, { useReducer } from 'react';
import reducer from './reducers'
import { handleInput, handleClick, setCompleted, clearCompleted } from './actions'
import ToDoItem from './ToDoItem'

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
                    <button onClick={(e) => dispatch(clearCompleted(e, state.list))}>Clear Completed</button>
                </label>                
            </form>
            {state.list.length > 0 ?
                state.list.map(item => <ToDoItem key={item.id} item={item.item} id={item.id} completed={item.completed} setCompleted={(e) => dispatch(setCompleted(e, item.id, state.list))}/>)
            :
                'Please add some To Do Items!'
            }
        </div>
    )
}