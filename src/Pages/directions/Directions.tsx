import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ICoursesData } from "@root/types";
import {GET_ALL_COURSES} from "@/store/courses/actionTypes";
import {isMobile} from "react-device-detect";
import {
    StyledCourseFolder,
    StyledCourseFolderWrapper,
    StyledFolderShadow,
    StyledLabel
} from "@/Components/CourseFolder/CourseFolder.styled";
import FoldersMobile from "@/assets/images/folder-mobile.svg";
import Text from "@/Components/Text/Text";
import {DIRECTIONS_PAGE_TITLE} from "@root/constants";
import DirectionFolder from "@/Components/DirectionFolder/DirectionFolder";
import Folders from "@/assets/images/folders.svg";

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
            if (isMobile) {
                return (<>
                    <StyledLabel isMobile>
                        <FoldersMobile/>
                        <Text text={DIRECTIONS_PAGE_TITLE} size={'large'} weight={'rg'}/>
                        <FoldersMobile/>
                    </StyledLabel>
                    <DirectionFolder coursesList={data.courses} />
                </>)
            }

            return (
                <StyledCourseFolderWrapper isMain={true}>
                    <StyledFolderShadow isMain={true}/>
                    <StyledCourseFolder isMain={true}>
                        { <StyledLabel isMobile={false}>
                            <Folders />
                            <Text text={DIRECTIONS_PAGE_TITLE} size={'big'} weight={'lg'} />
                            <Folders />
                        </StyledLabel>
                        }
                        <DirectionFolder coursesList={data.courses}/>
                    </StyledCourseFolder>
                </StyledCourseFolderWrapper>
            );
    }
}
export default Directions;