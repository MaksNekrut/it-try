import React from 'react';
import { StyledMainPage }from './Main.styled';
import Promo from '@/assets/images/bgimage.svg';
import Logo from '@/assets/images/logo.svg';
import { IFlexContainer } from "@root/types";
import FlexContainer from "@/Components/FlexContainer/FlexContainer";
import Text from "@/Components/Text/Text";
import Button from "@/Components/Button/Button";
import {BUTTON_TEXT_MAIN, TITLE_MAIN, SUBTITLE_MAIN} from "@root/constants";

const Main = () => {
	return (
		<StyledMainPage>
			<FlexContainer>
				<FlexContainer gap="xlg" direction="column" justify="start" margin="xlg">
					<FlexContainer justify="start">
						<Logo/>
					</FlexContainer>
					<FlexContainer direction="column">
						<Text text={TITLE_MAIN} weight="lg" align="start" size="big" />
						<Text text={SUBTITLE_MAIN} weight="sm" align="start" size="xslarge" />
						<Button buttonText={BUTTON_TEXT_MAIN} width="324px" background={'darkBlue'} color="white" weight="md" size="xllarge" />
					</FlexContainer>
				</FlexContainer>
				<FlexContainer>
					<Promo />
				</FlexContainer>
			</FlexContainer>
		</StyledMainPage>
	);
};

export default Main;
