import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import memberReducer from "./members/memberReducer";
import taskReducer from "./tasks/taskReducer";

const rootReducer = combineReducers({
    user: userReducer,
    members: memberReducer,
    tasks: taskReducer,
});

export default rootReducer;