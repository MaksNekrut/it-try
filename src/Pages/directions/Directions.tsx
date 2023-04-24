import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ICoursesData } from "@root/types";
import {GET_ALL_COURSES} from "@/store/courses/actionTypes";
import CourseFolder from "@/Components/CourseFolder/CourseFolder";

export interface IDirectionsProps {}

const Directions: React.FC<IDirectionsProps> = (props) => {
    const [data, setData] = useState<ICoursesData | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get<ICoursesData>("http://localhost:4000/v1/courses")
            .then(response => {
                setData(response.data);
                dispatch({type: GET_ALL_COURSES, payload: response.data});
            })
            .catch(error => {
                setError(error)
            })
    }, [dispatch])
        if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <CourseFolder
                isNameplateNeeded={ false }
                isShadowNeeded={true}
                isWithLabel={true}
                isMain={true}
            />
        )
    }
}
export default Directions;