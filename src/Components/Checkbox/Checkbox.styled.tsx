import styled from 'styled-components';
import colors from '@/json.constants/colors.json';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:not(:disabled):not(:checked)+span:hover::before {
      transform: scale(1.05);
      cursor: pointer
  }
  &:checked+span::before {
    width: 20px;
    height: 20px;
    background-color: ${colors.darkBlue};
    transform: rotate(-180deg);
    transition: 300ms all linear;
    transition-delay: 0ms;
    cursor: pointer
    }
  &:not(:checked)+span::before {
    width: 20px;
    height: 20px;
    cursor: pointer
    }
`;

export const StyledSpan = styled.span`
    display: inline-flex;
    align-items: center;
    user-select: none;
    &::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #adb5bd;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
`;

