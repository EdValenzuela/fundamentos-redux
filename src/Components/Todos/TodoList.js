import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, updateTodo, deleteTodo}) => (
    <ul>
        {
            todos.map(item => (
                <Todo 
                    item={item} 
                    key={item.id} 
                    updateTodo={updateTodo} 
                    deleteTodo={deleteTodo} 
                />
            ))
        }
    </ul>
)
export default TodoList
