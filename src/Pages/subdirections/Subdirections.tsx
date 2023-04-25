import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {getAllCoursesSelector} from "@/store/courses/selectors";
import DirectionFolder from "@/Components/DirectionFolder/DirectionFolder";
import CourseFolder from "@/Components/CourseFolder/CourseFolder";
import ShortInfoFolder from "@/Components/ShortInfoFolder/ShortInfoFolder";
export interface ISubdirectionsProps{}
const Subdirections: React.FC<ISubdirectionsProps> = (props) => {
    const location = useLocation();
    const directions = location.state.directions;
    const directionsList = useSelector(getAllCoursesSelector);
    const currentDirections = directionsList.filter(el => el.direction === directions)
    return (
        <div>
            {
                currentDirections.map(el => {
                    return (
                        <div>1</div>
                    )
                })
            }

        </div>
    )
}

export default Subdirections;