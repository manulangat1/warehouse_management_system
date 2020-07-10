import  { combineReducers } from 'redux'
import auth from './auth'
import customers from './customers'
import shipments from './shipments'
import products from './products'
export default combineReducers({
    auth,
    customers,
    shipments,
    products
})