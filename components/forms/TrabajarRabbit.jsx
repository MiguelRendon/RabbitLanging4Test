import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from "next/router";

const DataUserTrabajarRabbitSchema = Yup.object().shape({
	name: Yup.string().required('Por favor ingrese su nombre'),
	phone: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten numeros')
		.min(10, 'El teléfono debe tener solo 10 digitos')
		.max(10, 'El teléfono debe tener solo 10 digitos')
		.required('Por favor ingrese su teléfono'),
	email: Yup.string().email('Por favor ingrese un correo válido').required('Por favor ingrese su correo electrónico'),
	area: Yup.string().required('Por favor ingrese el área a la que desear aplicar')
});

export default function TrabajarRabbit() {
	const route = useRouter();
	return (
		<div className="form">
			<Formik
				initialValues={{ name: '', phone: '', email: '',area: '' }}
				validationSchema={DataUserTrabajarRabbitSchema}
				onSubmit={values => {
					let name = values.name;
					let phone = values.phone;
					let email = values.email;
					let area = values.area;

					var myHeaders = new Headers();
					myHeaders.append("Cookie", "S=spreadsheet_forms=SeyclLqi4jbF1iX8oBL_SIxgK0f6g_IIPjw6fxfAckE; NID=511=T9-Ju5s11MJU-kb4GlbNZRbz7VxTiQkF6AlfBTHQfF9POjBIRp9WKx47LaOsP9mJDOf1epuZ7WVKwqZdnD-PrKmpbQyAh_gf-x3fvrsks11nzYRc8BGJ-kSC2UPVu8JklZiPI-QB4Uc9CJCyuHCWUbKV1H2Gzq1ql-lxGTwjhmQ");
					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						redirect: 'follow'
					};

					fetch("https://docs.google.com/forms/d/e/1FAIpQLSetemc4WD2TuSX2stJb8dcc0XaV9Pq_2d2pV75fo0Novva-4g/formResponse?entry.279131738="+name+"&entry.549841811="+phone+"&entry.879799738="+email+"&entry.1930197735="+area, requestOptions)
					.then(response => route.push('/contacto/gracias-trabaja-con-nosotros'))
					.then(result => route.push('/contacto/gracias-trabaja-con-nosotros'))
					.catch(error => route.push('/contacto/gracias-trabaja-con-nosotros'));

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
								<Field className="input" name="area" as="select" placeholder="Área a la que desear aplicar">
									<option value="" defaultValue disabled>Área a la que deseas aplicar</option>
									<option value="Ventas">Ventas</option>
									<option value="Tecnología">Tecnología</option>
									<option value="Contabilidad">Contabilidad</option>
									<option value="Finanzas">Finanzas</option>
									<option value="RH">RH</option>
									<option value="Marketing">Marketing</option>
									<option value="Desarrollo de negocios">Desarrollo de negocios</option>
									<option value="Otros">Otros</option>
								</Field>
								{errors.area && touched.area ? ( <div className="help">{errors.area}</div> ) : null}
							</div>
							<div className="control">
								<div className="buttons is-right">
									<button className="button primary" type="submit" onClick={() => {
										gtag('event', 'trabajaNosotros', {
											'TheEventAction': 'form',
										});
										gtag('event', 'conversion', {'send_to': 'AW-10829665062/Wxi-CM2qoZADEKam_qso'});
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