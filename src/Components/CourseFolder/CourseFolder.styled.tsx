import styled from 'styled-components';
import colors from '@/json.constants/colors.json';
import borders from '@/json.constants/borders.json';
import indents from '@/json.constants/indents.json';
export const StyledCourseFolderWrapper = styled.div<({ isMain?: boolean })>`
    width: ${({ isMain }) => isMain ? '100%' : '282px'};
    min-height: ${({ isMain }) => isMain ? '100%' : '167px'};
    position: relative;
    cursor: pointer;
`;
export const StyledCourseFolder = styled.div<({ isMain: boolean })>`
    position: absolute;
    top: 16px;
    left: 0;
    width: ${({ isMain }) => isMain ? '96%' : '270px'};
    min-height: ${({ isMain }) => isMain ? '90vh' : '142px'};
    margin:  ${({ isMain }) => isMain ? indents.md : '0px'};
    border-radius: ${borders.sm};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.white};
`;
export const StyledFolderShadow = styled.div<({ isMain: boolean })>`
    position: absolute;
    top: ${({ isMain }) => isMain ? indents.lg : '34px'};
    left: ${({ isMain }) => isMain ? indents.lg : indents.md };
    width: ${({ isMain }) => isMain ? '95%' : '265px'};
    min-height: ${({ isMain }) => isMain ? '90vh' : '134px'};
    border-radius: ${borders.sm};
    background: ${colors.darkBlue};
`;
export const StyledCourseFolderNameplate = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 126px;
    height: 28px;
    border-radius: ${borders.xs};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.white};
`;
export const StyledLabel = styled.div<(({isMobile: boolean}))>`
    display: flex;
    gap: ${({isMobile}) => isMobile ? indents.md : indents.xlg};
    align-items: center;
    justify-content: center;
    height: ${({isMobile}) => isMobile ? "72px" : "120px"};
    border-bottom: 2px solid ${colors.darkBlue};
    border-top: ${({isMobile}) => isMobile ? `2px solid ${colors.darkBlue}` : "none"};
    border-top-left-radius: ${({isMobile}) => isMobile ? "none" : borders.sm };
    border-top-right-radius: ${({isMobile}) => isMobile ? "none" : borders.sm };
    background: ${colors.white};
`
export const StyledContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: ${indents.md};
`
