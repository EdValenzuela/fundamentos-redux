import React from 'react'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import Info from './Components/Info'

import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Info />
        <Counter />
      </div>
    </Provider>
  )
}

export default App
