import React from 'react'
import { Provider } from 'react-redux'
// import Fruits from './Components/Fruits'
import Counter from './Components/Counter'
//import Info from './Components/Info'
/* import Todos from './Components/Todos/Todos' */
// import Controller from './Components/Controller'
//import Blog from './Components/Blog'

import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info />*/}
        <Counter />
        {/* <Fruits /> */}
        {/* <Todos /> */}
        {/* <Controller /> */}
        {/* <Blog /> */}
      </div>
    </Provider>
  )
}

export default App
