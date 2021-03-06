import React from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../../redux/actions/todoActions'
import { getId } from '../../utils'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todos = ({todo, addTodo, updateTodo, deleteTodo}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const text = e.target[0].value;
        if(!text) return
        addTodo({
            text,
            checked: false,
            id: getId()
        })

        e.target[0].value = '';
    }

    return (
        <div>
            <h1>Todos</h1>
            <TodoForm handleSubmit={handleSubmit} />
            <TodoList todos={todo.todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return{
        todo : state.todo
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTodo: (todo) => dispatch(addTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
