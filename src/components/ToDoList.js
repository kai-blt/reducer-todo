import React, { useReducer } from 'react';
import reducer from './reducers'
import { handleInput, handleClick, setCompleted, clearCompleted } from './actions'
import ToDoItem from './ToDoItem'
import styled from 'styled-components'


const StyledForm = styled.form`
    background-color: #222;
    padding: 2%;
    color: #fff;

    input {
        border-radius: 5px;
        border: 1px solid #000;
        padding: 1%;
        margin: 0 2%;
    }

    button {
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 5px;
        border: 1px solid #000;
        padding: 1% 2%;
        margin: 0 0.5%;
    }

    .add-btn {
        background-color: green;
    }

    .clear-btn {
        background-color: red;
    }

`;


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
            <StyledForm>
                <label><h1>TO DO LIST (USING REDUCERS)</h1><br/>
                    <input 
                        type="text"
                        name="todo"
                        value={state.current_input}
                        onChange={(e) => dispatch(handleInput(e))}
                    />
                    <button className="add-btn" onClick={(e) => dispatch(handleClick(e, state.current_input))}>Add</button>
                    <button className="clear-btn" onClick={(e) => dispatch(clearCompleted(e, state.list))}>Clear Completed</button>
                </label>                
            </StyledForm>
            {state.list.length > 0 ?
                state.list.map(item => <ToDoItem key={item.id} item={item.item} id={item.id} completed={item.completed} setCompleted={(e) => dispatch(setCompleted(e, item.id, state.list))}/>)
            :
                <h2>*** Please add some To Do Items! ***</h2>
            }
        </div>
    )
}