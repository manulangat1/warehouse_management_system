import axios from 'axios'
import {tokenConfig} from './auth'
import {CUSTOMER_SUCCESS} from './types'
export const loadCustomers = () => (dispatch,getState) => {
    axios.get(`/api/customer/`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:CUSTOMER_SUCCESS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}