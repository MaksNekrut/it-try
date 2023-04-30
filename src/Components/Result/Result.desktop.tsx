import React from "react";
import {
    StyledFiltersBlock,
    StyledMainContent,
    StyledResultsContainer,
    StyledShortInfoContainer
} from "@/Pages/results/Results.styled";
import {
    StyledCourseFolder,
    StyledCourseFolderNameplate,
    StyledCourseFolderWrapper,
    StyledFolderShadow
} from "@/Components/CourseFolder/CourseFolder.styled";
import Filter from "@/Components/Filter/Filter";
import {
    ADDRESS_TITLE, CERTIFICATE_TITLE, DEFAULT_CERTIFICATE_LIST,
    DEFAULT_CITY_LIST,
    DEFAULT_LEVELS,
    DURATION_TITLE,
    FREE,
    LEVEL_TITLE,
    PRICE_TITLE, SCHOOL_TITLE
} from "@root/constants";
import {StyledInput} from "@/Components/Filter/Filter.styled";
import ShortInfoFolder from "@/Components/ShortInfoFolder/ShortInfoFolder";
import {ICourse} from "@root/types";

interface IProps {
    currentSubdirection: ICourse[]
}
const ResultDesktop = ({currentSubdirection}: IProps) => {

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
                    <Filter
                        title={PRICE_TITLE}
                        isDoubleInputField
                        isCheckbox isInput
                        isOptionsBlock={false}
                        customTitles={FREE}
                    />
                    <Filter
                        title={DURATION_TITLE}
                        isDoubleInputField
                        isCheckbox={false}
                        isInput
                        isOptionsBlock={false}
                    />
                    <Filter
                        title={ADDRESS_TITLE}
                        isDoubleInputField={false}
                        isCheckbox isInput={false}
                        isOptionsBlock={false}
                        customTitles={DEFAULT_CITY_LIST}
                    />
                    <Filter
                        title={LEVEL_TITLE}
                        isDoubleInputField={false}
                        isCheckbox isInput={false}
                        isOptionsBlock={false}
                        customTitles={DEFAULT_LEVELS}
                    />
                    <Filter
                        title={CERTIFICATE_TITLE}
                        isDoubleInputField={false}
                        isCheckbox isInput={false}
                        isOptionsBlock={false}
                        customTitles={DEFAULT_CERTIFICATE_LIST}
                    />
                    <Filter
                        title={SCHOOL_TITLE}
                        isDoubleInputField={false}
                        isCheckbox={false}
                        isInput
                        isOptionsBlock
                    />
                </div>
            </StyledFiltersBlock>
            <StyledMainContent>
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
            </StyledMainContent>
        </StyledResultsContainer>
    )
}

export default ResultDesktop;