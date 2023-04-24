import styled from 'styled-components';
import colors from '@/json.constants/colors.json';
import borders from '@/json.constants/borders.json';
import indents from '@/json.constants/indents.json'
export const StyledFolderWrapper = styled.div`
    width: 273px;
    height: 160px;
    position: relative;
`;
export const StyledContainer = styled.div<(({isMobile: boolean}))>`
  padding: ${indents.lg};
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? "column" : "row"};
  flex-wrap: wrap;
  gap: ${({isMobile}) => isMobile ? indents.lg : indents.big};
  justify-content: space-around;
`;
export const StyledDirectionFolder = styled.div`
    position: absolute;
    top: 17px;
    left: 0;
    width: 273px;
    height: 143px;
    border-radius: ${borders.xmd};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.yellow};
`;
export const StyledDirectionFolderNameplate = styled.div`
    position: absolute;
    top: 0px;
    left: 34px;
    width: 153px;
    height: 65px;
    border-radius: ${borders.sm};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.lightYellow};
`;
