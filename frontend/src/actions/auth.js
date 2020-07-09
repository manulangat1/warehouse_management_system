import axios from 'axios'
import { USER_LOADING, USER_LOADED } from './types'

export const tokenConfig = getState => {
    const token = getState().auth.token
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    if (token){
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}

export const loadUser =() => (dispatch,getState) => {
    dispatch({type:USER_LOADING})
    axios.get('/auth/user/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}

export const  loginUser = (username,password) => (dispatch,getState)   => {
    // dispatch({type:USER_LOADING})
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({username,password})
    axios.post('auth/login',body,config)
            .then( res => {
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}