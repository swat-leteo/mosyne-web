//----- import Libraries
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

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

const ProfileAngelDataContainer = styled.section`
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
		padding: 0 10px;
		background-color: var(--gray);
		min-height: 100%;
		@media ${Media.tablet} {
			padding: 20px 30px;
		}
		@media ${Media.desktop} {
			padding: 30px 250px;
		}
		> div {
			margin-top: 5px;
			display: flex;
			flex-direction: column;
			label {
				font-weight: 700;
				color: var(--violet);
				font-size: 12px;
					@media ${Media.tablet} {
						font-size: 14px;
					}
			}
			input {
				background-color: var(--white);
					@media ${Media.tablet} {
						font-size: 14px;
					}
			}
			textarea {
				margin-top: 5px;
				background-color: var(--white);
				border-color: var(--gray);
				font-family: var(--font);
				padding: 10px;
				@media ${Media.tablet} {
					font-size: 14px;
				}
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
							font-size: 14px;
						}
					}
				}
				div:first-of-type {
					padding-right: 20px;
				}
			}
		}
		.buttons {
			flex-direction: row;
      justify-content: flex-end;
			margin: 20px 0;
			button {
				margin: 0;
				&:first-of-type {
					margin-right: 10px;
				}
			}
		}
	}
`;

export default function ProfileAngelData() {
	const [menu, showMenu] = useState(false);
	const { obtenerAngel, angelinfo } = useContext(AngelContext);
	const router = useRouter();
	const {
		query: { id },
	} = router;

	const windowWith = typeof window !== 'undefined' && window.innerWidth;

	useEffect(() => {
		obtenerAngel(id);
		if (windowWith >= 1440) {
			showMenu(true);
		}
	}, [id]);

	return (
		<Layout display="flex" menu={true}>
			<Menu menu={menu} showMenu={showMenu} />
			<ProfileAngelDataContainer>
				<Header>
					<Logout />
				</Header>
				<CardAngel tab="1" menu={menu} angel={id} />
				<form>
					<div className="row">
						<div>
							<label htmlFor="">Nombre</label>
							<Input
								type="text"
								placeholder="Mínimo 2 caracteres"
								value={angelinfo.firstname}
							/>
						</div>
						<div>
							<label htmlFor="">Apellido</label>
							<Input
								type="text"
								placeholder="Mínimo 3 caracteres"
								value={angelinfo.lastname}
							/>
						</div>
					</div>
					<div>
						<label htmlFor="">Nacionalidad</label>
						<Input
							type="text"
							placeholder="País de procedencia"
							value={angelinfo.nationality}
						/>
					</div>
					<div>
						<label htmlFor="">Sobre tu angel</label>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Escribe sus gustos, miedo, personalidad, etc."
							value={angelinfo.about}
						></textarea>
					</div>
					<hr />
					<div className="row">
						<div>
							<label htmlFor="">Estado</label>
							<Input type="text" value={angelinfo.address.city} />
						</div>
						<div>
							<label htmlFor="">Municipio/Delegación</label>
							<Input type="text" value={angelinfo.address.municipality} />
						</div>
					</div>
					<div className="row">
						<div>
							<label htmlFor="">Colonia</label>
							<Input type="text" value={angelinfo.address.neighborhood} />
						</div>
						<div>
							<label htmlFor="">CP</label>
							<Input type="text" value={angelinfo.address.municipality} />
						</div>
					</div>
					<div>
						<label htmlFor="">Calle y número</label>
						<Input type="text" value={angelinfo.address.street} />
					</div>
					<div className="buttons">
						<Button
							bgColor="transparent"
							textColor="var(--purple1)"
							borderColor="var(--purple1)"
						>
							Regresar
						</Button>
						<Button
							bgColor="var(--purple1)"
							textColor="#FAFAFA"
							borderColor="var(--purple1)"
							shadow="true"
						>
							Guardar
						</Button>
					</div>
				</form>
			</ProfileAngelDataContainer>
		</Layout>
	);
}
