import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from "next/router";

const DataUserAyudaPedidoSchema = Yup.object().shape({
	name: Yup.string().required('Por favor ingrese su nombre'),
	phone: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten numeros')
		.min(10, 'El teléfono debe tener solo 10 digitos')
		.max(10, 'El teléfono debe tener solo 10 digitos')
		.required('Por favor ingrese su teléfono'),
	email: Yup.string().email('Por favor ingrese un correo válido').required('Por favor ingrese su correo electrónico'),
	direccion: Yup.string().required('Por favor ingrese la dirección de su tienda'),
	zipCode: Yup.string().required('Por favor ingrese su Código Postal'),
	ticket: Yup.string().required('Por favor ingrese los datos de su ticket'),
	orden: Yup.string().required('Por favor ingrese los datos de su número de orden'),
	fecha: Yup.string().required('Por favor ingrese la fecha de su orden'),
	ruta: Yup.string().required('Por favor ingrese su ruta'),
	nameTienda: Yup.string().required('Por favor ingrese el nombre de su tienda'),
	codigoTienda: Yup.string().required('Por favor ingrese el código de su tienda')
});

export default function AyudaPedido() {
	const route = useRouter();
	return (
		<div className="form">
			<Formik
				initialValues={{ name: '', phone: '', email: '',direccion: '',zipCode: '', ticket: '',orden: '', fecha: '', ruta: '',nameTienda : '', codigoTienda: '', comentario: '' }}
				validationSchema={DataUserAyudaPedidoSchema}
				onSubmit={values => {
					let name = values.name;
					let phone = values.phone;
					let email = values.email;
					let direccion = values.direccion;
					let zipCode = values.zipCode;
					let ticket = values.ticket;
					let orden = values.orden;
					let fecha = values.fecha;
					let ruta = values.ruta;
					let nameTienda = values.nameTienda;
					let codigoTienda = values.codigoTienda;
					let comentario = values.comentario;

					var myHeaders = new Headers();
					myHeaders.append("Cookie", "S=spreadsheet_forms=SeyclLqi4jbF1iX8oBL_SIxgK0f6g_IIPjw6fxfAckE; NID=511=T9-Ju5s11MJU-kb4GlbNZRbz7VxTiQkF6AlfBTHQfF9POjBIRp9WKx47LaOsP9mJDOf1epuZ7WVKwqZdnD-PrKmpbQyAh_gf-x3fvrsks11nzYRc8BGJ-kSC2UPVu8JklZiPI-QB4Uc9CJCyuHCWUbKV1H2Gzq1ql-lxGTwjhmQ");
					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						redirect: 'follow'
					};

					fetch("https://docs.google.com/forms/d/e/1FAIpQLSdX4pUXGCGQ9_vbBnhO5vMW_FGwHH6xY06lLL32plB6_wa4rw/formResponse?entry.2111103759="+name
						+"&entry.1345330697="+phone
						+"&entry.842314477="+email
						+"&entry.1504115086="+direccion
						+"&entry.1684340822="+zipCode
						+"&entry.971415148="+ticket
						+"&entry.1915389="+orden
						+"&entry.610688384="+fecha
						+"&entry.242881645="+ruta
						+"&entry.704625592="+nameTienda
						+"&entry.1899044584="+codigoTienda
						+"&entry.1741221377="+comentario
					, requestOptions)
					.then(response => route.push('/contacto/gracias-ayuda-con-tu-pedido'))
					.then(result => route.push('/contacto/gracias-ayuda-con-tu-pedido'))
					.catch(error => route.push('/contacto/gracias-ayuda-con-tu-pedido'));

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
								<Field className="input" name="zipCode" placeholder="Escribe tu Código Postal" />
								{errors.zipCode && touched.zipCode ? ( <div className="help">{errors.zipCode}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="nameTienda" placeholder="Escribe el nombre de tu tienda" />
								{errors.nameTienda && touched.nameTienda ? ( <div className="help">{errors.nameTienda}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="codigoTienda" placeholder="Escribe el código de tu tienda" />
								{errors.codigoTienda && touched.codigoTienda ? ( <div className="help">{errors.codigoTienda}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="direccion" placeholder="Escribe la dirección de tu tienda" />
								{errors.direccion && touched.direccion ? ( <div className="help">{errors.direccion}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="ticket" placeholder="Escribe los datos de tu ticket" />
								{errors.ticket && touched.ticket ? ( <div className="help">{errors.ticket}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="orden" placeholder="Escribe el número de orden" />
								{errors.orden && touched.orden ? ( <div className="help">{errors.orden}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="fecha" placeholder="Escribe la fecha de su orden" />
								{errors.fecha && touched.fecha ? ( <div className="help">{errors.fecha}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="ruta" placeholder="Escribe # de ruta de tu Aliado Rabbit®️" />
								{errors.ruta && touched.ruta ? ( <div className="help">{errors.ruta}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="comentario" placeholder="Comentarios" />
							</div>
							<div className="control">
								<div className="buttons is-right">
									<button className="button primary" type="submit" onClick={() => {
										gtag('event', 'ayuda', {
											'TheEventAction': 'form',
										});
										gtag('event', 'conversion', {'send_to': 'AW-10829665062/VBn2CM_NqZADEKam_qso'});
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