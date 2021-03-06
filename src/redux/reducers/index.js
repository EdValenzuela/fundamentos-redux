import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import fruits from './fruitReducer'
import todo from './todoReducer'
import blog from './postsReducer'

export default combineReducers({
    counter, 
    user,
    fruits,
    todo,
    blog
})