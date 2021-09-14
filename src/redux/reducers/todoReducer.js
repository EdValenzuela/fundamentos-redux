import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/todoActions";

const initialState = {
    todos:[
        {
            text: 'Crear componente iso',
            id: '123',
            checked: false
        },
        {
            text: 'Crear componente qwerty',
            id: '1233',
            checked: true
        }
    ]
}

const todo = (state = initialState, action) =>{
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        case UPDATE_TODO:
            return{
                ...state,
                todos: state.todos.map( (item) => {
                        if(action.payload.id === item.id){
                            return{
                                ...item,
                                checked: !item.checked
                            }
                        }
                        return item
                    })
            }
        
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter( item => {
                    return item.id !== action.payload.id 
                })
            }
    
        default:
            return state;
    }
}

export default todo