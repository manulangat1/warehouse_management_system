import { tokenConfig } from './auth'
import { PRODUCT_SUCCESS } from './types'

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