import React from 'react'

const Todo = ({item, updateTodo, deleteTodo}) => (
    <li>
        <input 
            type="checkbox" 
            //defaultChecked={item.checked}
            checked={item.checked} 
            onChange={ () => {
                updateTodo(item)
            }}
        />
        <button onClick={ ()=> {
            deleteTodo(item)
        } }>
            x
        </button>
        {item.text}
    </li>
)

export default Todo
