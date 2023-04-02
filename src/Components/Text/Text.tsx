import React from 'react';
import StyledText from './Text.styled';
import { ICommonText } from '@root/types';

const Text = ({ text }:ICommonText) => {
	return (
		<StyledText color={'green'} weight={'xlg'} size={'xlarge'} align={'start'}>
			{ text }
		</StyledText>
	);
};

export default Text;
