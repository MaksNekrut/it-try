import { StyledShortInfoFolder, StyledShortInfoFolderNameplate, StyledShortInfoWrapper } from './ShortInfoFolder.styled';

const ShortInfoFolder = ({text}:any) => {
	return (
		<StyledShortInfoWrapper>
			<StyledShortInfoFolderNameplate>{text}</StyledShortInfoFolderNameplate>
			<StyledShortInfoFolder/>
		</StyledShortInfoWrapper>
	);
};

export default ShortInfoFolder;
