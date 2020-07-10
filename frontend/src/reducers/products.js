import { PRODUCT_SUCCESS } from '../actions/types'

const initialState = {
    products:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case PRODUCT_SUCCESS:
            return {
                ...state,
                products:action.payload
            }
        default:
            return state
    }
}