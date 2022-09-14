import { ADD_TASK, GET_SINGLE_TASK, GET_TASK, LOGOUT, UPDATE_MEMBER_NAME, UPDATE_TASK } from "./actionType";
// import { collection, getDocs } from 'firebase/firestore/lite';
// import firebaseDb from "../../util/firebase";

// const COLLECTION_NAME = "tasks";

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload:task
    }
}

export const updateTask = (id, { title, detail, member }) => {
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

export const updateMemberName = ({ oldName, newName }) => {
    return {
        type: UPDATE_MEMBER_NAME,
        payload: {
            oldName,
            newName,
        }
    }
}

export const getSingleTask = (id) => {
    return {
        type: GET_SINGLE_TASK,
        payload: id
    }
}

export const taskLogout = () => {
    return {
        type: LOGOUT
    }
}

export const getTask = (tasks) => {
    return {
        type: GET_TASK,
        payload: tasks
    }
}

