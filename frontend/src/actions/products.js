import { tokenConfig } from './auth'
import { PRODUCT_SUCCESS,PRODUCT_ADD_SUCCESS } from './types'

import axios from 'axios'

export const loadProducts = () => (dispatch,getState) => {
    axios.get(`/api/products/`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:PRODUCT_SUCCESS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const addProduct = (newProduct) => (dispatch,getState) => {
    // newProduct = JSON.stringify({ name,price,quantity,warehouse})
    axios.post(`/api/product/`,newProduct,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:PRODUCT_ADD_SUCCESS,
                payload:res.data  
            })
        })
        .catch(err => console.log(err))
}