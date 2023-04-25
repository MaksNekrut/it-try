import React from 'react';
import  { useSelector } from 'react-redux';
import {
	StyledCourseFolder,
	StyledCourseFolderNameplate,
	StyledCourseFolderWrapper,
	StyledFolderShadow,
	StyledLabel
} from './CourseFolder.styled';
import {DIRECTIONS_PAGE_TITLE} from "@root/constants";
import Folders from '@/assets/images/folders.svg';
import Text from "@/Components/Text/Text";
import DirectionFolder from "@/Components/DirectionFolder/DirectionFolder";
import { getAllCoursesSelector } from "@/store/courses/selectors";
import { isMobile } from "react-device-detect";
import FoldersMobile from "@/assets/images/folder-mobile.svg";
import ArrowButton from "@/Components/ArrowButton/ArrowButton";

interface IProps {
	isNameplateNeeded: boolean;
	isShadowNeeded: boolean;
	isWithLabel: boolean;
	isMain: boolean;
}
const CourseFolder = ({isNameplateNeeded = true, isShadowNeeded = false, isWithLabel = false, isMain = false }: IProps) => {
	const coursesList = useSelector(getAllCoursesSelector);
	{
		if (isMobile) {
			return (<>
				<StyledLabel isMobile>
					<FoldersMobile />
					<Text text={DIRECTIONS_PAGE_TITLE} size={'large'} weight={'rg'} />
					<FoldersMobile />
				</StyledLabel>
				<DirectionFolder coursesList={coursesList} />
			</>)
		}
	}
	return (
		<StyledCourseFolderWrapper isMain={isMain}>
			{ isShadowNeeded && <StyledFolderShadow isMain={isMain}/>}
			{ isNameplateNeeded && <StyledCourseFolderNameplate/> }
			<StyledCourseFolder isMain={isMain}>
				{ isMain && isWithLabel && <StyledLabel isMobile={false}>
						<Folders />
						<Text text={DIRECTIONS_PAGE_TITLE} size={'big'} weight={'lg'} />
						<Folders />
					</StyledLabel>
				}
				<DirectionFolder coursesList={coursesList} />
			</StyledCourseFolder>
		</StyledCourseFolderWrapper>
	);
};
export default CourseFolder;
