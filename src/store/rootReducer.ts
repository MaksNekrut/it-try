import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import coursesReducer from "./courses/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer
})

export type AuthState = ReturnType<typeof rootReducer>;
export type CoursesState = ReturnType<typeof rootReducer>;

export default rootReducer;