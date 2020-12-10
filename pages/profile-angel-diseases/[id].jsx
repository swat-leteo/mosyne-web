//----- import Libraries
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';
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
import IconPlus from '../../components/ui/icons/IconPlus';
import { Media } from '../../types/mediaquery';

//----- import context
import AngelContext from '../../context/angel/angelContext';

const ProfileAngelDiseasesContainer = styled.section`
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
		padding: 0 10px;
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
			}
			input {
				background-color: var(--white);
			}
			textarea,
			select {
				margin-top: 5px;
				color: var(--black);
				border-color: var(--gray);
				border-radius: 3px;
			}
			textarea {
				font-family: var(--font);
				padding: 10px;
			}
			select {
				height: 40px;
			}
		}
		.checkbox-group {
			display: flex;
			justify-content: flex-start;
			margin-top: 10px;
		}
		.checkbox {
			display: flex;
			align-items: center;
			padding: 2px 10px;
			border-radius: 20px;
			margin-right: 5px;
			border: 2px solid var(--white);
			div {
				width: 10px;
				height: 10px;
				margin-right: 8px;
				border-radius: 50%;
				border: 1px solid var(--purple1);
			}
			input:checked + div {
				background: var(--purple1);
			}
			input {
				display: none;
			}
		}
		.alergias,
		.cirugias,
		.medicamentos {
			div {
				margin-top: 5px;
				display: flex;
				align-items: center;
				input {
					margin-top: 0;
					margin-right: 40px;
					width: 70%;
				}
			}
			div:not(:first-of-type) {
				width: 70%;
				justify-content: space-between;
				p {
					font-size: 12px;
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

export default function ProfileAngelDiseases() {
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
	}, [id]);

	return (
		<Layout display="flex" menu={true}>
			<Menu menu={menu} showMenu={showMenu} />
			<ProfileAngelDiseasesContainer>
				<Header>
					<Logout />
				</Header>
				<CardAngel tab="3" menu={menu} id={id} />
				<form>
					<div>
						<label htmlFor="">Tipo de sangre*</label>
						<select name="blood_type">
							<option value="">-- Selecciona --</option>
							<option value="A-">A-</option>
							<option value="A+">A+</option>
							<option value="B-">B-</option>
							<option value="B+">B+</option>
							<option value="AB-">AB-</option>
							<option value="AB+">AB+</option>
							<option value="O-">O-</option>
							<option value="O+">O+</option>
						</select>
					</div>
					<div className="life">
						<label htmlFor="">¿Vive solo?</label>
						<div className="checkbox-group">
							<div className="checkbox">
								<input type="radio" name="life" id="si" value="si" />
								<div></div>
								<label htmlFor="si">Si</label>
							</div>
							<div className="checkbox">
								<input type="radio" name="life" id="no" value="no" />
								<div></div>
								<label htmlFor="no">No</label>
							</div>
						</div>
					</div>
					<div className="detonante">
						<label htmlFor="">Detonante del Alzheimer</label>
						<div className="checkbox-group">
							<div className="checkbox">
								<input
									type="radio"
									name="detonante"
									id="herencia"
									value="herencia"
								/>
								<div></div>
								<label htmlFor="herencia">Herencía</label>
							</div>
							<div className="checkbox">
								<input
									type="radio"
									name="detonante"
									id="depresion"
									value="depresion"
								/>
								<div></div>
								<label htmlFor="depresion">Depresión</label>
							</div>
							<div className="checkbox">
								<input
									type="radio"
									name="detonante"
									id="neurologico"
									value="neurologico"
								/>
								<div></div>
								<label htmlFor="neurologico">Neurologico</label>
							</div>
						</div>
					</div>
					<div className="alergias">
						<label htmlFor="">Alergías</label>
						<div>
							<Input type="text" />
							<IconPlus width="25px" height="25px" />
						</div>
					</div>
					<div className="cirugias">
						<label htmlFor="">Cirugías</label>
						<div>
							<Input type="text" />
							<IconPlus width="25px" height="25px" />
						</div>
					</div>
					<div className="medicamentos">
						<label htmlFor="">Medicamentos</label>
						<div>
							<Input type="text" />
							<IconPlus width="25px" height="25px" />
						</div>
					</div>
					<div className="disease">
						<label htmlFor="">¿Sufré de alguna de estas enfermedades?</label>
						<div className="checkbox-group">
							<div className="checkbox">
								<input
									type="radio"
									name="disease"
									id="diabetes"
									value="diabetes"
								/>
								<div></div>
								<label htmlFor="diabetes">Diabetes</label>
							</div>
							<div className="checkbox">
								<input
									type="radio"
									name="disease"
									id="hipertension"
									value="hipertension"
								/>
								<div></div>
								<label htmlFor="hipertension">Hipertensión</label>
							</div>
						</div>
					</div>
					<div>
						<label htmlFor="">Reacciones ante medicamentos</label>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Describe reacciones ante medicamentos"
						></textarea>
					</div>
					<div>
						<label htmlFor="">Dolencias</label>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Describe dolencias recientes"
						></textarea>
					</div>
					<div className="buttons">
						<Button
							bgColor="transparent"
							textColor="var(--purple1)"
							borderColor="var(--purple1)"
						>
							Regresar
						</Button>
						<Link href="/generate-qr">
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
			</ProfileAngelDiseasesContainer>
		</Layout>
	);
}
