import * as types from '../types'

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.GET_USERS_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null
            }
        
        case types.GET_USERS_FAIL:
            return {
                data: null,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}
