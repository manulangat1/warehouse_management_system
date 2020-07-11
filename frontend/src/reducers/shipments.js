import {  SHIPMENT_SUCCESS } from '../actions/types'

const initialState = {
    shipments:[]
}

export default  function(state=initialState,action){
    switch(action.type){
        case SHIPMENT_SUCCESS:
            return {
                ...state,
                shipments:action.payload
            }
        default:
            return state
    }
}