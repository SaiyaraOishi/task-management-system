import { ADD_TASK,  GET_SINGLE_TASK, GET_TASK, LOGOUT, UPDATE_MEMBER_NAME, UPDATE_TASK } from "./actionType";
import { v4 as uuid } from "uuid";

const initialState = {
    tasklist: [],
    task: {},
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TASK:
            return {
                ...state,
                tasklist: action.payload
            }

        case ADD_TASK:
            const uniqueId = uuid();
            const title = action.payload.title;
            const detail = action.payload.description;
            const member = action.payload.Member;
            const array = [...state.tasklist];
            array.push({ id: uniqueId, title: title, detail: detail, member: member });
            return {
                ...state,
                tasklist: array,
            }

        case UPDATE_TASK:
            const newList = state.tasklist;
            const vtask = newList.find(task => task.id === action.payload.id);
            vtask.title = action.payload.title;
            vtask.detail = action.payload.detail;
            vtask.member = action.payload.member;
            return {
                ...state,
                tasklist: [...newList],
            }

        case UPDATE_MEMBER_NAME:
            const { oldName, newName } = action.payload;
            const newlist = state.tasklist.map((task) => {
                if (task.member !== oldName) {
                    return task
                }
                return {
                    ...task,
                    member: newName,
                }
            });
            return {
                ...state,
                tasklist: [...newlist]
            }

        case GET_SINGLE_TASK:
            const single_task = state.tasklist.find((task) => task.id === action.payload);
            return {
                ...state,
                task: single_task,
            }

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}

export default taskReducer;