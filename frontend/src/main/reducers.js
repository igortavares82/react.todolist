import { combineReducers, conbineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer