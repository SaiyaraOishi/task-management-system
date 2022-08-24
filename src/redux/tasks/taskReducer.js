import { ADD_TASK, UPDATE_TASK } from "./actionType";
import { v4 as uuid } from "uuid";

const initialState = [];

const taskReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TASK:
            return [
                ...state,
                {
                    id: uuid(),
                    title: action.payload.title,
                    detail: action.payload.detail,
                    member: action.payload.member
                }
            ]

        case UPDATE_TASK:
            return state.map((task) => {
                if(task.id!==action.payload.id){
                    return task;
                }
                return {
                    ...task,
                    title: action.payload.title,
                    detail: action.payload.detail,
                    member: action.payload.member,
                }
            });

        default:
            return state;
    }
} 

export default taskReducer;