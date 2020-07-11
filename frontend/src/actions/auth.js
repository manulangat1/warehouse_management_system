import axios from 'axios'
import { AUTH_ERROR,USER_LOADING, USER_LOADED , LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_SUCCESS} from './types'




export const  loginUser = (username,password) => (dispatch,getState)   => {
    // dispatch({type:USER_LOADING})
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({username,password})
    axios.post('auth/login/',body,config)
            .then( res => {
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}
// export const loadUser = () => (dispatch,getState) => {
//     dispatch({type:USER_LOADING})    
//     axios.get('/auth/user/',tokenConfig(getState))
//          .then(res => {
//              dispatch({
//                  type:USER_LOADED,
//                  payload:res.data
//              })
//          })
//          .catch(err => console.log(err))
// }

export const loadUser =() => (dispatch,getState) => {
    dispatch({type:USER_LOADING})
    // console.log(tokenConfig(getState))
    const token = getState().auth.token
    //headers 
    const config= {
        headers:{
            'Content-Type':'application/json'
        }
    }
    if (token){
        config.headers['Authorization'] = `Token ${token}`
    }
    console.log(config)
    axios.get('/auth/user/',config)
        .then(res => {
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        })
        .catch(err =>{
            dispatch({
                type:AUTH_ERROR
            })
        })
}

export const registerUser = (username,password,email) => (dispatch,getState) => {
    const config = {
        headers :{
            "Content-Type":'application/json'
        }
    }
    const body = JSON.stringify({username,password,email})
    axios.post(`/auth/register/`,body,config)
        .then(
            res =>{
                dispatch({
                    type:REGISTER_SUCCESS,
                    payload:res.data
                })
            }
        )
        .catch(err => console.log(err))
}
export const logout = () => (dispatch,getState) => {
    axios.post('/auth/logout/',null,tokenConfig(getState))
         .then(res => {

             dispatch({
                 type:LOGOUT_SUCCESS
             })
         })
         .catch(err =>console.log(err))
}

export const tokenConfig = getState => {
    // const token = getState().auth.token
    const token = localStorage.getItem('token')
    console.log(token)
    //headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    //if token + header config
    if(token){
        console.log(token)
        config.headers['Authorization'] = `Token ${token}`
    }
    console.log(config)
    return config
}