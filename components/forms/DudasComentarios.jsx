import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from "next/router";

const DataUserDudasComentariosSchema = Yup.object().shape({
	name: Yup.string().required('Por favor ingrese su nombre'),
	phone: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten numeros')
		.min(10, 'El teléfono debe tener solo 10 digitos')
		.max(10, 'El teléfono debe tener solo 10 digitos')
		.required('Por favor ingrese su teléfono'),
	email: Yup.string().email('Por favor ingrese un correo válido').required('Por favor ingrese su correo electrónico'),
	comments: Yup.string().required('Por favor ingrese el nombre de su tienda')
});

export default function DudasComentarios() {
	const route = useRouter();

	return (
		<div className="form">
			<Formik
				initialValues={{ name: '', phone: '', email: '',comments: '' }}
				validationSchema={DataUserDudasComentariosSchema}
				onSubmit={values => {
					let name = values.name;
					let phone = values.phone;
					let email = values.email;
					let comments = values.comments;

					var myHeaders = new Headers();
					myHeaders.append("Cookie", "S=spreadsheet_forms=SeyclLqi4jbF1iX8oBL_SIxgK0f6g_IIPjw6fxfAckE; NID=511=T9-Ju5s11MJU-kb4GlbNZRbz7VxTiQkF6AlfBTHQfF9POjBIRp9WKx47LaOsP9mJDOf1epuZ7WVKwqZdnD-PrKmpbQyAh_gf-x3fvrsks11nzYRc8BGJ-kSC2UPVu8JklZiPI-QB4Uc9CJCyuHCWUbKV1H2Gzq1ql-lxGTwjhmQ");
					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						redirect: 'follow'
					};

					fetch("https://docs.google.com/forms/d/e/1FAIpQLSeWy72U7Ga7OtyLP-xF_k0_SgVJoeyTAPr1N9dyFv9IAyoguQ/formResponse?entry.1804912127="+name+"&entry.1648737347="+phone+"&entry.1151721150="+email+"&entry.548382426="+comments, requestOptions)
					.then(response => route.push('/contacto/gracias'))
					.then(result => route.push('/contacto/gracias'))
					.catch(error => route.push('/contacto/gracias'));

				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="field">
							<div className="control">
								<Field className="input" name="name" placeholder="Escribe tu nombre" />
								{errors.name && touched.name ? ( <div className="help">{errors.name}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="phone" placeholder="Escribe tu teléfono" />
								{errors.phone && touched.phone ? ( <div className="help">{errors.phone}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="email" placeholder="Escribe tu correo electrónico" />
								{errors.email && touched.email ? ( <div className="help">{errors.email}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="comments" placeholder="Escribe tus dudas o comentarios" />
								{errors.comments && touched.comments ? ( <div className="help">{errors.comments}</div> ) : null}
							</div>
							<div className="control">
								<div className="buttons is-right">
									<button className="button primary" type="submit" onClick={() => {
										gtag('event', 'dudas', {
											'TheEventAction': 'form',
										});
										gtag('event', 'conversion', {'send_to': 'AW-10829665062/hMEuCIm4848DEKam_qso'});
									}}>¡Enviar!</button>
								</div>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
    )
}