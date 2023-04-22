import {GET_ALL_COURSES} from "@/store/courses/actionTypes";
import {ICoursesData} from "@root/types";
import {allCourses} from "@/store/courses/types";

export const courses = (payload: ICoursesData): allCourses => ({
    type: GET_ALL_COURSES,
    payload
})