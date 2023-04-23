import React, {FC, ReactElement} from 'react';
import { StyledDirectionFolder, StyledDirectionFolderNameplate, StyledFolderWrapper, StyledContainer } from './DirectionFolder.styled';
import {ICourse} from "@root/types";
import {getCountOfCourses, getUniqueValues} from "@/helpers";

interface IProps {
	coursesList: ICourse[];
}
const DirectionFolder: FC<IProps> = ({coursesList}) => {
	const directions = getUniqueValues(coursesList, 'direction');
	const listOfDirections = getCountOfCourses(directions, coursesList);
	console.log(listOfDirections);
	return (
		<StyledContainer>
			{
				listOfDirections.map((el:any, index:number) => {
					return ( <StyledFolderWrapper key={index}>
							<StyledDirectionFolderNameplate/>
							<StyledDirectionFolder>
								{el.direction}
								{el.count}
							</StyledDirectionFolder>
						</StyledFolderWrapper>
					)
				})
			}
		</StyledContainer>
	)
};

export default DirectionFolder;
