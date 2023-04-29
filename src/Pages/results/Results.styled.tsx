import styled, { StyledProps, keyframes } from 'styled-components';
import colors from '@/json.constants/colors.json';
import indents from '@/json.constants/indents.json';
import borders from '@/json.constants/borders.json';
import textSizes from '@/json.constants/textSizes.json';
import textWeight from '@/json.constants/textWeight.json';
import { IButton } from '@root/types';

const filtersBlockAnimate = keyframes`
  from {
    transform: translateX(-150%);
  }
  to {
    transform: translateY(0);
  }
`;
export const StyledResultsContainer = styled.div<({isMobile: boolean, isVertical?: boolean})>`
  width: 1200px;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: ${({isVertical}) => isVertical ? "column" : "row"};;
  gap: ${indents.xlg};
`;

export const StyledFiltersBlock = styled.div<({isMobile: boolean})>`
  display: flex;
  flex-direction: column;
  transform: translateX(-150%);
  animation: ${filtersBlockAnimate} 1s forwards;
`;

export const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledShortInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${indents.lg};
  justify-content: space-between;
`;