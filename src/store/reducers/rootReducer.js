import { combineReducers } from 'redux';
import { userReducer } from './user-reducer/userReducer';

const rootReducer = combineReducers({
    userReducer: userReducer
})

export default rootReducer;