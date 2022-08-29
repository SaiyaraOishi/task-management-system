import { ADD_NAME, LOGOUT } from "./actionType";

export const addName = (name) => {
    return {
        type: ADD_NAME,
        payload: name,
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}