import { ADD_NAME } from "./actionType";

export const addName = (name) =>{
    return {
        type: ADD_NAME,
        payload: name,
    }
}