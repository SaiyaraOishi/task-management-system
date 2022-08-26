import { ADD_MEMBER, GET_SINGLE_MEMBER, UPDATE_MEMBER } from "./actionType";
import { v4 as uuid } from "uuid";

const initialState = {
    memberlist: [],
    member: {}
};

const memberReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_MEMBER:
            const uniqueId = uuid();
            const name = action.payload.name;
            const array = [...state.memberlist];
            array.push({ id: uniqueId, name: name });
            return {
                ...state,
                memberlist: array,
            }

        case UPDATE_MEMBER:
          const newlist = state.memberlist;
          const vmember = newlist.find((member) => member.id === action.payload.id);
          vmember.name = action.payload.name;
          return {
            ...state,
            memberlist: [...newlist]
          }

        case GET_SINGLE_MEMBER:
            const single_member = state.memberlist.find((member) => member.id === action.payload);
            return {
                ...state,
                member: single_member,
            }

        default:
            return state;
    }
}

export default memberReducer;