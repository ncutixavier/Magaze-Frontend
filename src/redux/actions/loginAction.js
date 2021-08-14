import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../types';
import axios from 'axios';

export const loginAction = (data, history) => async dispatch => {
    dispatch(loginRequest())
    try {
        const res = await axios.post('https://magaze-backend.herokuapp.com/api/v1/users/login', data)
        // console.log("RES::", res)
        if (res.data) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data)
            history.push('/home')
        }
        dispatch(loginSuccess(res.data));
    } catch (error) {
        // console.log(error.response)
        if (error.response) {
            const errorMessage = await error.response.data.message;
            dispatch(loginError(errorMessage))
        }
        else {
            console.log(error)
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
