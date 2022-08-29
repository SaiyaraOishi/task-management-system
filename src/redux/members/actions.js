import { ADD_MEMBER, UPDATE_MEMBER, GET_SINGLE_MEMBER, LOGOUT } from "./actionType";

export const addMember = ({ name }) => {
    return {
        type: ADD_MEMBER,
        payload: {
            name: name
        }
    }
}

export const updateMember = (id, { name }) => {
    return {
        type: UPDATE_MEMBER,
        payload: {
            id: id,
            name: name
        }
    }
}

export const getSingleMember = (id) => {
    return {
        type: GET_SINGLE_MEMBER,
        payload: id
    }
}

export const memberLogout = () => {
    return {
        type: LOGOUT
    }
}