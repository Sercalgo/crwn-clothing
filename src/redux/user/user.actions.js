import {
    UserActionTypes
} from './user.types'
// Actions are just functions that returns objects
// we have to align the action creators type with the reducer type expectations
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});