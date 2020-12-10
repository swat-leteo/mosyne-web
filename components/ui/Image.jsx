import styled from '@emotion/styled';

import { Media } from '../../types/mediaquery';

const Image = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin-right: 15px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;

export default Image;
