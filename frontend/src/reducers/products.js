import { PRODUCT_SUCCESS,PRODUCT_ADD_SUCCESS } from '../actions/types'

const initialState = {
    products:[],
    product:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case PRODUCT_SUCCESS:
            return {
                ...state,
                products:action.payload
            }
        case PRODUCT_ADD_SUCCESS:
            return {
                ...state,
                product:[action.payload]
            }
        default:
            return state
    }
}