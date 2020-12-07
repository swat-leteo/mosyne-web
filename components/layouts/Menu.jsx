//----- import Libraries
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';

//----- import components
import IconProfile from '../ui/icons/IconProfile';
import IconAngel from '../ui/icons/IconAngel';
import IconConfig from '../ui/icons/IconConfig';
import IconMenuLeft from '../ui/icons/IconMenuLeft';
import IconMenuRight from '../ui/icons/IconMenuRight';
import { Media } from '../../types/mediaquery';

const MenuContainer = styled.nav`
	width: 100%;
	height: 100vh;
	font-family: var(--font);
	padding-top: 44px;
	position: relative;
	transition: all 0.3s linear;
	@media ${Media.desktop} {
		width: 10%;
	}
	${(props) =>
		props.menu === true
			? css`
					width: 30%;
					@media ${Media.tablet} {
						width: 15%;
					}
			  `
			: css`
					width: 5%;
			  `}

	ul {
		display: ${(props) => (props.menu === true ? 'block' : 'none')};
		padding: 0;
		list-style: none;
		transition: all 0.3s linear;
		${(props) =>
			props.menu === true
				? css`
						opacity: 1;
						transform: translateX(0);
				  `
				: css`
						opacity: 0;
						transform: translateX(-50%);
				  `}

		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
			p {
				color: var(--white);
				font-size: 10px;
			}
			hr {
				width: 50%;
				margin-bottom: 10px;
			}
		}
	}
	> svg {
		position: absolute;
		top: 50vh;
		right: -7.5px;
		cursor: pointer;
		@media ${Media.desktop} {
			display: none;
		}
	}
`;

const Menu = ({ menu, showMenu }) => {
	return (
		<MenuContainer menu={menu}>
			<ul>
				<Link href="/profile">
					<li>
						<IconProfile />
						<p>Mi perfil</p>
						<hr />
					</li>
				</Link>
				<Link href="/profile-angel-data">
					<li>
						<IconAngel />
						<p>Ángeles</p>
						<hr />
					</li>
				</Link>
				<li>
					<IconConfig />
					<p>Configuración</p>
				</li>
			</ul>
			{menu === true ? (
				<IconMenuLeft onClick={() => showMenu(false)} />
			) : (
				<IconMenuRight onClick={() => showMenu(true)} />
			)}
		</MenuContainer>
	);
};

export default Menu;
