import React from "react";
import {
    StyledCourseFolder,
    StyledCourseFolderNameplate,
    StyledCourseFolderWrapper
} from "@/Components/CourseFolder/CourseFolder.styled";
import {StyledInput} from "@/Components/Filter/Filter.styled";
import ShortInfoFolder from "@/Components/ShortInfoFolder/ShortInfoFolder";
import {ICourse} from "@root/types";
import {StyledShortInfoContainer} from "@/Pages/results/Results.styled";

interface IProps {
    currentSubdirection: ICourse[]
}
const ResultMobile = ({currentSubdirection}: IProps) => {
    return (<>
        <StyledCourseFolderWrapper isMain={false}>
            <StyledCourseFolderNameplate />
            <StyledCourseFolder isMain={false}>
                {'el'}
            </StyledCourseFolder>
        </StyledCourseFolderWrapper>
        <StyledInput isWide />
        <StyledShortInfoContainer>
            {
                currentSubdirection.map((course, index) => {
                    return (
                        <ShortInfoFolder key={index} title={course.title} />
                    )
                })
            }
        </StyledShortInfoContainer>
    </>)
}

export default ResultMobile;