import { ADD_MEMBER, UPDATE_MEMBER, GET_SINGLE_MEMBER, LOGOUT, GET_MEMBER } from "./actionType";

export const addMember = (member) => {
    return {
        type: ADD_MEMBER,
        payload: member
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

export const getMember = (members) => {
    return {
        type: GET_MEMBER,
        payload: members
    }
}