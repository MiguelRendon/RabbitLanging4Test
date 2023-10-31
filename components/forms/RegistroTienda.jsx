import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from "next/router";

const DataUserRegistroTiendaSchema = Yup.object().shape({
	name: Yup.string().required('Por favor ingrese su nombre'),
	phone: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten numeros')
		.min(10, 'El teléfono debe tener solo 10 digitos')
		.max(10, 'El teléfono debe tener solo 10 digitos')
		.required('Por favor ingrese su teléfono'),
	// email: Yup.string().email('Por favor ingrese un correo válido').required('Por favor ingrese su correo electrónico'),
	// direccion: Yup.string().required('Por favor ingrese la dirección de su tienda'),
	calle: Yup.string().required('Por favor ingrese la calle y el numero de su tienda'),
	colonia: Yup.string().required('Por favor ingrese la colonia de su tienda'),
	municipio: Yup.string().required('Por favor ingrese el municipio de su tienda'),
	ciudad: Yup.string().required('Por favor ingrese la ciudad de su tienda'),
	estado: Yup.string().required('Por favor ingrese el estado de su tienda'),
	zipCode: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten numeros')
		.min(5, 'El Código Postal debe tener solo 5 digitos')
		.max(5, 'El Código Postal debe tener solo 5 digitos')
		.required('Por favor ingrese su Código Postal'),
	// giro: Yup.string().required('Por favor ingrese su giro comercial'),
	nameTienda: Yup.string().required('Por favor ingrese el nombre de su tienda')
});

export default function RegistroTienda() {
	const route = useRouter();
	return (
		<div className="form">
			<Formik
				initialValues={{ name: '', phone: '', email: '',calle: '',colonia: '',municipio: '',ciudad: '',estado: '',zipCode: '', giro: '',nameTienda: '' }}
				validationSchema={DataUserRegistroTiendaSchema}
				onSubmit={values => {
					let name = values.name;
					let phone = values.phone;
					let email = values.email;
					let calle = values.calle;
					let colonia = values.colonia;
					let municipio = values.municipio;
					let ciudad = values.ciudad;
					let estado = values.estado;
					let zipCode = values.zipCode;
					let giro = values.giro;
					let nameTienda = values.nameTienda;

					var myHeaders = new Headers();
					myHeaders.append("Cookie", "S=spreadsheet_forms=SeyclLqi4jbF1iX8oBL_SIxgK0f6g_IIPjw6fxfAckE; NID=511=T9-Ju5s11MJU-kb4GlbNZRbz7VxTiQkF6AlfBTHQfF9POjBIRp9WKx47LaOsP9mJDOf1epuZ7WVKwqZdnD-PrKmpbQyAh_gf-x3fvrsks11nzYRc8BGJ-kSC2UPVu8JklZiPI-QB4Uc9CJCyuHCWUbKV1H2Gzq1ql-lxGTwjhmQ");
					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						redirect: 'follow',
					};

					// fetch("https://docs.google.com/forms/d/e/1FAIpQLSe2kqWeyG4SNam9l-vcfmcL5WDGLOkt0u4IrTtCTpIPomx7Eg/formResponse?entry.1851481137="+name+"&entry.1164055726="+phone+"&entry.404812539="+email+"&entry.489054526="+direccion+"&entry.2115188072="+zipCode+"&entry.332899157="+giro+"&entry.1646685877="+nameTienda, requestOptions)
					fetch("https://docs.google.com/forms/d/e/1FAIpQLSdhFyyWe3udtF6mdFAsbTA_EXJoBXIoE-6EBhhrHUlpM0-6KA/formResponse?entry.444534032="+name+"&entry.1618013796="+phone+"&entry.533015958="+email+"&entry.26407051="+calle+"&entry.294038994="+colonia+"&entry.168902087="+municipio+"&entry.33584110="+ciudad+"&entry.1028132853="+estado+"&entry.1135597383="+zipCode+"&entry.812829565="+giro+"&entry.649498815="+nameTienda, requestOptions)
					.then(response => route.push('/contacto/gracias-registra-tu-tienda'))
					.then(result => route.push('/contacto/gracias-registra-tu-tienda'))
					.catch(error => route.push('/contacto/gracias-registra-tu-tienda'));

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
							{/* <div className="control">
								<Field className="input" name="direccion" placeholder="Escribe la dirección de tu tienda" />
								{errors.direccion && touched.direccion ? ( <div className="help">{errors.direccion}</div> ) : null}
							</div> */}
							<p>Dirección</p>
							<div className="control">
								<Field className="input" name="calle" placeholder="Escribe la calle y el numero de tu tienda" />
								{errors.calle && touched.calle ? ( <div className="help">{errors.calle}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="colonia" placeholder="Escribe tu colonia" />
								{errors.colonia && touched.colonia ? ( <div className="help">{errors.colonia}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="municipio" placeholder="Escribe tu alcaldía/municipio" />
								{errors.municipio && touched.municipio ? ( <div className="help">{errors.municipio}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="ciudad" placeholder="Escribe tu ciudad" />
								{errors.ciudad && touched.ciudad ? ( <div className="help">{errors.ciudad}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="estado" placeholder="Escribe tu estado" />
								{errors.estado && touched.estado ? ( <div className="help">{errors.estado}</div> ) : null}
							</div>

							<div className="control">
								<Field className="input" name="zipCode" placeholder="Escribe tu Código Postal" />
								{errors.zipCode && touched.zipCode ? ( <div className="help">{errors.zipCode}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="giro" as="select" placeholder="Selecciona el giro comercial de tu tienda">
									<option value="" defaultValue disabled>Giro comercial de tu tienda</option>
									<option value="Abarrotes">Abarrotes</option>
									<option value="Miscelánea">Miscelánea</option>
									<option value="Ultramarinos">Ultramarinos</option>
									<option value="Cremería">Cremería</option>
									<option value="Dulcería">Dulcería</option>
									<option value="Chiles secos y semillas">Chiles secos y semillas</option>
									<option value="Farmacia">Farmacia</option>
									<option value="Papelería">Papelería</option>
									<option value="Otros">Otros</option>
								</Field>
								{errors.giro && touched.giro ? ( <div className="help">{errors.giro}</div> ) : null}
							</div>
							<div className="control">
								<Field className="input" name="nameTienda" placeholder="Escribe el nombre de tu tienda" />
								{errors.nameTienda && touched.nameTienda ? ( <div className="help">{errors.nameTienda}</div> ) : null}
							</div>
							<div className="control">
								<div className="buttons is-right">
									<button className="button primary" type="submit" onClick={() => {
										gtag('event', 'registroTienda', {
											'TheEventAction': 'form',
										});
										gtag('event', 'conversion', {'send_to': 'AW-10829665062/se-MCN6w848DEKam_qso'});
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