import React from 'react';

export default function ToDoItem(props) {
    const { id, item, completed, setCompleted } = props;
    return (
        <div onClick={setCompleted}>
            <h2>{item}</h2>
        </div>
    )
}