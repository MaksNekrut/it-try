import {GET_ALL_COURSES} from "@/store/courses/actionTypes";
import {ICoursesData} from "@root/types";

export type allCourses = {
    type: typeof GET_ALL_COURSES,
    payload: ICoursesData
}