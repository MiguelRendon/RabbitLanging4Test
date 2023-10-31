import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from "next/router";

const DataUserSocioComercialSchema = Yup.object().shape({
	name: Yup.string().required('Por favor ingrese su nombre'),
	phone: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten numeros')
		.min(10, 'El teléfono debe tener solo 10 digitos')
		.max(10, 'El teléfono debe tener solo 10 digitos')
		.required('Por favor ingrese su teléfono'),
	email: Yup.string().email('Por favor ingrese un correo válido').required('Por favor ingrese su correo electrónico'),
	empresa: Yup.string().required('Por favor ingrese el nombre de la empresa o marca que representa'),
	puesto: Yup.string().required('Por favor ingrese su puesto de trabajo')
});

export default function SocioComercial() {
	const route = useRouter();
	return (
		<div className="form">
			<Formik
				initialValues={{ name: '', phone: '', email: '',empresa: '',puesto: '', comentario: '' }}
				validationSchema={DataUserSocioComercialSchema}
				onSubmit={values => {
					let name = values.name;
					let phone = values.phone;
					let email = values.email;
					let empresa = values.empresa;
					let puesto = values.puesto;
					let comentario = values.comentario;

					var myHeaders = new Headers();
					myHeaders.append("Cookie", "S=spreadsheet_forms=SeyclLqi4jbF1iX8oBL_SIxgK0f6g_IIPjw6fxfAckE; NID=511=T9-Ju5s11MJU-kb4GlbNZRbz7VxTiQkF6AlfBTHQfF9POjBIRp9WKx47LaOsP9mJDOf1epuZ7WVKwqZdnD-PrKmpbQyAh_gf-x3fvrsks11nzYRc8BGJ-kSC2UPVu8JklZiPI-QB4Uc9CJCyuHCWUbKV1H2Gzq1ql-lxGTwjhmQ");
					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						redirect: 'follow'
					};

					fetch("https://docs.google.com/forms/d/e/1FAIpQLScxU5W_ZM6TqtnhEqKNOhaNGnJcnHf6E29_SQDnT_MU9d59fA/formResponse?entry.600667847="+name+"&entry.1360969915="+phone+"&entry.1590835682="+email+"&entry.832862224="+empresa+"&entry.545666852="+puesto+"&entry.2133899137="+comentario, requestOptions)
					.then(response => route.push('/contacto/gracias-socios-comerciales'))
					.then(result => route.push('/contacto/gracias-socios-comerciales'))
					.catch(error => route.push('/contacto/gracias-socios-comerciales'));

				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="field">
							<div className="control">
								<Field className="input" name="name" placeholder="Escribe tu nombre completo" />
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
								<Field className="input" name="empresa" placeholder="Empresa o marca que representa" />
								{errors.empresa && touched.empresa ? ( <div className="help">{errors.empresa}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="puesto" placeholder="Puesto de trabajo" />
								{errors.puesto && touched.puesto ? ( <div className="help">{errors.puesto}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="comentario" placeholder="Comentarios" />
							</div>
							<div className="control">
								<div className="buttons is-right">
									<button className="button primary" type="submit" onClick={() => {
										gtag('event', 'comerciales', {
										'TheEventAction': 'form',
										});
										gtag('event', 'conversion', {'send_to': 'AW-10829665062/yXpECImooZADEKam_qso'});
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