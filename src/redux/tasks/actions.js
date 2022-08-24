import { ADD_TASK, UPDATE_TASK } from "./actionType";

export const addTask = ({title,detail,member}) =>{
    return {
        type: ADD_TASK,
        payload: {
            title: title,
            detail: detail,
            member: member
        }
    }
}

export const updateTask = (id, {title,detail,member}) => {
    return {
        type: UPDATE_TASK,
        payload: {
            id: id,
            title: title,
            detail: detail,
            member: member,
        }
    }
}