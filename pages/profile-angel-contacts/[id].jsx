//----- import Libraries
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

//----- import components
import Header from '../../components/layouts/Header';
import Layout from '../../components/layouts/Layout';
import Logout from '../../components/layouts/Logout';
import Menu from '../../components/layouts/Menu';
import CardAngel from '../../components/layouts/CardAngel';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Media } from '../../types/mediaquery';

//----- import context
import AngelContext from '../../context/angel/angelContext';

const ProfileAngelContactsContainer = styled.section`
	min-height: 100vh;
	font-family: var(--font);
	background: var(--white);
	border-radius: 20px 0 0 20px;
	overflow: hidden;
	transition: all 0.3s linear;
	box-shadow: -8px 0px 16px rgba(73, 45, 148, 0.5);
	@media ${Media.desktop} {
		border-radius: 25px 0 0 25px;
	}
	${(props) =>
		props.menu === true
			? css`
					width: 70%;
					@media ${Media.tablet} {
						width: 85%;
					}
					@media ${Media.desktop} {
						width: 90%;
					}
			  `
			: css`
					width: 97%;
			  `}

	header {
		background-color: var(--gray);
	}
	form {
		background-color: var(--gray);
		padding: 10px;
		min-height: 100%;
		@media ${Media.tablet} {
			padding: 20px 30px;
		}
		@media ${Media.desktop} {
			padding: 30px 250px;
		}
		div {
			margin-top: 5px;
			display: flex;
			flex-direction: column;
			label {
				font-weight: 700;
				color: var(--violet);
				font-size: 12px;
			}
			input {
				background-color: var(--white);
			}
		}
		.row {
			display: flex;
			flex-direction: row;
			div {
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				@media ${Media.tablet} {
					align-items: center;
					flex-direction: row;
					margin-top: 10px;
				}
				label {
					margin-right: 12px;
				}
				input {
					width: 100%;
					@media ${Media.tablet} {
						margin: 0;
					}
				}
			}
			div:first-of-type {
				padding-right: 20px;
			}
		}
		.buttons {
			flex-direction: row;
			justify-content: flex-end;
			margin-top: 20px;
			button {
				margin: 0;
				&:first-of-type {
					margin-right: 10px;
				}
			}
		}
	}
`;

export default function ProfileAngelContacts() {
	const [menu, showMenu] = useState(false);
	const router = useRouter();
	const { obtenerAngel, angelinfo } = useContext(AngelContext);
	const {
		query: { id },
	} = router;

	const windowWith = typeof window !== 'undefined' && window.innerWidth;
	useEffect(() => {
		obtenerAngel(id);
		if (windowWith >= 1440) {
			showMenu(true);
		}
		console.log(angelinfo);
	}, [id]);

	return (
		<Layout display="flex" menu={true}>
			<Menu menu={menu} showMenu={showMenu} />
			<ProfileAngelContactsContainer menu={menu}>
				<Header>
					<Logout />
				</Header>
				<CardAngel tab="2" menu={menu} id={id} />
				<form>
					<div>
						<label htmlFor="">Nombre</label>
						<Input
							type="text"
							placeholder="Mínimo 2 caracteres"
							value={angelinfo.contacts[0].name}
						/>
					</div>
					<div>
						<label htmlFor="">Correo electrónico</label>
						<Input type="email" placeholder="ejemplo@mail.com" />
					</div>
					<div className="row">
						<div>
							<label htmlFor="">Teléfono de casa</label>
							<Input type="text" />
						</div>
						<div>
							<label htmlFor="">Teléfono celular</label>
							<Input type="text" value={angelinfo.contacts[0].phone} />
						</div>
					</div>
					<div className="buttons">
						<Button
							bgColor="transparent"
							textColor="var(--purple1)"
							borderColor="var(--purple1)"
						>
							Regresar
						</Button>
						<Link href="/add-angel-diseases">
							<Button
								bgColor="var(--purple1)"
								textColor="#FAFAFA"
								borderColor="var(--purple1)"
								shadow="true"
							>
								Guardar
							</Button>
						</Link>
					</div>
				</form>
			</ProfileAngelContactsContainer>
		</Layout>
	);
}
