import React from 'react';
import { StyledDirectionFolder, StyledDirectionFolderNameplate, StyledFolderWrapper } from './DirectionFolder.styled';

const DirectionFolder = () => {
	return (
		<StyledFolderWrapper>
			<StyledDirectionFolderNameplate/>
			<StyledDirectionFolder/>
		</StyledFolderWrapper>
	);
};

export default DirectionFolder;
