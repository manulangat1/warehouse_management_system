import {CUSTOMER_SUCCESS} from '../actions/types'

const initialState = {
    customers:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case CUSTOMER_SUCCESS:
            return{
                ...state,
                customers:action.payload
            }
        default:
            return state
    }
}