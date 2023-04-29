import React from "react";
import {
    StyledFilterContainer,
    StyledTitle,
    StyledCheckbox,
    StyledInputContainer,
    StyledInput,
    StyledAdditionalElementsBlock,
} from "@/Components/Filter/Filter.styled";
import Checkbox from "@/Components/Checkbox/Checkbox";
import Text from "@/Components/Text/Text";
import {RANGE} from "@root/constants";
interface IProps {
    title: string;
    isInput: boolean;
    isCheckbox: boolean;
    order?: 'direct' | 'revert';
    additional?: React.ReactNode;
    isDoubleInputField: boolean;
    isOptionsBlock: boolean;
    customTitles?: string[];
}
const Filter = ({
    title,
    isInput,
    isCheckbox,
    order = 'direct',
    isDoubleInputField,
    additional,
    isOptionsBlock,
    customTitles,
}: IProps) => {

    return (
        <StyledFilterContainer isMobile={false}>
            <StyledTitle>
                <Text text={title} size={"large"} weight={"sm"} align={"start"} />
            </StyledTitle>
            { isInput &&  <StyledInputContainer isDouble={isDoubleInputField}>
                {
                    isDoubleInputField ?
                        (<>
                            <StyledInput placeholder={RANGE.from} />
                            <StyledInput placeholder={RANGE.to}/>
                        </>)
                        :
                        <StyledInput />
                }
            </StyledInputContainer>
            }
            { isCheckbox && !customTitles
                ? <StyledCheckbox>
                    <Checkbox label={''} />
                </StyledCheckbox>
                : isCheckbox
                    ? customTitles.map(CheckboxLabel => <Checkbox label={CheckboxLabel} />)
                    : null
            }
            {
                isOptionsBlock &&
                <StyledAdditionalElementsBlock>
                    { customTitles ? customTitles.map(title => <Checkbox label={title} />) : null }
                </StyledAdditionalElementsBlock>
            }
            { additional && <div>{additional}</div>}
        </StyledFilterContainer>
    )
}

export default Filter;