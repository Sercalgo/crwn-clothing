import {
    combineReducers
} from 'redux';

import userReducer from './user/user.reducer';

// Here we are going to combine all the states
export default combineReducers({
    user: userReducer
});