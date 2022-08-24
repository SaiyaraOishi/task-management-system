import { ADD_MEMBER, UPDATE_MEMBER } from "./actionType";

export const addMember = ({name}) =>{
    return {
        type: ADD_MEMBER,
        payload: {
            name: name
        }
    }
}

export const updateMember = (id,{name}) => {
    return {
        type: UPDATE_MEMBER,
        payload: {
            id: id,
            name: name
        }
    }
}