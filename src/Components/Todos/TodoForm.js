import React from 'react'

const TodoForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <input type="text"/>
        <button type="submit">
            Agregar
        </button>
    </form>
)

export default TodoForm
