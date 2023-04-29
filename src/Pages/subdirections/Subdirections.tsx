import React from "react";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import {getAllCoursesSelector} from "@/store/courses/selectors";
import {StyledSubDirectionContainer, StyledSubDirectionsFolders} from "@/Pages/subdirections/Subdirections.styled";
import {isMobile} from "react-device-detect";
import ArrowButton from "@/Components/ArrowButton/ArrowButton";
import {
    StyledCourseFolder,
    StyledCourseFolderNameplate,
    StyledCourseFolderWrapper,
    StyledFolderShadow,
} from "@/Components/CourseFolder/CourseFolder.styled";
import {SUBDIRECTIONS_LIST} from "@root/constants";
import {ISUBDIRECTIONS_LIST} from "@root/types";

export interface ISubdirectionsProps{}
const Subdirections: React.FC<ISubdirectionsProps> = () => {
    const location = useLocation();
    const directions: keyof ISUBDIRECTIONS_LIST = location.state.directions;
    const directionsList = useSelector(getAllCoursesSelector);
    // const currentDirections = directionsList.filter(el => el.direction === directions)
    const currentDirections = SUBDIRECTIONS_LIST[directions]
    const navigate = useNavigate();
    console.log(location);
    console.log(directions);
    console.log(directionsList);
    console.log(currentDirections);
    if (isMobile) {
        return (
            <StyledSubDirectionContainer isMobile>
                <ArrowButton
                    onClick={ () => navigate(-1)}
                    isRoundButton
                />
                <StyledSubDirectionsFolders>
                    {
                        currentDirections.map((el:string, i: number) => {
                            return (
                                <StyledCourseFolderWrapper
                                    onClick={() => navigate('/results', {state: {title: el}})}
                                    key={i}
                                    isMain={false}
                                >
                                    <StyledFolderShadow isMain={false}/>
                                    <StyledCourseFolderNameplate/>
                                    <StyledCourseFolder isMain={false}>
                                        {el}
                                    </StyledCourseFolder>
                                </StyledCourseFolderWrapper>
                            )
                        })
                    }
                </StyledSubDirectionsFolders>
            </StyledSubDirectionContainer>
        )
    }
    return (<>
        <StyledSubDirectionContainer isMobile={isMobile}>
            <ArrowButton
                onClick={ () => navigate(-1)}
                isRoundButton
            />
                <StyledSubDirectionContainer isMobile={isMobile}>
                    {
                        currentDirections.map((el:string, i: number) => {
                            return (
                                    <StyledCourseFolderWrapper
                                        onClick={() => navigate('/results', {state: {title: el}})}
                                        key={i}
                                        isMain={false}
                                    >
                                        <StyledFolderShadow isMain={false} />
                                        <StyledCourseFolderNameplate />
                                        <StyledCourseFolder isMain={false}>
                                            {el}
                                        </StyledCourseFolder>
                                    </StyledCourseFolderWrapper>
                            )
                        })
                    }
            </StyledSubDirectionContainer>
        </StyledSubDirectionContainer>
    </>)
}

export default Subdirections;