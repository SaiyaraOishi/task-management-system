import { ADD_USER, LOGOUT } from "./actionType";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}