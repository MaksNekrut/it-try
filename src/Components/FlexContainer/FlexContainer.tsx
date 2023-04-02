import React from "react";
import {IFlexContainer} from '@root/types';
import {StyledFlexContainer} from "@/Components/FlexContainer/FlexContainer.styled";

type IProps = {
    children: React.ReactNode
}

const FlexContainer = ({
    background,
    gap,
    align,
    justify,
    margin,
    padding,
    wrap,
    radius,
    direction,
    children
    }:IFlexContainer & IProps) => {
    return (
        <StyledFlexContainer
            background={background}
            gap={gap}
            align={align}
            justify={justify}
            margin={margin}
            padding={padding}
            wrap={wrap}
            radius={radius}
            direction={direction}
        >
            { children }
        </StyledFlexContainer>
    );
};

export default FlexContainer;
