import styled from 'styled-components';
import colors from '@/json.constants/colors.json';
import borders from '@/json.constants/borders.json';
import indents from '@/json.constants/indents.json'
export const StyledSubDirectionContainer = styled.div<({isMobile: boolean})>`
    width: ${({isMobile}) => isMobile ? "100%" : "1400px"};
    margin: 0 auto;
    display: flex;
    flex-direction: ${({isMobile}) => isMobile ? "column" : "row"};
    gap: ${indents.md};
    align-items: center;
    min-height: 95vh;
    flex-wrap: wrap;
`;

export const StyledSubDirectionsFolders = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${indents.md};
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: ${indents.md};
`;