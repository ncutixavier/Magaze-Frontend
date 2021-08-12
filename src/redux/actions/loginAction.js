import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../types';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const loginAction = (data, history) => async dispatch => {
    dispatch(loginRequest())
    try {
        const res = await axios.post('https://magaze-backend.herokuapp.com/api/v1/users/login', data)
        // console.log("RES::", res)
        if (res.data) {
            let loc = useLocation()
            console.log(loc)
            localStorage.setItem('token', res.data.token)
            history.push('/dashboard')
        }
        dispatch(loginSuccess(res.data));
    } catch (error) {
        // console.log(error.response)
        if (error.response) {
            const errorMessage = await error.response.data.message;
            dispatch(loginError(errorMessage))
        }
        else {
            dispatch(loginError("Please check your connection and try again!"))
        }
    }
}

export const loginRequest = () => {
    return { type: LOGIN_REQUEST }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}
