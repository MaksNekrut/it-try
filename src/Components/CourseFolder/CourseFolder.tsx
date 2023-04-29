import React, {lazy, Suspense} from 'react';
import  { useSelector } from 'react-redux';
import { getAllCoursesSelector } from "@/store/courses/selectors";


interface IProps {
	isNameplateNeeded: boolean;
	isShadowNeeded: boolean;
	isWithLabel: boolean;
	isMain: boolean;
	isSubDirectionPath: boolean;
	subdirection?: string;
	pageType: 'direction' | 'subdirection';
}
const CourseFolder = ({ pageType, isNameplateNeeded = true, isShadowNeeded = false, isWithLabel = false, isMain = false, isSubDirectionPath, subdirection = "" }: IProps) => {
	const coursesList = useSelector(getAllCoursesSelector);
	return (
		<div>1</div>
	)
};
export default CourseFolder;
