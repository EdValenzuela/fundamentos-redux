import React from 'react'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import Info from './Components/Info'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Info />
      </div>
    </Provider>
  )
}

export default App
