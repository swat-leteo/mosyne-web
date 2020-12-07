//----- import Libraries
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

//----- import components
import Image from '../components/ui/Image';
import Layout from '../components/layouts/Layout';
import Header from '../components/layouts/Header';
import Menu from '../components/layouts/Menu';
import Logout from '../components/layouts/Logout';
import IconPlus from '../components/ui/icons/IconPlus';
import IconPolice from '../components/ui/icons/IconPolice';
import IconCruzRoja from '../components/ui/icons/IconCruzRoja';
import IconUserDefault from '../components/ui/icons/IconUserDefault';
import { Media } from '../types/mediaquery';

//----- import context
import UserContext from '../context/user/userContext';
import AngelContext from '../context/angel/angelContext';

const ProfileContainer = styled.main`
	height: 100vh;
	font-family: var(--font);
	background: var(--white);
	border-radius: 20px 0 0 20px;
	overflow: hidden;
	transition: all 0.3s linear;
	box-shadow: -8px 0px 16px rgba(73, 45, 148, 0.5);
	@media ${Media.desktop} {
		width: 90%;
		border-radius: 30px 0 0 30px;
	}
	${(props) =>
		props.menu === true
			? css`
					width: 70%;
					@media ${Media.tablet} {
						width: 85%;
					}
			  `
			: css`
					width: 95%;
			  `}

	.profile {
		background-color: white;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 20px 10px;
		div {
			margin-left: 10px;
			h1 {
				font-weight: 700;
				font-size: 18px;
				color: var(--violet);
				margin: 0 0 5px;
			}
			p {
				margin: 0;
				font-size: 8px;
				color: var(--black);
			}
		}
	}
	.angels {
		display: flex;
		flex-direction: column;
		padding: 10px;
		h2 {
			color: var(--blue);
			margin: 0 0 5px;
			font-weight: 700;
			font-size: 12px;
		}
		p {
			margin: 0 0 10px;
			font-size: 10px;
			color: var(--black);
		}
		div {
			display: flex;
			align-items: center;
			span {
				width: 40px;
				height: 40px;
				border: 1px dashed black;
				border-radius: 20px;
				margin-right: 15px;
			}
			div {
				margin-right: 15px;
			}
		}
	}
	.emergency {
		padding: 10px;
		h2,
		h3,
		p {
			margin: 0;
		}
		h2 {
			font-weight: 700;
			color: var(--blue);
			font-size: 18px;
		}
		> .NumbersContainer {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			margin-top: 20px;
			.NumbersItems {
				padding: 10px;
				width: 130px;
				background-color: white;
				text-align: center;
				border: 1px solid var(--gray);
				border-radius: 10px;
				margin-top: 10px;
				&:first-of-type {
					margin-right: 10px;
				}
				h3 {
					font-size: 10px;
					color: var(--violet);
					margin-bottom: 16px;
				}
				p {
					font-size: 12px;
					color: var(--black);
					margin-bottom: 10px;
					&:last-of-type {
						margin-bottom: 5px;
					}
				}
			}
		}
	}
`;

export default function Profile() {
	const [menu, showMenu] = useState(false);
	const router = useRouter();
	const { obtenerUsuario, usuario } = useContext(UserContext);
	const { angels, obtenerAngeles } = useContext(AngelContext);
	const { photo, firstname, lastname } = usuario;

	const windowWith = typeof window !== 'undefined' && window.innerWidth;

	useEffect(() => {
		if (Object.keys(usuario).length === 0) {
			obtenerUsuario();
		}
		if (angels.length === 0) {
			obtenerAngeles();
		}
		if (windowWith >= 1440) {
			showMenu(true);
		}
	}, [angels]);

	return (
		<Layout display="flex" menu={true}>
			<Menu menu={menu} showMenu={showMenu} />
			<ProfileContainer menu={menu}>
				<Header>
					<Logout />
				</Header>
				<div className="profile">
					{photo === '' ? (
						<IconUserDefault fill="#000000" width="39px" height="39px" />
					) : (
						<Image src={photo} width="39px" height="39px" />
					)}
					<div>
						<h1>
							Hola {firstname} {lastname}
						</h1>
						<Link href="/edit-profile">
							<p>Editar mi perfil</p>
						</Link>
					</div>
				</div>
				<div className="angels">
					<h2>Mis ángeles</h2>
					<p>Agrega a tus ángeles que cuidarás</p>
					<div>
						{angels.length === 0 ? (
							<span></span>
						) : (
							<>
								{angels.map((angel) => (
									<Link href={`/profile-angel-data/${angel.id}`} key={angel.id}>
										<div>
											{angel.photo === '' ? (
												<IconUserDefault
													fill="#000000"
													width="25px"
													height="25px"
												/>
											) : (
												<Image src={angel.photo} width="25px" height="25px" />
											)}
										</div>
									</Link>
								))}
							</>
						)}
						<IconPlus
							width="20px"
							height="20px"
							onClick={() => router.push('/privacity')}
						/>
					</div>
				</div>
				<div className="emergency">
					<h2>Números de emergencia</h2>
					<div className="NumbersContainer">
						<div className="NumbersItems">
							<IconCruzRoja />
							<h3>Cruz Roja Mexicana</h3>
							<p>065</p>
							<p>5557-5757</p>
							<p>5395-1111</p>
						</div>
						<div className="NumbersItems">
							<IconPolice />
							<h3>Policía CDMX</h3>
							<p>5684-2142</p>
							<p>5481-4326</p>
							<p>5256-0606</p>
						</div>
					</div>
				</div>
			</ProfileContainer>
		</Layout>
	);
}
