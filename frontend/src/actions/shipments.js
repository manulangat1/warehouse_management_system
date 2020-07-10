import axios from 'axios'

import { SHIPMENT_SUCCESS } from './types'
import {tokenConfig} from './auth'

export const loadShipment = () => (dispatch,getState) => {
    axios.get('/api/shipment/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:SHIPMENT_SUCCESS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}