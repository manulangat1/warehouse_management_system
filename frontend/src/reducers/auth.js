import { USER_LOADING ,LOGIN_SUCCESS,USER_LOADED, LOGOUT_SUCCESS} from "../actions/types"


const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:null
}

export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                token:null,
                isAuthenticated:false,
                isLoading:false,
                user:null
            }
        default:
            return state
    }
}