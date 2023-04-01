import styled from "styled-components";
import colors from "@/json.constants/colors.json";
import borders from "@/json.constants/borders.json";

export const StyledCourseFolderWrapper = styled.div`
    width: 282px;
    height: 167px;
    position: relative;
`
export const StyledCourseFolder = styled.div`
    position: absolute;
    top: 16px;
    left: 0px;
    width: 270px;
    height: 142px;
    border-radius: ${borders.sm};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.white};
`

export const StyledCourseFolderNameplate = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 126px;
    height: 28px;
    border-radius: ${borders.xs};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.white};
`

export const StyledFolderShadow = styled.div`
    position: absolute;
    top: 34px;
    left: 16px;
    width: 265px;
    height: 134px;
    border-radius: ${borders.sm};
    background: ${colors.darkBlue};
`


