import React from 'react';
import { StyledText } from "@/Components/Text/Text.styled";
import { IText } from '@root/types';

type IProps = {
	text: string
}

const Text = ({ text, color, weight, size, align }:IText & IProps) => {
	return (
		<StyledText
			color={color}
			weight={weight}
			size={size}
			align={align}
		>
			{ text }
		</StyledText>
	);
};

export default Text;
