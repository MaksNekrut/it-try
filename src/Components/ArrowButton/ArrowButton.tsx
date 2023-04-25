import React from 'react';
import {StyledArrowButton} from "@/Components/ArrowButton/ArrowButton.styled";
import ArrowLeft from "@/assets/images/arrow-left.svg";
import ArrowTop from "@/assets/images/arrow-top.svg";

type IProps = {
    isRoundButton: boolean
}
const ArrowButton = ({ isRoundButton }:IProps) => {
    return (<>
        <StyledArrowButton isRound={isRoundButton}>
            { isRoundButton ? <ArrowLeft /> : <ArrowTop /> }
        </StyledArrowButton>
    </>);
};
export default ArrowButton;