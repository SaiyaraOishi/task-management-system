import { ADD_USER, LOGOUT } from "./actionType";

const initialState = {
   
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                ...action.payload.user,
                token: action.payload.token
            }

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}

export default userReducer;