import styled, { StyledProps } from 'styled-components';
import colors from '@/json.constants/colors.json';
import indents from '@/json.constants/indents.json';
import borders from '@/json.constants/borders.json';
import textSizes from '@/json.constants/textSizes.json';
import textWeight from '@/json.constants/textWeight.json';
import { IButton } from '@root/types';

export const StyledFilterContainer = styled.div<({isMobile: boolean})>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${indents.md};
`;

export const StyledTitle = styled.div`
  width: 100%;
  text-align: start;
`;

export const StyledCheckbox = styled.div`
  width: 100%;
`;

export const StyledInputContainer = styled.div<({isDouble: boolean})>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: ${indents.md};
`;

export const StyledInput = styled.input<({isWide?: boolean})>`
  background: ${({isWide}) => isWide ? colors.white : colors.bgDefault};
  padding-left: ${indents.sm};
  font-size: ${textSizes.regular};
  height: 42px;
  border: ${({isWide}) => isWide ? `1px solid ${colors.darkBlue}` : "none"};
  border-radius: ${({isWide}) => isWide ? borders.md : "none"};
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const StyledAdditionalElementsBlock = styled.div`
  height: 200px;
  width: 200px;
  background: #fff;
  border: 1px solid #C1C1C1;
  overflow-x: scroll;
  overflow-y: scroll;
`;