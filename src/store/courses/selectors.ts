import {CoursesState} from "@/store/rootReducer";
export const getAllCoursesSelector = (state:CoursesState) => state.courses.courses;
