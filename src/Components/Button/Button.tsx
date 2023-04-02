import React from 'react';
import StyledButton from './Button.styled';
import {ICommonText} from '@root/types';

const Button = ({ text }:ICommonText) => {
	return (
		<StyledButton color={'white'} weight={'lg'} background={'darkBlue'} size={'large'}>
			{ text }
		</StyledButton>
	);
};

export default Button;
