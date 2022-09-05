import { ADD_TASK, GET_SINGLE_TASK, GET_TASK, LOGOUT, UPDATE_MEMBER_NAME, UPDATE_TASK } from "./actionType";
// import { collection, getDocs } from 'firebase/firestore/lite';
// import firebaseDb from "../../util/firebase";

// const COLLECTION_NAME = "tasks";

export const addTask = ({ title, detail, member }) => {
    return {
        type: ADD_TASK,
        payload: {
            title: title,
            detail: detail,
            member: member
        }
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
    //async await fetch from firebase code here
    // const getTodos = async () => {
    //     const tests = collection(firebaseDb, COLLECTION_NAME);
    //     const snapshot = await getDocs(tests);
    //     const testsData = snapshot.docs.map(doc => doc.data());
    //     console.log(testsData);
    //     return testsData
    // }
    // getTodos().then(result => console.log(result))
    // console.log(data);
    return {
        type: GET_TASK,
        //data pass through payload
        payload: tasks
    }
}

