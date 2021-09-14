import { createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { ADD_TODO, DELETE_TODO } from "./actions/todoActions";
import rootReducer from './reducers'

// midleware
/* const logger = (store) => {
  return (next) => {
    return (action) => {

    }
  }
} */

/* const logger = (store) => (next) => (action) =>{
  console.log('ha ocurrido una accion', action)
  next(action);
} */

// midleware
const confirmDeleteTodo = (store) => (next) => (action) =>{
  /* setTimeout(() => {
    next(action)
  }, 1000);

  if(action.type !== ADD_TODO){
    setTimeout(() => {
      store.dispatch({
        type: ADD_TODO,
        payload:{
          text: 'todo creado en midleware',
          checked: false,
          id:' abcd'
        }
      })
    }, 4000);
  } */

  if(action.type === DELETE_TODO){
    let conf = window.confirm('seguro que quieres eliminar el todo?')
    if(conf){
      next(action);
    }
  }else{
    next(action);
  }

}

// Reducer
/* es una funcion pura que nos regresa el estado actual */

/* funcion pura que siempre regresa el mismo resultado 
    que con los parametros de entrada, no se puede retornar valores random, no 
    puede tener efectos secundarios
*/



/* store.subscribe(() => {
  console.log(store.getState());
}); */

//acciones
// store.dispatch({
//     type: INCREMENT
// })

/* store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment()); */

/*setTimeout(() => {
   store.dispatch({
    type: DECREMENT,
  });
}, 2000); */

//store.getState()
//store.dispatch()
//store.subscribe(func)

// Store
// Almacenamiento de nuestro estado
const store = createStore(rootReducer, applyMiddleware(confirmDeleteTodo, logger, thunk));

export default store
