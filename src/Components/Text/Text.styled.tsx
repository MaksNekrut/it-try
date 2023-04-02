import styled, { StyledProps } from 'styled-components';
import textSizes from '@/json.constants/textSizes.json';
import textWeight from '@/json.constants/textWeight.json';
import { IText } from '@root/types';
import colors from '@/json.constants/colors.json';

const StyledText = styled.div<StyledProps<IText>>`
    color: ${({ color }) => color || colors.black};
    text-align: ${({ align }) => align ? align : 'center'};
    font-size: ${({ size }) => size ? textSizes[size] : textSizes.medium};
    font-weight: ${({ weight }) => weight ? textWeight[weight] : textWeight.s};
`;

export default StyledText;
