import  { combineReducers } from 'redux'
import auth from './auth'
import customers from './customers'
export default combineReducers({
    auth,
    customers
})