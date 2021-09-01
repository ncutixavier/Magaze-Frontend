import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import { getUsersReducer } from './getUsersReducer';

const allReducers = combineReducers({
    login: loginReducer,
    getUsers: getUsersReducer
})

export default allReducers;