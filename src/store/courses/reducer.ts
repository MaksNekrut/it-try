import {GET_ALL_COURSES} from "@/store/courses/actionTypes";
import {ICoursesData} from "@root/types";
import {allCourses} from "./types";

const initialState: ICoursesData = {
    courses: []
}

const reducers = (state = initialState, action: allCourses) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            return {
                ...state,
                courses: action.payload.courses
            }

        default:
            return {
                ...state,
            }
    }
}
export default reducers;