import React from "react";
import {useLocation} from "react-router-dom";
import {ISUBDIRECTIONS_LIST} from "@root/types";
import {getAllCoursesSelector} from "@/store/courses/selectors";
import {useSelector} from "react-redux";
import {StyledFiltersBlock, StyledMainContent, StyledResultsContainer, StyledShortInfoContainer} from "@/Pages/results/Results.styled";
import {FREE, DEFAULT_LEVELS, DEFAULT_CERTIFICATE_LIST, DEFAULT_CITY_LIST} from "@root/constants";
import {PRICE_TITLE, DURATION_TITLE, LEVEL_TITLE, ADDRESS_TITLE, SCHOOL_TITLE, CERTIFICATE_TITLE} from "@root/constants";
import {
    StyledCourseFolder,
    StyledCourseFolderNameplate,
    StyledCourseFolderWrapper,
    StyledFolderShadow
} from "@/Components/CourseFolder/CourseFolder.styled";
import Filter from "@/Components/Filter/Filter";
import {StyledInput} from "@/Components/Filter/Filter.styled";
import ShortInfoFolder from "@/Components/ShortInfoFolder/ShortInfoFolder";

const Results = () => {
    const location = useLocation();
    const title: string = location.state.title;
    const courses = useSelector(getAllCoursesSelector);
    const currenSubdirection = courses.filter(el => el.subdirection === title)
    console.log(title);
    console.log(courses);
    console.log(currenSubdirection);
    return (
        <StyledResultsContainer isMobile={false}>
            <StyledFiltersBlock isMobile={false}>
                <StyledCourseFolderWrapper isMain={false}>
                    <StyledFolderShadow isMain={false} />
                    <StyledCourseFolderNameplate />
                    <StyledCourseFolder isMain={false}>
                        {'el'}
                    </StyledCourseFolder>
                </StyledCourseFolderWrapper>
                <div style={ { display: "flex", flexDirection: "column", gap: "32px" } }>
                    <Filter title={PRICE_TITLE} isDoubleInputField isCheckbox isInput isOptionsBlock={false} customTitles={FREE} />
                    <Filter title={DURATION_TITLE} isDoubleInputField isCheckbox={false} isInput isOptionsBlock={false}  />
                    <Filter title={ADDRESS_TITLE} isDoubleInputField={false} isCheckbox isInput={false} isOptionsBlock={false} customTitles={DEFAULT_CITY_LIST} />
                    <Filter title={LEVEL_TITLE} isDoubleInputField={false} isCheckbox isInput={false} isOptionsBlock={false} customTitles={DEFAULT_LEVELS} />
                    <Filter title={CERTIFICATE_TITLE} isDoubleInputField={false} isCheckbox isInput={false} isOptionsBlock={false} customTitles={DEFAULT_CERTIFICATE_LIST} />
                    <Filter title={SCHOOL_TITLE} isDoubleInputField={false} isCheckbox={false} isInput isOptionsBlock  />
                </div>
            </StyledFiltersBlock>
            <StyledMainContent>

                <StyledInput isWide />
                <StyledShortInfoContainer>
                    {
                        currenSubdirection.map(course => {
                            return (
                                <ShortInfoFolder title={course.title} />
                            )
                        })
                    }
                </StyledShortInfoContainer>
            </StyledMainContent>
        </StyledResultsContainer>
    )
}

export default Results;