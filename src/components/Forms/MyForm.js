/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como validar campos mediante el uso
 * 		   del paquete 'yup'.
 *
 *
 * MÁS EJEMPLOS: https://github.com/hozlucas28/React-Interest-Calculator-Practice-2023/blob/Master/src/App.js#L51
-------------------------------------------------------------------------- */

import { memo } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../Input';

const MyForm = ({ onSubmit }) => {
	console.log('renderizando my form');
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	};

	return (
		<Formik
			initialValues={{
				name: '',
				lastName: ''
			}}
			onSubmit={handleSubmit}
			validationSchema={Yup.object({
				name: Yup.string().required('Obligatorio'),
				lastName: Yup.string().required('Obligatorio')
			})}
		>
			<Form>
				<Input
					name="name"
					label="Nombre"
				/>
				<Input
					name="lastName"
					label="Apellido"
				/>
				<button type="submit">Enviar</button>
			</Form>
		</Formik>
	);
};

export default memo(MyForm);
