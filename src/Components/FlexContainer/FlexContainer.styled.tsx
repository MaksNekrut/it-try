import styled, {StyledProps} from "styled-components";
import { IFlexContainer } from "@root/types";
import indents from "@/json.constants/indents.json";
import borders from '@/json.constants/borders.json';
import colors from '@/json.constants/colors.json';
export const StyledFlexContainer = styled.div<StyledProps<IFlexContainer>>`
      display: flex;
      flex-direction: ${({ direction }) => direction || 'row'};
      flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
      gap: ${({ gap }) => gap ? indents[gap] : indents.md};
      align-content: ${({ align }) => align || 'center'};
      justify-content: ${({ justify }) => justify || 'center'};
      border-radius: ${({ radius }) => radius ? borders[radius] : borders.zero};
      padding: ${({ padding }) => padding ? indents[padding] : indents.zero};
      margin: ${({ margin }) => margin ? indents[margin] : indents.zero};
      background: ${({ background }) => background ? colors[background] : colors.white};
`;