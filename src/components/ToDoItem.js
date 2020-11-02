import React from 'react';
import styled from 'styled-components';

const Strike = styled.del`
    color: red;
`;


export default function ToDoItem(props) {
    const { id, item, completed, setCompleted } = props;
    return (
        <div onClick={setCompleted}>
            {completed ? <Strike><h2>{item}</h2></Strike> : <h2>{item}</h2> }
        </div>
    )
}