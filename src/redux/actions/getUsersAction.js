import * as types from '../types'
// import axiosInstance from '../axios'
import axios from 'axios'

const getUsersSuccess = (data) => {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: data
    }
}

const getUsersFail = (error) => {
    return {
        type: types.GET_USERS_FAIL,
        payload: error
    }
}

const getUsersRequest = () => {
    return { type: types.GET_USERS_REQUEST }
}

export const getUsersAction = (data) => async dispatch => {
    try {
        dispatch(getUsersRequest())
        const users = await axios.get(
            `https://magaze-backend.herokuapp.com/api/v1/users`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        dispatch(getUsersSuccess(users.data))
        console.log(users)
    } catch (error) {
        console.log(error.response)
        dispatch(getUsersFail(error.response))
    }
}
