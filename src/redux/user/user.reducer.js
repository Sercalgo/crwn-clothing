const INITIAL_STATE = {
    currentUser: null
}

// Here an action is going to update our state. We pass a default parameter value in this case is Initial_state
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;