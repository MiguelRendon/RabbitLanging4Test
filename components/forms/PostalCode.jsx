import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import cobertura from '../../pages/api/cobertura'
import React, { useState } from 'react';

const CoberturaSchema = Yup.object().shape({
    postalCodeNumb: Yup.string()
        .matches(/^[0-9]+$/, 'Solo se permiten numeros')
        .min(5, 'El código es demasiado corto')
        .max(5, 'El código es demasiado largo')
        .required('Por favor ingrese un Código Postal')
});

const DataUserSchema = Yup.object().shape({
    name: Yup.string().required('Por favor ingrese su nombre'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Solo se permiten numeros')
        .min(10, 'El teléfono debe tener solo 10 digitos')
        .max(10, 'El teléfono debe tener solo 10 digitos')
        .required('Por favor ingrese su teléfono'),
    commerce: Yup.string().required('Por favor ingrese el nombre de su tienda')

});

export default function PostalCodeForm({title, subtitle}) {
    const [zipIsFilled, setZipIsFilled] = useState(false);
    const [zipCode, setZipCode] = useState('');
    const [zipIsValid, setZipIsValid] = useState('');
    const [formIsSubmited, setFormIsSubmited] = useState(false);

    return (
		<>
			<div className="cont-info">
				<h2><strong>{title}</strong></h2>
				{
					!zipIsFilled ? 
					<>
						<p>{subtitle}</p>
						<p>Verifica si tu tienda está en nuestra zona de cobertura, ingresa tu código postal.</p>
					</>
					: ''
				}
			</div>
			<div className="form">
				{ !zipIsFilled ? 
					<Formik
						initialValues={{ postalCodeNumb: '', }}
						validationSchema={CoberturaSchema}
						onSubmit={values => {
							setZipIsFilled(true);
							setZipCode(values.postalCodeNumb);
							setZipIsValid(cobertura.validate(parseInt(values.postalCodeNumb)))
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div className="field">
									<div className="control">
										<Field className="input" name="postalCodeNumb" placeholder="Escribe tu código postal" />
										{errors.postalCodeNumb && touched.postalCodeNumb ? ( <div className="help">{errors.postalCodeNumb}</div> ) : null}
									</div>
									<div className="control">
										<div className="buttons is-right">
											<button className="button primary" onClick={() => {
												gtag('event', 'cobertura', {
													'TheEventAction': 'click',
												});
												gtag('event', 'conversion', {'send_to': 'AW-10829665062/K81nCKGZoZADEKam_qso'});
											}} type="submit">Conoce nuestra cobertura</button>
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
					: '' 
				}
				{ zipIsFilled && !formIsSubmited ? 
					<Formik
						initialValues={{ name: '', phone: '', commerce: '' }}
						validationSchema={DataUserSchema}
						onSubmit={values => {

							let name = values.name;
							let phone = values.phone;
							let commerce = values.commerce;
							let cobertura = zipIsValid ? 'Si' : 'No';

							var myHeaders = new Headers();
							myHeaders.append("Cookie", "S=spreadsheet_forms=SeyclLqi4jbF1iX8oBL_SIxgK0f6g_IIPjw6fxfAckE; NID=511=T9-Ju5s11MJU-kb4GlbNZRbz7VxTiQkF6AlfBTHQfF9POjBIRp9WKx47LaOsP9mJDOf1epuZ7WVKwqZdnD-PrKmpbQyAh_gf-x3fvrsks11nzYRc8BGJ-kSC2UPVu8JklZiPI-QB4Uc9CJCyuHCWUbKV1H2Gzq1ql-lxGTwjhmQ");
							var requestOptions = {
								method: 'POST',
								headers: myHeaders,
								redirect: 'follow'
							};

							fetch("https://docs.google.com/forms/d/e/1FAIpQLSc_BVr3GKerWPTjtLztexyquGAg8CK8GbBJ65t2uVxsBZO_bg/formResponse?entry.901937407="+zipCode+"&entry.468833970="+cobertura+"&entry.480574049="+name+"&entry.2129377707="+phone+"&entry.1648696830="+commerce, requestOptions)
							.then(response => setFormIsSubmited(true) )
							.then(result => setFormIsSubmited(true) )
							.catch(error => setFormIsSubmited(true) );
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<br />
								<h4><strong>{ zipIsValid ? 'Felicidades, registra tus datos y un Aliado Rabbit® visitará tu tienda en los próximos días.' : 'Lo sentimos, estamos trabajando para llegar muy pronto a tu tienda.' }</strong></h4>
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
										<Field className="input" name="commerce" placeholder="Escribe el nombre de tu tienda" />
										{errors.commerce && touched.commerce ? ( <div className="help">{errors.commerce}</div> ) : null}
									</div>
									<div className="control">
										<div className="buttons is-right">
											<button id="coverageFormGtag"  className="button primary" type="submit">¡Quiero que me contacten!</button>
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				: '' }

				{ formIsSubmited ? 
					<h4 className="has-text-left"><strong> ¡Nos pondremos en contacto muy pronto! </strong></h4>
				: ''}
			</div>
		</>
    )
}