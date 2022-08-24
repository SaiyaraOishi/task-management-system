import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import memberReducer from "./members/memberReducer";

const rootReducer = combineReducers({
    user: userReducer,
    members: memberReducer
});

export default rootReducer;