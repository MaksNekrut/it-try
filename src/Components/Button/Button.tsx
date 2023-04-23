import React from 'react';
import {StyledButton} from './Button.styled';
import {IButton} from '@root/types';

type IProps = {
	buttonText: string | React.ReactNode
}
const Button = ({
	buttonText,
	background,
	color,
	radius,
	indent,
	align,
	size,
	margin,
	weight,
	width,
	onClick,
	}:IButton & IProps) => {
	return (
		<StyledButton
			color={color}
			weight={weight}
			background={background}
			size={size}
			radius={radius}
			indent={indent}
			align={align}
			margin={margin}
			width={width}
			onClick={onClick}
		>
			{ buttonText }
		</StyledButton>
	);
};

export default Button;
