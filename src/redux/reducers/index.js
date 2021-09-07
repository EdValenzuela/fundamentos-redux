import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitReducer'

export default combineReducers({
    counter, 
    user,
    fruits
})