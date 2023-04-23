import styled, { StyledProps } from 'styled-components';
import colors from '@/json.constants/colors.json';
import indents from '@/json.constants/indents.json';
import borders from '@/json.constants/borders.json';
import textSizes from '@/json.constants/textSizes.json';
import textWeight from '@/json.constants/textWeight.json';
import { IButton } from '@root/types';

export const StyledButton = styled.button<StyledProps<IButton>>`
    width: ${({ width }) => width ? width : '100%'};
    background: ${({ background }) => background ? colors[background] : colors['white']};
    border-radius: ${({ radius }) => radius ? borders[radius] : borders['lg']};
    color: ${({ color }) => color ? colors[color] : colors['black']};
    text-align: ${({ align }) => align ? align : 'center'};
    padding: ${({ indent }) => indent ? indents[indent] : (`${indents['sm']} ${indents['md']}`)};
    font-size: ${({ size }) => size ? textSizes[size] : textSizes['medium']};
    margin: ${({ margin }) => margin ? margin : '0'};
    font-weight: ${({ weight }) => weight ? textWeight[weight] : textWeight['s']};
    cursor: pointer;
    outline: none;
    border: none;
    transition: .2s ease-in-out 0s;
    &:hover {
        transform: scale(1.03)
    }
`;
