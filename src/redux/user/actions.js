import { ADD_NAME, LOGOUT } from "./actionType";

export const addName = ({name, email, password}) => {
    return {
        type: ADD_NAME,
        payload: {
            name,
            email,
            password
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}