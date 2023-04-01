import styled, { StyledProps } from "styled-components";

import { IInput } from "@root/types";

const StyledInput = styled.input<StyledProps<IInput>>`
    width: ${({ width }) => width || '100%'};
    border: ${({ border }) => border || '1px solid blue'};
`
export default StyledInput
