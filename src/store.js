import { createStore } from "redux";

// Nombres de constantes de acciones
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Reducer
/* es una funcion pura que nos regresa el estado actual */

/* funcion pura que siempre regresa el mismo resultado 
    que con los parametros de entrada, no se puede retornar valores random, no 
    puede tener efectos secundarios
*/

const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

/* store.subscribe(() => {
  console.log(store.getState());
}); */

//creadores de acciones
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

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
const store = createStore(counter);

export default store
