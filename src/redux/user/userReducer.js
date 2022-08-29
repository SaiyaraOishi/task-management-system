import {ADD_NAME, LOGOUT} from "./actionType";

const initialState = {
    name: "",
}

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_NAME:
            return {
                ...state,
                name: action.payload,
            }

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}

export default userReducer;