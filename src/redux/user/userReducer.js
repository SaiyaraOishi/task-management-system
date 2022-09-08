import { ADD_NAME, LOGOUT } from "./actionType";

const initialState = {
    name: "",
    email: "",
    password: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}

export default userReducer;