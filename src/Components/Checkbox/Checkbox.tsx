import React from 'react';
import { CheckboxContainer, StyledLabel, StyledInput, StyledSpan } from './Checkbox.styled';

interface IProps {
    label: string
}

const Checkbox = ({ label }: IProps) => {
	return (
		<CheckboxContainer>
			<StyledLabel>
				<StyledInput type="checkbox" />
				<StyledSpan>{ label }</StyledSpan>
			</StyledLabel>
		</CheckboxContainer>
	);
};


export default Checkbox;
