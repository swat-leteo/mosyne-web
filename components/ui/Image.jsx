import styled from '@emotion/styled';

const Image = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-right: 5px;
	border-radius: 20px;
	object-fit: cover;
`;

export default Image;
