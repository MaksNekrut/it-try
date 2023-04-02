import React from 'react';
import { StyledCourseFolder, StyledCourseFolderNameplate, StyledCourseFolderWrapper, StyledFolderShadow } from './CourseFolder.styled';

const CourseFolder = () => {
	return (
		<StyledCourseFolderWrapper>
			<StyledFolderShadow/>
			<StyledCourseFolderNameplate/>
			<StyledCourseFolder/>
		</StyledCourseFolderWrapper>
	);
};

export default CourseFolder;
