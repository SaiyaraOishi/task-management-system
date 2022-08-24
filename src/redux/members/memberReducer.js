import { ADD_MEMBER, UPDATE_MEMBER } from "./actionType";
import { v4 as uuid } from "uuid";

const initialState = [];

const memberReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_MEMBER:
            return [
                ...state,
                {
                    id: uuid(),
                    name: action.payload.name,
                }
            ]

        case UPDATE_MEMBER:
            return state.map((member) => {
                if(member.id!==action.payload.id){
                    return member;
                }
                return{
                    ...member,
                    name: action.payload.name
                }
            });

        default:
            return state;
    }
}

export default memberReducer;