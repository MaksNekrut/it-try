import React from "react";
import {useLocation} from "react-router-dom";
import {getAllCoursesSelector} from "@/store/courses/selectors";
import {useSelector} from "react-redux";
import MainWidget from "@/widgets/Main/Main.widget";

const Results = () => {
    const location = useLocation();
    const title: string = location.state.title;
    const courses = useSelector(getAllCoursesSelector);
    const currentSubdirection = courses.filter(el => el.subdirection === title)

    return (
        <MainWidget currentSubdirection={currentSubdirection} />
    )
}

export default Results;