const initialState = 0;

// Nombres de constantes de acciones
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

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

export default counter