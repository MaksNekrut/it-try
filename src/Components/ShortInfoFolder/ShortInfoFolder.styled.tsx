import styled from 'styled-components';
import colors from '@/json.constants/colors.json';
import borders from '@/json.constants/borders.json';

export const StyledShortInfoWrapper = styled.div`
    width: 362px;
    height: 215px;
    position: relative;
`;
export const StyledShortInfoFolder = styled.div`
    position: absolute;
    top: 37px;
    left: 0px;
    width: 362px;
    height: 178px;
    border-radius: ${borders.xmd};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.white};
`;

export const StyledShortInfoFolderNameplate = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 362px;
    height: 73px;
    clip-path: polygon(0 0, 38% 0, 45% 15px, 100% 15px, 100% 100%, 0 100%, 0 0);
    border-radius: ${borders.md};
    border: 2px solid ${colors.darkBlue};
    background: ${colors.darkBlue};
    overflow: hidden;
`;
