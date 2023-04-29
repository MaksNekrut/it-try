import React, {FC, ReactElement} from 'react';
import { StyledDirectionFolder, StyledDirectionFolderNameplate, StyledFolderWrapper, StyledContainer } from './DirectionFolder.styled';
import { ICourse } from "@root/types";
import { getCountOfCourses, getUniqueValues } from "@/helpers";
import {useNavigate} from "react-router-dom";

interface IProps {
	coursesList: ICourse[];
	subdirection?: string;
}
const DirectionFolder: FC<IProps> = ({subdirection, coursesList}) => {
	const directions = getUniqueValues(coursesList, 'direction');
	const listOfDirections = getCountOfCourses(directions, coursesList);
	const navigate = useNavigate();

	if (subdirection) {
		return (
			<div>{subdirection}</div>
		)
	}
	return (
		<StyledContainer isMobile={false}>
			{
				listOfDirections.map((el:any, index:number) => {
					return ( <StyledFolderWrapper key={index}>
							<StyledDirectionFolderNameplate/>
							<StyledDirectionFolder
								onClick={() => navigate('/subdirections', {state: {directions: el.direction}})}
							>
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
