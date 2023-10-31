import Layout from '../components/Layout'
import Breadcrumbs from 'nextjs-breadcrumbs'
import Link from 'next/link'
import { useState } from "react";

export default function LegalesTerminos() {

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<Layout
			title="Términos y Condiciones | Rabbit®"
			description="Entra y conoce los Términos y Condiciones que aplican por el acceso al sitio de Rabbit®, así como en el uso de la App Rabbit®."
			keyWords="Rabbit, Rabbit México, Rabbit términos y condiciones"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_terminos-condiciones.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<section className="page-legals">
				<div className="container">
					<nav className="breadcrumb has-succeeds-separator">
						<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
					</nav>
					<div className="cont-info has-text-centered">
						<h1><strong>Términos y condiciones</strong></h1>
					</div>
					<div className="form-tabs">
						<div className="tabs is-large is-centered">
							<ul>
								<li onClick={() => toggleTab(1)} className={toggleState === 1 ? "is-active" : ""}><a>Abastecimiento presencial</a></li>
								<li onClick={() => toggleTab(2)} className={toggleState === 2 ? "is-active" : ""}><a>App Rabbit®</a></li>
							</ul>
						</div>
					</div>
					<div className="content-tabs">
						<div className={`content box has-text-justify ${toggleState === 1 ? "is-active" : ""}`}>
							<p>Este documento describe los términos y condiciones generales (en adelante los &quot;T&C&quot;) de la relación comercial entablada entre RABBIT IMPULSORA DE MERCADOS, S.A. DE C.V. con domicilio en Av. Ricardo Margain Zozaya No. 440, Interior 402, Col. Valle del Campestre, San Pedro Garza García, C.P. 66265, Nuevo León, México (en lo sucesivo, RABBIT”) y la persona/entidad que genere un pedido (en lo sucesivo, el “CLIENTE”) de conformidad con lo estipulado en el Apartado I. de los presentes T&C (OBJETO).</p>
							<p>Cualquier CLIENTE que no acepte los presentes T&C, deberá abstenerse de realizar cualquier pedido respecto de los PRODUCTOS (según se define más adelante).</p>
							
							<h4>I. OBJETO</h4>
							<p>RABBIT a través de su personal de preventa (en lo sucesivo “PERSONAL DE RABBIT”) podrá acudir una vez por semana (de lunes a sábado en un horario de 7:30 am a 8:30 pm), al domicilio de la tienda del CLIENTE (cuya dirección ha quedado debidamente descrita en el TICKET DE COMPRA –según se define más adelante-), para efectos de ofrecer al CLIENTE los productos que se describen en el catálogo de productos (en lo sucesivo, el “CATÁLOGO DE PRODUCTOS”) que el PERSONAL DE RABBIT mostrará al CLIENTE de manera digital a través de una tablet (en lo sucesivo, los “PRODUCTOS”) y respecto de los cuales el CLIENTE podrá realizar pedidos de conformidad con lo estipulado en el “Procedimiento de Levantamiento de Pedido” que se señala en el Apartado II de los presentes T&C, para su posterior entrega por parte de RABBIT. </p>
							<p>Los precios de los PRODUCTOS se indicarán en el CATÁLOGO DE PRODUCTOS e incluirán el Impuesto al Valor Agregado (IVA).</p>
							
							<h4>II. PROCEDIMIENTO DE LEVANTAMIENTO DE PEDIDO</h4>
							<p>El procedimiento para el levantamiento de un pedido por parte delCLIENTE o en su caso, por parte del encargado de la tienda del CLIENTE (según se señala más adelante) será el siguiente (en lo sucesivo, el “PEDIDO”):</p>
							<ol>
								<li><p>El CLIENTE o en su caso, el encargado de la tienda del CLIENTE deberá indicar al PERSONAL DE RABBIT: (i) los PRODUCTOS que desea adquirir del CATÁLOGO DE PRODUCTOS y (ii) La cantidad que desea adquirir de cada PRODUCTO seleccionado del citado catálogo.</p></li>
								<li><p>El PERSONAL DE RABBIT procederá a levantar el PEDIDO mediante el sistema incorporado a la tablet referida en el Apartado I. anterior y generará un ticket de compra el cual será impreso y entregado al CLIENTE o en su caso, al encargado de la tienda del CLIENTE (en lo sucesivo, el “TICKET DE COMPRA”).</p></li>
								<li><p>El TICKET DE COMPRA contendrá de manera enunciativa más no limitativa la siguiente información: (i) Denominación social, teléfono, correo electrónico, RFC y dirección de RABBIT; (ii) La información de ruta: fecha, día de visita, ruta, número de orden, hora de impresión; (iii) Datos del CLIENTE: código de tienda, nombre de negocio, dirección; iv) Preventa: código de producto, descripción, unidad de medida, cantidad, valor unitario, precio sugerido, cantidad total a pagar y v) Cualesquiera otra información que RABBIT considere pertinente incorporar al TICKET DE COMPRA.</p></li>
							</ol>
							<p>Los PEDIDOS únicamente podrán ser realizados por el CLIENTE o en su caso, por el encargado de la tienda del CLIENTE.</p>
							
							<h4>III. ENTREGA DEL PEDIDO</h4>
							<p>Los PEDIDOS generados a través de un TICKET DE COMPRA serán entregados al CLIENTE y/o al encargado de la tienda del CLIENTE en la tienda del CLIENTE (cuya dirección se describa en el TICKET DE COMPRA).</p>
							<p>El plazo de entrega de cada PEDIDO será de 24 (veinticuatro) horas, contadas a partir la fecha y hora de impresión señalada en el TICKET DE COMPRA respectivo. Así mismo, los días de entrega de los PEDIDOS generados a través de un TICKET DE COMPRA, serán de lunes a sábado de 7:30 am a 8:30 pm. No se le cobrará al CLIENTE ningún gasto y/o costo por la entrega de los PRODUCTOS en la tienda del CLIENTE.</p>
							<p>EL CLIENTE y/o el encargado de la TIENDA del CLIENTE deberá revisar que los PRODUCTOS entregados, así como que la cantidad de los mismos, correspondan al PEDIDO realizado por él mismo a través del respectivo TICKET DE COMPRA. Cualquier observación y/o reclamación por parte del CLIENTE y/o el encargado de la TIENDA del CLIENTE, respecto de los conceptos antes señalados, deberá ser realizado por el CLIENTE y/o el encargado de la tienda del CLIENTE al PERSONAL DE RABBIT en el momento de entrega de los PRODUCTOS, caso contrario se entenderá que los PRODUCTOS son aceptados en su totalidad por el CLIENTE y/o el encargado de la tienda del CLIENTE y, por lo tanto, el CLIENTE y/o el encargado de la tienda del CLIENTE no podrá (i) solicitar la devolución y/o cambio de los PRODUCTOS y/o (ii) solicitar un reembolso respecto de los PRODUCTOS.</p>
							<p>Una vez entregados los PRODUCTOS al CLIENTE y/o al encargado de la tienda del CLIENTE, EL CLIENTE correrá con el riesgo de pérdida de los PRODUCTOS, en virtud de lo anterior, las pérdidas, daños o menoscabos que sobrevinieren a los PRODUCTOS entregados, en los términos señalados en el párrafo anterior, serán por cuenta de este último.</p>
							
							<h4>IV. PAGO</h4>
							<p>El CLIENTE deberá realizar el pago del PEDIDO respectivo (cuyo monto se señale en el TICKET DE COMPRA del PEDIDO correspondiente), contra entrega de dicho PEDIDO y de manera inmediata. Así mismo, el pago antes señalado deberá ser realizado por el CLIENTE en efectivo y a la persona que le entregue el PEDIDO, la cual deberá identificarse en todo momento como PERSONAL DE RABBIT.</p>
							
							<h4>V. FUERZA MAYOR</h4>
							<p>No se considerará que la parte afectada por los hechos de fuerza mayor o caso fortuito ha incumplido con las obligaciones previstas en los presentes Términos y Condiciones, ni será responsable ante la otra, por cualquier retraso en el cumplimiento de cualquiera de sus obligaciones en la medida en que la demora o incumplimiento se deban a hechos de fuerza mayor o caso fortuito que hayan sido debidamente notificados a la otra Parte. Se entienden como causas de fuerza mayor aquellos hechos del hombre que no se hayan podido prever o que previniéndose, no se hayan podido resistir, así mismo, se entienden por caso fortuito aquellos acontecimientos de la naturaleza que de igual manera no se hayan podido prever o que previniéndose, no se hayan podido resistir. De manera enunciativa, más no limitativa, se señalan las siguientes causas de fuerza mayor y caso fortuito: terremotos, inundaciones, desastres naturales, pandemias, incendios, terrorismo, guerra. En caso de fuerza mayor o caso fortuito, la parte afectada notificará a la otra parte dentro de las 24 horas siguientes de ocurrido dicho caso de fuerza mayor o caso fortuito, sobre la naturaleza del hecho en cuestión y el efecto que tiene en su capacidad de cumplir con sus obligaciones. La ocurrencia de caso fortuito o fuerza mayor deberá ser probada por la parte que la alega.</p>
							
							<h4>VI. DATOS PERSONALES</h4>
							<p>De conformidad con lo estipulado en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, RABBIT se obliga a respetar los derechos de privacidad del CLIENTE, así como los datos personales recibidos del mismo por virtud de su relación comercial, por lo que RABBIT se compromete a tomar todas las medidas y precauciones necesarias para mantener la información del CLIENTE de manera privada y segura, utilizándola únicamente para el cumplimiento de las finalidades señaladas en su Aviso de Privacidad. El texto completo del Aviso de Privacidad de RABBIT puede ser consultado por el CLIENTE en la siguiente página web: <Link href="/aviso-de-privacidad"><a>https://www.rabbitmx.com/aviso-de-privacidad</a></Link> (en lo sucesivo, “Aviso de Privacidad”). RABBIT puede llegar a realizar modificaciones a su Aviso de Privacidad. Cualquier actualización al Aviso de Privacidad estará disponible en la siguiente página web: <Link href="/aviso-de-privacidad"><a>https://www.rabbitmx.com/aviso-de-privacidad</a></Link>, por lo que es obligación del CLIENTE revisar continuamente la página antes señaladas para estar al tanto de las actualizaciones del Aviso de Privacidad.</p>

							<h4>VII. PROPIEDAD INTELECTUAL</h4>
							<p>El CLIENTE o cualquier persona relacionada con el mismo, no tendrá derechos respecto de ningún nombre comercial, marcas, dominios de internet, secretos industriales y/o cualesquiera derechos de propiedad intelectual y/o industrial de RABBIT, sus afiliadas y/o subsidiarias. Así mismo, el CLIENTE se compromete a no registrar ningún elemento de propiedad intelectual y/o industrial de RABBIT, sus subsidiarias y/o filiales o similares a estos. El CLIENTE resarcirá a RABBIT de todos los costos, incluyendo los honorarios y gastos derivados de una acción legal, así como los daños y perjuicios que sufra RABBIT, sus subsidiarias y/o afiliadas, como resultado del incumplimiento por parte de RABBIT de la presente cláusula.</p>

							<h4>VIII. RESCISIÓN Y TERMINACIÓN RELACIÓN COMERCIAL</h4>
							<p>La relación comercial entre RABBIT y el CLIENTE se terminará de manera automática, sin necesidad de declaración judicial, sin responsabilidad y/o penalización alguna para RABBIT, si se actualizan alguno de los siguientes supuestos: (i) Si el CLIENTE es declarado en quiebra o insolvencia; (ii) Si el CLIENTE incumpliera con las obligaciones de pago establecidas en los presentes T&C (iii) Por el incumplimiento por parte del CLIENTE de cualesquiera de los términos y condiciones señalados en este documento. En su caso, RABBIT podrá solicitar el pago de los daños y perjuicios que resulten aplicables, así como requerir al CLIENTE por los pagos que se encuentren pendientes con motivo de estos T&C.</p>
							<p>Así mismo, si el CLIENTE y/o el encargado de la tienda del CLIENTE no realizare PEDIDOS dentro de un plazo continúo de 6 (seis) meses, contados a partir de la fecha en que el CLIENTE y/o el encargado de la tienda del CLIENTE haya realizado el último PEDIDO, se entenderá que la relación comercial entre RABBIT y el CLIENTE ha terminado de manera automática.</p>
							<p>La terminación de la relación comercial entre RABBIT y el CLIENTE por cualquier razón no afectará: (i) Los derechos acumulados de cualquier parte, sus responsabilidades, incluyendo pagos pendientes a la fecha de terminación y (ii) La entrada en vigor o que continúe en vigor cualquier disposición de los presentes T&C que expresamente o por implicación inicie o continúe su vigencia a la terminación o con posterioridad.</p>

							<h4>IX. MODIFICACIÓN</h4>
							<p>RABBIT se reserva la facultad de modificar en cualquier momento los presentes términos y condiciones, por lo que el CLIENTE quedará sujeto a los presentes T&C, así como a sus ulteriores modificaciones, sin perjuicio de la aplicación de la legislación correspondiente. Dada la relevancia de lo anterior, se recomienda al CLIENTE revisar de manera periódica los presentes T&C, así como las modificaciones que se pudieran realizar a los mismos, en el siguiente link: <Link href="/terminos-y-condiciones"><a>https://www.rabbitmx.com/terms-and-conditions-traditional.</a></Link></p>

							<h4>X. DATOS DE CONTACTO DE RABBIT</h4>
							<p>Número telefónico: 5579 08 7880 con un horario de atención de lunes a viernes de 8:30 am a 5:30 pm.</p>
							<p>Correo electrónico: <a href="mailto:contacto@rabbitmx.com">contacto@rabbitmx.com</a></p>
							<p>Dirección: Av. Ricardo Margain Zozaya No. 440, Interior 402, Col. Valle del Campestre, San Pedro Garza García, C.P. 66265, Nuevo León, México.</p>

							<h4>XI. LEGISLACIÓN Y JURISDICCIÓN APLICABLE</h4>
							<p>La relación comercial entre RABBIT y el CLIENTE se regirá por la legislación aplicable en la Ciudad de México. De surgir cualquier controversia en relación a la interpretación y/o a la aplicación de los presentes T&C, las partes se someterán a la jurisdicción de los Tribunales de la Ciudad de México, o bien en la Ciudad del domicilio de la tienda del CLIENTE, a elección de RABBIT, renunciando expresamente a cualquier otro fuero que por razón de sus domicilios presentes o futuros, o que por cualquier otra causa pudiere corresponderles.</p>
						</div>
						<div className={`content box has-text-justify ${toggleState === 2 ? "is-active" : ""}`}>
							<h4>RABBIT IMPULSORA DE MERCADOS, S.A. DE C.V.</h4>
							<p><strong>1. Términos y Condiciones Generales para los Usuarios Tradicionales de Rabbit</strong></p>
							<p>Este documento describe los términos y condiciones para los usuarios tradicionales (en adelante los “T&C Tradicionales”) de la relación comercial entablada entre RABBIT IMPULSORA DE MERCADOS, S.A. DE C.V. con domicilio en Av. Ricardo Margain Zozaya No. 440, Interior 402, Col. Valle del Campestre, San Pedro Garza García, C.P. 66265, Nuevo León, México (en lo sucesivo, RABBIT”) y la persona/entidad que genere un pedido (en lo sucesivo, el “CLIENTE”) de conformidad con lo estipulado en el Apartado I. de los presentes T&C Tradicionales (OBJETO).</p>
							<p>Cualquier CLIENTE que no acepte los presentes T&C Tradicionales, deberá abstenerse de realizar cualquier pedido respecto de los PRODUCTOS (según se define más adelante).</p>

							<h4>I. OBJETO</h4>
							<p>RABBIT a través de su personal de preventa (en lo sucesivo “PERSONAL DE RABBIT”) podrá acudir una vez por semana (de lunes a sábado en un horario de 7:30 am a 8:30 pm), al domicilio de la tienda del CLIENTE (cuya dirección ha quedado debidamente descrita en el TICKET DE COMPRA –según se define más adelante-), para efectos de ofrecer al CLIENTE los productos que se describen en el catálogo de productos (en lo sucesivo, el “CATÁLOGO DE PRODUCTOS”) que el PERSONAL DE RABBIT mostrará al CLIENTE de manera digital a través de una tablet (en lo sucesivo, los “PRODUCTOS”) y respecto de los cuales el CLIENTE podrá realizar pedidos de conformidad con lo estipulado en el “Procedimiento de Levantamiento de Pedido” que se señala en el Apartado II de los presentes T&C Tradicionales, para su posterior entrega por parte de RABBIT.</p>
							<p>Los precios de los PRODUCTOS se indicarán en el CATÁLOGO DE PRODUCTOS e incluirán el Impuesto al Valor Agregado (IVA).</p>

							<h4>II. PROCEDIMIENTO DE LEVANTAMIENTO DE PEDIDO</h4>
							<p>El procedimiento para el levantamiento de un pedido por parte del CLIENTE o en su caso, por parte del encargado de la tienda del CLIENTE (según se señala más adelante) será el siguiente (en lo sucesivo, el “PEDIDO”):</p>
							<ol>
								<li>El CLIENTE o en su caso, el encargado de la tienda del CLIENTE deberá indicar al PERSONAL DE RABBIT: (i) los PRODUCTOS que desea adquirir del CATÁLOGO DE PRODUCTOS y (ii) la cantidad que desea adquirir de cada PRODUCTO seleccionado del citado catálogo.</li>
								<li>El PERSONAL DE RABBIT procederá a levantar el PEDIDO mediante el sistema incorporado a la tablet referida en el Apartado I. anterior y generará un ticket de compra el cual será impreso y entregado al CLIENTE o en su caso, al encargado de la tienda del CLIENTE (en lo sucesivo, el “TICKET DE COMPRA”).</li>
								<li>El TICKET DE COMPRA contendrá de manera enunciativa más no limitativa la siguiente información: (i) Denominación social, teléfono, correo electrónico, RFC y dirección de RABBIT; (ii) La información de ruta: fecha, día de visita, ruta, número de orden, hora de impresión; (iii) Datos del CLIENTE: código de tienda, nombre de negocio, dirección; iv) Preventa: código de producto, descripción, unidad de medida, cantidad, valor unitario, precio sugerido, cantidad total a pagar y v) Cualesquiera otra información que RABBIT considere pertinente incorporar al TICKET DE COMPRA.</li>
							</ol>
							<p>Los PEDIDOS únicamente podrán ser realizados por el CLIENTE o en su caso, por el encargado de la tienda del CLIENTE.</p>
							<h4>III. ENTREGA DEL PEDIDO</h4>
							<p>Los PEDIDOS generados a través de un TICKET DE COMPRA serán entregados al CLIENTE y/o al encargado de la tienda del CLIENTE en la tienda del CLIENTE (cuya dirección se describa en el TICKET DE COMPRA).</p>
							<p>El plazo de entrega de cada PEDIDO será de 24 (veinticuatro) horas, contadas a partir la fecha y hora de impresión señalada en el TICKET DE COMPRA respectivo. Así mismo, los días de entrega de los PEDIDOS generados a través de un TICKET DE COMPRA, serán de lunes a sábado de 7:30 am a 8:30 pm. No se le cobrará al CLIENTE ningún gasto y/o costo por la entrega de los PRODUCTOS en la tienda del CLIENTE.</p>
							<p>EL CLIENTE y/o el encargado de la TIENDA del CLIENTE deberá revisar que los PRODUCTOS entregados, así como que la cantidad de los mismos, correspondan al PEDIDO realizado por él mismo a través del respectivo TICKET DE COMPRA. Cualquier observación y/o reclamación por parte del CLIENTE y/o el encargado de la TIENDA del CLIENTE, respecto de los conceptos antes señalados, deberá ser realizado por el CLIENTE y/o el encargado de la tienda del CLIENTE al PERSONAL DE RABBIT en el momento de entrega de los PRODUCTOS, caso contrario se entenderá que los PRODUCTOS son aceptados en su totalidad por el CLIENTE y/o el encargado de la tienda del CLIENTE y, por lo tanto, el CLIENTE y/o el encargado de la tienda del CLIENTE no podrá (i) solicitar la devolución y/o cambio de los PRODUCTOS y/o (ii) solicitar un reembolso respecto de los PRODUCTOS.</p>
							<p>Una vez entregados los PRODUCTOS al CLIENTE y/o al encargado de la tienda del CLIENTE, EL CLIENTE correrá con el riesgo de pérdida de los PRODUCTOS, en virtud de lo anterior, las pérdidas, daños o menoscabos que sobrevinieren a los PRODUCTOS entregados, en los términos señalados en el párrafo anterior, serán por cuenta de este último.</p>
							<h4>IV. PAGO</h4>
							<p>El CLIENTE deberá realizar el pago del PEDIDO respectivo (cuyo monto se señale en el TICKET DE COMPRA del PEDIDO correspondiente), contra entrega de dicho PEDIDO y de manera inmediata. Así mismo, el pago antes señalado deberá ser realizado por el CLIENTE en efectivo y a la persona que le entregue el PEDIDO, la cual deberá identificarse en todo momento como PERSONAL DE RABBIT.</p>
							<h4>V. FUERZA MAYOR</h4>
							<p>No se considerará que la parte afectada por los hechos de fuerza mayor o caso fortuito ha incumplido con las obligaciones previstas en los presentes Términos y Condiciones, ni será responsable ante la otra, por cualquier retraso en el cumplimiento de cualquiera de sus obligaciones en la medida en que la demora o incumplimiento se deban a hechos de fuerza mayor o caso fortuito que hayan sido debidamente notificados a la otra Parte. Se entienden como causas de fuerza mayor aquellos hechos del hombre que no se hayan podido prever o que previniéndose, no se hayan podido resistir, así mismo, se entienden por caso fortuito aquellos acontecimientos de la naturaleza que de igual manera no se hayan podido prever o que previniéndose, no se hayan podido resistir. De manera enunciativa, más no limitativa, se señalan las siguientes causas de fuerza mayor y caso fortuito: terremotos, inundaciones, desastres naturales, pandemias, incendios, terrorismo, guerra. En caso de fuerza mayor o caso fortuito, la parte afectada notificará a la otra parte dentro de las 24 horas siguientes de ocurrido dicho caso de fuerza mayor o caso fortuito, sobre la naturaleza del hecho en cuestión y el efecto que tiene en su capacidad de cumplir con sus obligaciones. La ocurrencia de caso fortuito o fuerza mayor deberá ser probada por la parte que la alega.</p>
							<h4>VI. DATOS PERSONALES</h4>
							<p>De conformidad con lo estipulado en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, RABBIT se obliga a respetar los derechos de privacidad del CLIENTE, así como los datos personales recibidos del mismo por virtud de su relación comercial, por lo que RABBIT se compromete a tomar todas las medidas y precauciones necesarias para mantener la información del CLIENTE de manera privada y segura, utilizándola únicamente para el cumplimiento de las finalidades señaladas en su Aviso de Privacidad. El texto completo del Aviso de Privacidad de RABBIT puede ser consultado por el CLIENTE en la siguiente página web: <Link href='https://rabbitmx.com/aviso-de-privacidad'><a>https://rabbitmx.com/aviso-de-privacidad</a></Link> (en lo sucesivo, “Aviso de Privacidad”). RABBIT puede llegar a realizar modificaciones a su Aviso de Privacidad. Cualquier actualización al Aviso de Privacidad estará disponible en la siguiente página web: <Link href='https://rabbitmx.com/aviso-de-privacidad'><a>https://rabbitmx.com/aviso-de-privacidad</a></Link> , por lo que es obligación del CLIENTE revisar continuamente la página antes señaladas para estar al tanto de las actualizaciones del Aviso de Privacidad.</p>
							<h4>VII. PROPIEDAD INTELECTUAL</h4>
							<p>El CLIENTE o cualquier persona relacionada con el mismo, no tendrá derechos respecto de ningún nombre comercial, marcas, dominios de internet, secretos industriales y/o cualesquiera derechos de propiedad intelectual y/o industrial de RABBIT, sus afiliadas y/o subsidiarias. Así mismo, el CLIENTE se compromete a no registrar ningún elemento de propiedad intelectual y/o industrial de RABBIT, sus subsidiarias y/o filiales o similares a estos. El CLIENTE resarcirá a RABBIT de todos los costos, incluyendo los honorarios y gastos derivados de una acción legal, así como los daños y perjuicios que sufra RABBIT, sus subsidiarias y/o afiliadas, como resultado del incumplimiento por parte de RABBIT de la presente cláusula.</p>
							<h4>VIII. RESCISIÓN Y TERMINACIÓN RELACIÓN COMERCIAL</h4>
							<p>La relación comercial entre RABBIT y el CLIENTE se terminará de manera automática, sin necesidad de declaración judicial, sin responsabilidad y/o penalización alguna para RABBIT, si se actualizan alguno de los siguientes supuestos: (i) Si el CLIENTE es declarado en quiebra o insolvencia; (ii) Si el CLIENTE incumpliera con las obligaciones de pago establecidas en los presentes T&C Tradicionales (iii) Por el incumplimiento por parte del CLIENTE de cualesquiera de los términos y condiciones señalados en este documento. En su caso, RABBIT podrá solicitar el pago de los daños y perjuicios que resulten aplicables, así como requerir al CLIENTE por los pagos que se encuentren pendientes con motivo de estos T&C Tradicionales.</p>
							<p>Así mismo, si el CLIENTE y/o el encargado de la tienda del CLIENTE no realizare PEDIDOS dentro de un plazo continúo de 6 (seis) meses, contados a partir de la fecha en que el CLIENTE y/o el encargado de la tienda del CLIENTE haya realizado el último PEDIDO, se entenderá que la relación comercial entre RABBIT y el CLIENTE ha terminado de manera automática.</p>
							<p>La terminación de la relación comercial entre RABBIT y el CLIENTE por cualquier razón no afectará: (i) Los derechos acumulados de cualquier parte, sus responsabilidades, incluyendo pagos pendientes a la fecha de terminación y (ii) La entrada en vigor o que continúe en vigor cualquier disposición de los presentes T&C Tradicionales que expresamente o por implicación inicie o continúe su vigencia a la terminación o con posterioridad.</p>
							<h4>IX. MODIFICACIÓN</h4>
							<p>RABBIT se reserva la facultad de modificar en cualquier momento los presentes términos y condiciones, por lo que el CLIENTE quedará sujeto a los presentes T&C Tradicionales, así como a sus ulteriores modificaciones, sin perjuicio de la aplicación de la legislación correspondiente. Dada la relevancia de lo anterior, se recomienda al CLIENTE revisar de manera periódica los presentes T&C Tradicionales, así como las modificaciones que se pudieran realizar a los mismos, en el siguiente link: <Link href='https://rabbitmx.com/terminos-y-condiciones'><a>https://rabbitmx.com/terminos-y-condiciones</a></Link> </p>
							<h4>X. DATOS DE CONTACTO DE RABBIT</h4>
							<p>Número telefónico: 5579 08 7880 con un horario de atención de lunes a viernes de 8:30 am a 5:30 pm.</p>
							<p>Correo electrónico: <a href="emailto:contacto@rabbitmx.com">contacto@rabbitmx.com</a></p>
							<p>Dirección: Av. Ricardo Margain Zozaya No. 440, Interior 402, Col. Valle del Campestre, San Pedro Garza García, C.P. 66265, Nuevo León, México.</p>
							<h4>XI. LEGISLACIÓN Y JURISDICCIÓN APLICABLE</h4>
							<p>La relación comercial entre RABBIT y el CLIENTE se regirá por la legislación aplicable en la Ciudad de México. De surgir cualquier controversia en relación a la interpretación y/o a la aplicación de los presentes T&C Tradicionales, las partes se someterán a la jurisdicción de los Tribunales de la Ciudad de México, o bien en la Ciudad del domicilio de la tienda del CLIENTE, a elección de RABBIT, renunciando expresamente a cualquier otro fuero que por razón de sus domicilios presentes o futuros, o que por cualquier otra causa pudiere corresponderles.</p>

							<h4><strong>2. Términos y Condiciones Generales para los Usuarios de la Aplicación de Rabbit</strong></h4>
							<p>Este documento describe los Términos y Condiciones Generales para los usuarios de la App Rabbit (según dicho término se define más adelante) (en adelante “T&C App”) aplicables al uso de los contenidos y servicios ofrecidos a través de la aplicación denominada “Rabbit” (en adelante, la “App Rabbit”), de la cual es titular o licenciatario RABBIT IMPULSORA DE MERCADOS, S.A. DE C.V. (en adelante, “Rabbit”) con domicilio en Av. Ricardo Margain Zozaya No. 440, Interior 402, Colonia Valle del Campestre, San Pedro Garza García, C.P.  66265, Nuevo León, Mexico y con Registro Federal de Contribuyentes RIM201117I94.</p>
							<p>Lea atentamente estos T&C App antes de acceder o utilizar la App Rabbit. Al acceder o utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma, usted acepta que está obligado a cumplir estos T&C App así como a las políticas y principios incorporados en el presente documento en su totalidad.  Cualquier persona que no acepte estos T&C App, deberá abstenerse de utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma. </p>
							<p>Rabbit se reserva el derecho de modificar y/o actualizar los T&C App en cualquier momento, en el entendido que toda modificación y/o actualización a los mismos, se le dará a conocer en la sección de Términos y Condiciones de nuestro sitio web: <Link href='https://rabbitmx.com/terminos-y-condiciones'><a>https://rabbitmx.com/terminos-y-condiciones</a></Link> , por lo que le sugerimos revisar periódicamente esta sección. Todas las modificaciones y/o actualizaciones surtirán efectos en el momento en que sean publicadas en el sitio web antes señalado. </p>
							<p>Tenga en cuenta que estos T&C App constituyen un acuerdo legal vinculante entre usted y Rabbit que describe sus derechos legales, obligaciones y recursos derivados de su uso de la App Rabbit (el &quot;Contrato&quot;). Usted acepta que es responsable del uso que haga de la App Rabbit y de las consecuencias que se deriven del mismo. Sólo podrá utilizar la App Rabbit si cumple con estos T&C App y con todas las leyes, normas y reglamentos locales, estatales, nacionales e internacionales aplicables. Si no está de acuerdo con estos T&C App, no puede utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma y no está autorizado a acceder a ellos.</p>

							<h4><strong>1. Objeto</strong></h4>
							<p>El objeto de los presentes T&C App es regular el acceso y uso de la App Rabbit, entendiéndose por lo anterior, cualquier contenido y/o servicios que se ofrezcan en la App Rabbit a las personas que cuentan con presencia dentro del canal tradicional, incluyendo sin limitar, expendio, estanquillo, tienda de abarrotes, tienda detallista, tienda de víveres, “changarro”, minisúper, almacén, farmacias, cremerías, papelerías, kioscos, tortillerías, depósitos, fruterías, o cualquier otro punto de venta minorista ubicado dentro de las República Mexicana (en adelante, la “Tienda”) y que se registran en la App Rabbit (en adelante, el “Usuario” o los “Usuarios”). </p>
							<p>Rabbit se reserva el derecho de modificar y/o actualizar en cualquier momento y sin previo aviso, la presentación, contenidos, funcionalidad, servicios y configuración que pudiera estar contenida en la App Rabbit; en ese sentido el Usuario reconoce y acepta que Rabbit en cualquier momento podrá interrumpir, desactivar o cancelar cualesquiera de los elementos que conforman la App Rabbit y/o el acceso a la misma. </p>
							<p>El registro y uso de la App Rabbit por parte del Usuario no generará ninguna contraprestación a ser pagada por el mismo. No obstante lo anterior, el Usuario deberá pagar el costo de la conexión a internet al proveedor de este servicio que aquél hubiere contratado para tales efectos. </p>
							<p>El Usuario puede utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma sólo si tiene capacidad suficiente para celebrar un contrato vinculante con Rabbit y no es una persona impedida de recibir servicios bajo las leyes de México u otras jurisdicciones aplicables. La App Rabbit y/o los servicios que sean adquiridos mediante las misma, únicamente son ofrecidos y puestos a disposición de los Usuarios que cuentan con mayoría de edad (18 años de edad en adelante) y residen en México. Al acceder o utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma, usted declara y garantiza que cumple con los requisitos de elegibilidad antes mencionados. Si usted acepta estos T&C App y utiliza los servicios ofrecidos por la misma en nombre de una empresa, organización, gobierno u otra entidad legal, usted declara y garantiza que está autorizado a hacerlo y que acepta, en nombre de la parte que representa, estos T&C App. </p>
							<p> Se hace del conocimiento del Usuario que Rabbit podrá administrar o gestionar la App Rabbit de manera directa o a través de un tercero, lo cual no modifica en ningún sentido lo establecido en los presentes T&C App. </p>
							<p>Es responsabilidad del Usuario utilizar la App Rabbit de acuerdo a la forma en que fue diseñada; en ese sentido, queda prohibida la utilización de cualquier software que automatice la interacción o descarga de los contenidos y/o servicios proporcionados a través de la App Rabbit. Además, el Usuario se compromete a utilizar la información, contenidos y/o servicios ofrecidos a través de la App Rabbit de manera lícita, sin contravenir lo dispuesto en los presentes T&C App, la moral y/o el orden público y se abstendrá de realizar cualquier acto que pueda suponer una afectación a los derechos de terceros, o perjudique de algún modo el funcionamiento del App Rabbit.  Aunado a lo anterior, al utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma, usted declara, garantiza y acepta:</p>
							<ol type='a'>
								<li>Sólo utilizará la App Rabbit para fines lícitos conforme a la legislación aplicable y vigente y no utilizará la misma para enviar, almacenar o distribuir cualquier material ilegal o para fines fraudulentos;</li>
								<li>No utilizará la App Rabbit para causar molestias, fastidiar, incomodar o de cualquier forma que intimide, acose, intimide, difame o envíe spam a otros;</li>
								<li>No perjudicará el correcto funcionamiento de la App Rabbit o de cualquier red que se utilice para apoyar o acceder a la App Rabbit y/o los sevicios que se ofrecen a través de la misma;</li>
								<li>No intentará dañar la App Rabbit de ninguna manera;</li>
								<li>No utilizará la App Rabbit de ninguna manera que viole o infrinja los derechos de publicidad, privacidad, derechos de autor, marca registrada u otro derecho de propiedad intelectual de otra persona;</li>
								<li>No utilizará la App Rabbit para ningún propósito que sea ilegal o esté prohibido en estos T&C App;</li>
								<li>No utilizará ningún robot, araña, crawler, scraper u otro medio o interfaz automatizado para acceder a la App Rabbit o extraer información de otros;</li>
								<li>No utilizará ni desarrollará ninguna aplicación de terceros que interactúe con la App Rabbit o con el contenido o la información de otros sin nuestro consentimiento por escrito;</li>
								<li>No utilizará la App Rabbit de forma que pueda interferir, interrumpir, afectar negativamente o impedir que otros disfruten plenamente de la App Rabbit, o que pueda dañar, deshabilitar, sobrecargar o perjudicar el funcionamiento de la App Rabbit;</li>
								<li>No utilizará ni intentará utilizar la cuenta, el nombre de usuario o la contraseña de otro Usuario sin su permiso;</li>
								<li>No solicitará las credenciales de inicio de sesión de otro Usuario;</li>
								<li>No cargarás virus u otros códigos maliciosos ni comprometerás de otro modo la seguridad de la App Rabbit;</li>
								<li>No intentará eludir ninguna técnica de filtrado de contenidos que empleemos, ni intentará acceder a áreas o funciones de la App Rabbit a las que no esté autorizado a acceder;</li>
								<li>No investigará, escaneará o probará la vulnerabilidad de la App Rabbit o de cualquier sistema o red;</li>
								<li>No fomentará ni promoverá ninguna actividad que infrinja estos T&C App;</li>
								<li>Usted no copiará, ni distribuirá la App Rabbit u otros contenidos;</li>
								<li>Usted sólo utilizará la App Rabbit para su propio uso y no revenderá ningún aspecto de la App Rabbit a un tercero;</li>
								<li>Mantendrá la seguridad y la confidencialidad de la contraseña de su cuenta o de cualquier otra identificación que podamos proporcionarle y que le permita acceder a la App Rabbit; y</li>
								<li>Nos proporcionará cualquier prueba de identidad, lícita y veraz que podamos solicitar al momento de registrarse en la App Rabbit y en los formularios habilitados en la App Rabbit</li>
							</ol>
							<p>En todo caso, el Usuario notificará de manera inmediata a Rabbit de cualquier hecho que permita suponer el uso indebido de la información registrada en dichos formularios, tales como robo, extravío o acceso no autorizado a cuentas y/o contraseñas, con el fin de proceder a inmediata cancelación.</p>
							<p>Asimismo, al utilizar la App Rabbit y/o adquirir los servicios que sean ofrecidos en la misma:</p>
							<ol>
								<li>Usted no podrá y se obliga a no usar ningún &quot;deep-link&quot;, &quot;page-scrape&quot;, &quot;robot&quot;, &quot;spider&quot; u otro dispositivo automático, programa, algoritmo o metodología, o cualquier proceso manual similar o equivalente, para acceder, adquirir, copiar o monitorear cualquier porción de la App Rabbit o cualquier contenido, o de cualquier manera reproducir o eludir la estructura de navegación o presentación de la App Rabbit o cualquier contenido, para obtener o intentar obtener cualquier material, documentos o información a través de cualquier medio. Rabbit se reserva el derecho de prohibir cualquier actividad de este tipo.</li>
								<li>Usted no puede y se obliga a no intentar obtener acceso no autorizado a cualquier parte o característica de la App Rabbit, o cualquier otro sistema o red conectada a la App Rabbit o a cualquier servidor de Rabbit, o a cualquiera de los servicios ofrecidos en o a través de la App Rabbit, por medio de la piratería, la &quot;minería&quot; de contraseñas o cualquier otro medio ilegítimo.</li>
								<li>Usted se obliga a proporcionar toda la información, misma que deberá de ser veraz y correcta, que Rabbit le solicite para efectos de llevar a cabo el registro y alta como usuario dentro de la App Rabbit.</li>
								<li>Usted no puede y se obliga a no investigar, escanear o probar la vulnerabilidad de la App Rabbit o cualquier red conectada a la App Rabbit, ni violar las medidas de seguridad o autenticación en la App Rabbit o cualquier red conectada a la App Rabbit. Usted no puede hacer una búsqueda inversa, rastrear o tratar de rastrear cualquier información sobre cualquier otro Usuario o visitante de la App Rabbit, o cualquier otro cliente o proveedor de Rabbit, incluyendo cualquier cuenta de la App Rabbit que no sea de su propiedad, a su fuente, o explotar la App Rabbit o la información puesta a disposición u ofrecida por o a través de la App Rabbit, en cualquier forma cuyo propósito es revelar cualquier información, incluyendo pero no limitado a la identificación personal o información, que no sea su propia información, según lo dispuesto por la App Rabbit.</li>
								<li>Usted se obliga a no realizar ninguna acción que imponga una carga irrazonable o desproporcionadamente grande en la infraestructura de la App Rabbit o de los sistemas o redes de Rabbit, o cualquier sistema o red conectada a los la App Rabbit o a Rabbit.</li>
								<li>Usted se obliga a no utilizar ningún dispositivo, software o rutina para interferir o intentar interferir con el correcto funcionamiento de la App Rabbit o cualquier transacción que se lleve a cabo en la App Rabbit, o con el uso de cualquier otra persona de la App Rabbit. </li>
								<li>Usted no puede y se obliga a no falsificar encabezados o manipular identificadores para disfrazar el origen de cualquier mensaje o transmisión que envíe a Rabbit en o a través de los la App Rabbit. Usted no puede fingir que es, o que representa, a otra persona, o hacerse pasar por cualquier otro individuo o entidad.</li>
								<li>Usted no puede y se obliga a no utilizar la App Rabbit o cualquier contenido para cualquier propósito que sea ilegal o prohibido por estos T&C App, o para solicitar la realización de cualquier actividad ilegal u otra actividad que infrinja los derechos de Rabbit o de otros.</li>
							</ol>
							<h4>1.1. Aceptación.</h4>
							<li>El Usuario, por el simple hecho de crear una cuenta dentro de la App Rabbit, acepta sujetarse de manera incondicional e irrevocable a las disposiciones, términos y condiciones de los presentes T&C App.</li>
							<h4>1.2. Cargos de Datos y Dispositivos Móviles.</h4>
							<li>Usted es responsable de cualquier cargo de móvil en el que pueda incurrir por el uso de la App Rabbit incluidos los cargos de datos. Si no está seguro de cuáles pueden ser esos cargos, debe preguntar a su proveedor de servicios antes de utilizar la App Rabbit.</li>
							<h4>1.3. Actualización a la App Rabbit.</h4>
							<p>Rabbit puede, de vez en cuando, a su entera discreción, desarrollar y proporcionar actualizaciones a la App Rabbit, que pueden incluir mejoras, correcciones de errores, parches y otras correcciones de errores y/o nuevas características (colectivamente, incluyendo la documentación relacionada, “Actualizaciones”). Las Actualizaciones también pueden modificar o eliminar en su totalidad ciertas características y funcionalidades de la App Rabbit. Usted acepta que Rabbit no tiene ninguna obligación de proporcionar ninguna actualización o de continuar proporcionando o habilitando cualquier característica o funcionalidad particular. Basado en la configuración de su dispositivo móvil, cuando su dispositivo móvil está conectado a Internet, ya sea:</p>
							<ol>
								<li>la App Rabbit descargará e instalará automáticamente todas las Actualizaciones disponibles; o</li>
								<li>puede recibir un aviso o se le pedirá que descargue e instale las actualizaciones disponibles.</li>
							</ol>
							<h4>1.4. Notificaciones a través de canales Rabbit. </h4>
							<p>Como parte de su uso de la App Rabbit, se le puede pedir que elija recibir ciertas notificaciones a través de canales oficiales Rabbit. Estos canales pueden ser, pero no están limitados a: correo electrónico, mensajes de texto (SMS), redes sociales y notificaciones dentro de la aplicación (In-app) Estos mensajes pueden incluir actualizaciones y otras promociones. Su elección para recibir dichos mensajes representa su consentimiento expreso por escrito para recibir correos electrónicos, mensajes de texto (SMS), comunicación por redes sociales y dentro de la aplicación (In-app) de Rabbit relacionados con la App Rabbit y/o los servicios ofrecidos a través de la misma. Usted puede optar por no recibir ciertas notificaciones en asociación con la  App Rabbit y/o los servicios ofrecidos a través de la misma completando el proceso de exclusión que se le proporciona con cada mensaje de correo electrónico y en las configuraciones del celular. Al optar por no recibir notificaciones, usted entiende que es posible que no podamos comunicarle información importante. Tenga en cuenta que podemos seguir poniéndonos en contacto con usted en relación con ciertos anuncios o notificaciones importantes de la App Rabbit y/o los servicios ofrecidos a través de la misma, incluso si ha optado por no recibir otros mensajes.</p>
							<h4>1.5. Término y Terminación.</h4>
							<p>Rabbit puede cambiar, suspender o descontinuar la App Rabbit por cualquier razón, en cualquier momento, incluyendo la disponibilidad de cualquier servicio, característica o contenido, sin previo aviso. Rabbit también puede imponer límites a ciertos servicios, características o contenido, o restringir su acceso a partes o a la totalidad de la App Rabbit o los servicios con o sin previo aviso.</p>
							<p>Rabbit también puede terminar o suspender su uso o acceso a la App Rabbit en cualquier momento, inmediatamente y sin previo aviso, por cualquier violación de estos T&C App, a nuestra única y absoluta discreción. Tras dicha terminación o suspensión, usted debe dejar inmediatamente de acceder o utilizar la App Rabbit y se compromete a no acceder, volver a descargar, volver a registrarse o de otra manera hacer uso de, o intentar utilizar, la misma. </p>
							<p>Usted reconoce que nos reservamos el derecho de tomar acciones, técnicas, legales o de otro tipo, para bloquear, anular o negar su capacidad de acceso a la App Rabbit. Usted entiende que podemos ejercer este derecho a nuestra sola discreción, y este derecho será en adición y no en sustitución de cualquier otro derecho y recursos disponibles para Rabbit. El uso continuado de la App Rabbit, sus componentes, bases de datos o documentación, o cualquier parte de los mismos, después de la terminación es un incumplimiento de estos T&C App. Todas las disposiciones de estos T&C App, que por su naturaleza deberían sobrevivir a la terminación, sobrevivirán a la terminación de los mismos, incluyendo, sin limitación, las disposiciones relativas a la propiedad, las renuncias de garantía, la indemnización y las limitaciones de responsabilidad.</p>

							<h4>1.6. Exención de Garantías.</h4>
							<p>Usted reconoce que Rabbit no tiene ningún control ni obligación de tomar ninguna medida con respecto a (1) qué Usuarios acceden a la App Rabbit; (2) qué efectos pueden tener el contenido de la App Rabbit o los servicios en usted; (3) cómo puede interpretar o utilizar la App Rabbit, el contenido o los servicios; o (4) qué acciones puede realizar como resultado de haber estado expuesto a la App Rabbit, el contenido o los servicios. </p>
							<p>Usted exime a Rabbit de toda responsabilidad por haber adquirido o no la App Rabbit y/o los servicios provistos a través de la misma. Rabbit no ofrece ninguna garantía, expresa o implícita, en cuanto a la fiabilidad, exactitud, puntualidad o integridad de la App Rabbit y de los servicios prestados a través de la misma y no asume ninguna responsabilidad por los errores u omisiones que pueda haber en ella. Rabbit no puede garantizar que el Usuario obtenga los resultados que busca ni garantizar que la App Rabbit y los servicios estén libres de errores. Rabbit no hace ninguna representación o garantía de ningún tipo con respecto al uso de la App Rabbit y los servicios o el uso o la exactitud de la información de la App Rabbit. </p>
							<p>LA APP RABBIT Y SU CONTENIDO SE PROPORCIONAN A USTED &quot;TAL CUAL&quot;, &quot;COMO DISPONIBLE&quot; Y CON TODAS LAS FALLAS Y DEFECTOS SIN GARANTÍA DE NINGÚN TIPO. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEGISLACIÓN APLICABLE, RABBIT, EN SU PROPIO NOMBRE Y EN EL DE SUS EMPRESAS SUBSIDIARIAS, FILIALES, EMPLEADOS O AGENTES, RECHAZA EXPRESAMENTE TODAS LAS GARANTÍAS, YA SEAN EXPRESAS, IMPLÍCITAS, LEGALES O DE OTRO TIPO, CON RESPECTO A LA APP RABBIT, INCLUIDAS TODAS LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN DETERMINADO, Y NO INFRACCIÓN, ASÍ COMO LAS GARANTÍAS QUE PUEDAN SURGIR DEL CURSO DE LAS NEGOCIACIONES, EL CURSO DE LA EJECUCIÓN, EL USO O LA PRÁCTICA COMERCIAL. SIN LIMITACIÓN DE LO ANTERIOR, RABBIT NO OFRECE NINGUNA GARANTÍA NI COMPROMISO, Y NO HACE NINGUNA DECLARACIÓN DE NINGÚN TIPO DE QUE LA APP RABBIT CUMPLIRÁ CON SUS REQUISITOS, LOGRARÁN LOS RESULTADOS PREVISTOS, SERÁN COMPATIBLES O FUNCIONARÁN CON CUALQUIER OTRO SOFTWARE, APLICACIONES, SISTEMAS O SERVICIOS, FUNCIONARÁN SIN INTERRUPCIÓN, CUMPLIRÁN CON CUALQUIER NORMA DE RENDIMIENTO O FIABILIDAD O ESTARÁN LIBRES DE ERRORES O QUE CUALQUIER ERROR O DEFECTO PUEDE SER O SERÁ CORREGIDO. ALGUNAS JURISDICCIONES NO PERMITEN LA EXCLUSIÓN O LAS LIMITACIONES DE LAS GARANTÍAS IMPLÍCITAS O LAS LIMITACIONES DE LOS DERECHOS LEGALES APLICABLES DE UN CONSUMIDOR, POR LO QUE ALGUNAS O TODAS LAS EXCLUSIONES Y LIMITACIONES ANTERIORES PUEDEN NO APLICARSE A USTED.</p>

							<h4>1.7. Limitación de Responsabilidad.</h4>
							<p>EN LA MEDIDA EN QUE LO PERMITA LA LEGISLACIÓN APLICABLE, EXCEPTO EN LA MEDIDA EN QUE CUALQUIER EXCLUSIÓN O LIMITACIÓN DE SU RESPONSABILIDAD SEA NULA, PROHIBIDA O INAPLICABLE POR LA LEGISLACIÓN APLICABLE, NI RABBIT NI SUS AFILIADOS, EMPLEADOS, AGENTES O TERCEROS PROVEEDORES DE CONTENIDOS SERÁN RESPONSABLES DE CUALQUIER PÉRDIDA RESULTANTE DEL USO O DE LA FALTA DE DISPONIBILIDAD DE LA INFORMACIÓN O DE LOS CONTENIDOS DE LA APP RABBIT O LOS SERVICIOS PRESTADOS A TRAVÉS DE ELLA, INCLUYENDO, PERO SIN LIMITARSE A, CUALQUIER PÉRDIDA DE BENEFICIOS, PÉRDIDA DE INGRESOS, PÉRDIDA DE USO, PÉRDIDA O DAÑO DE DATOS O INFORMACIÓN DE CUALQUIER TIPO, DAÑO AL EQUIPO, HARDWARE U OTRA PROPIEDAD DEL USUARIO, DAÑOS PERSONALES, O CUALQUIER DAÑO INDIRECTO, ESPECIAL, CONSECUENTE, COMPENSATORIO O INCIDENTAL (TANTO SI LA RECLAMACIÓN SE BASA EN EL INCUMPLIMIENTO DE CONTRATO, INCUMPLIMIENTO DE GARANTÍA, RESPONSABILIDAD ESTRICTA, NEGLIGENCIA, AGRAVIO U OTRA TEORÍA LEGAL) QUE SURJAN DE ESTE CONTRATO O EN RELACIÓN CON EL USO DE LA APP RABBIT, SERVICIOS O CONTENIDOS PRESTADOS A TRAVÉS DE ELLA, O POR CUALQUIER DAÑO DIRECTO QUE SUPERE LOS [50 DÓLARES (EN TOTAL)], INCLUSO SI SE HA ADVERTIDO DE LA POSIBILIDAD DE TALES DAÑOS. ALGUNAS LEGISLACIONES NO PERMITEN LA EXCLUSIÓN O LIMITACIÓN DE LOS DAÑOS INCIDENTALES O CONSECUENTES, POR LO QUE LAS LIMITACIONES Y EXCLUSIONES ANTERIORES PUEDEN NO APLICARSE EN SU CASO.</p>
							<p>Las disposiciones de &quot;Exención de Garantías&quot; y &quot;Limitación de Responsabilidad&quot; de estos T&C App son para el beneficio de Rabbit como se define en este documento, y tendrá el derecho de hacer valer y aplicar estas disposiciones directamente contra usted.</p>

							<h4>1.8. Indemnización.</h4>
							<p>Usted se obliga a indemnizar, defender y mantener en paz y a salvo a Rabbit y sus funcionarios, directores, empleados, agentes, afiliados, sucesores y cesionarios de y contra cualquier y todas las lesiones, muertes, pérdidas, daños, responsabilidades, deficiencias, reclamaciones, acciones, sentencias, acuerdos, intereses, premios, sanciones, multas, costos o gastos de cualquier tipo, incluyendo los honorarios de abogados y profesionales y los costos, y el coste de hacer valer cualquier derecho de indemnización en virtud de los presentes T&C App y el coste de perseguir a cualquier proveedor de seguros que surja o esté relacionado con la App Rabbit, el uso de la App Rabbit, los servicios que se prestan a través de la App Rabbit, la violación de estos T&C App, o la infracción por su parte de cualquier propiedad intelectual, o la violación de cualquier derecho de cualquier persona o entidad por su parte o por parte de cualquier tercero que utilice su información, inicio de sesión o contraseña.</p>

							<h4>1.9. Uso Internacional.</h4>
							<p>Rabbit no garantiza que los materiales contenidos en la App Rabbit o los servicios que se prestan a través de la misma, estén disponibles para su uso en otros lugares que no sean los Estados Unidos Mexicanos, y el acceso a la App Rabbit desde lugares donde dicha actividad es ilegal está prohibido. </p>

							<h4>1.10. Recolección y Uso de la Información.</h4>
							<p>Usted conciente que en el momento de accesar o utilizar la App Rabbit, Rabbit podrá usar cualquier medio (incluyendo medios digitales y/o automáticos) para recolectar información de su dispositivo movil así como información de su cuenta y de su uso de la App Rabbit. Igualmente usted deberá de proveer cierta información (incluyendo información personal) como condición para accesar y/o utilizar la App Rabbit o algunas de sus caracteristicas o funciones.  Toda la información que Rabbit recolecta a traves de o derivada del uso de la App Rabbit esta sujeta a su política de privacidad.</p>

							<p>Asimismo, usted conciente que la información recolectada por Rabbit conforme al párrafo anterior, y sujeto a la legislación aplicable, podrá ser utilizada por Rabbit para fines comerciales, incluyendo sin limitar fines relacionados con o derivados de marketing, anuncios, promociones, materiales, así como para llevar a cabo estudios de perfil de usuario, reportes y/o análisis con respecto al uso, funcionamiento y mejora de la App Rabbit.</p>

							<h4><strong>2. Acerca de Nosotros </strong></h4>

							<h4>Nuestro Propósito</h4>
							<p>Aportar al desarrollo económico del país a través del fortalecimiento de la tienda, convirtiéndola en la fuente de abasto preferida del consumidor por su portafolio de productos y los servicios que ofrece, logrando su crecimiento e impactando de manera positiva a su comunidad.</p>
							<p>Buscamos ser la plataforma aliada  de los tenderos en México, a través de un amplio portafolio de soluciones logísticas, financieras y tecnológicas que modernicen la manera en que operan las tiendas con las que crecimos.</p>

							<h4>Nuestra Misión</h4>
							<p>Inspirar el desarrollo e innovación de nuestro Modelo de Negocio, siempre pensando en las mejores soluciones que logren dar el salto a las tiendas de México & América Latina, ubicando al tendero y a su comunidad como eje central de Rabbit.</p>

							<h4>Nuestra Visión</h4>
							<p>Convertirnos en la plataforma logística, tecnológica y financiera preferida por el tendero.</p>
							<p>Haremos más competitivas a las tiendas de la esquina, habilitándolas con las herramientas necesarias que potencialicen su desarrollo, crecimiento y competitividad a través de un ecosistema de soluciones que van desde abastecimiento presencial y digital, hasta facilitadores de inclusión financiera.</p>

							<h4>3. Definiciones</h4>

							<p><b>Canales de comunicación:</b> Rabbit solicitará permiso al usuario para ser contactado a través de distintos canales oficiales. En caso de que el usuario de su autorización podrá recibir comunicados informativos, de venta y con fines de mercadotecnia. Estos canales pueden ser, pero no están limitados a: correos electrónicos, mensajes de textos (SMS), redes sociales y cualquier tipo de comunicación directa dentro de la aplicación (In-app)</p>

							<p><b>La app:</b> Es una aplicación móvil que Rabbit pone a disposición de sus clientes para la adquisición de productos para el abastecimiento de sus negocios. </p>

							<p><b>Oferta:</b> Los artículos mostrados en el sitio pertenecen al catálogo de cada region donde Rabbit® tiene cobertura, por lo tanto, están sujetos a disponibilidad en éstas. </p>

							<h4>Descripción de los productos y servicios</h4>
							<p>Los servicios que podrán ser prestados por Rabbit al Usuario, dentro de la App Rabbit, son mediante un catálogo de productos, mismo que se encuentra ordenado por diversas categorías mismas que incluyen sin limitar, Alimentos, Bebidas, Botonas, Cuidado de Hogar, Cuidado Personal, Medicamentos, así como cualquier otra categoría que de tiempo en tiempo, Rabbit incluya dentro de dicho catalogo, como referencia para que los Usuarios realicen compras para el abastecimiento de sus tiendas, como requisito deben estar identificados mediante el registro y creaciónd e cuenta y llevar a cabo los siguientes pasos:</p>

							<ol>
								<li>Ingresar su usuario y contraseña dentro de la App Rabbit (Login).</li>
								<li>Desde el Menú Principal, da click en la categoría que deseas</li>
								<li>Se desplegarán todos los productos de esa categoría</li>
								<li>Da click en cualquier producto que deseas comprar </li>
								<li>Dentro de cada producto, encontrarás la descripción, el costo y el precio sugerido de venta a tus clientes</li>
								<li>Da click en Agregar</li>
								<li>Todos los productos que agregues se irán cargando a tu carrito de compra</li>
								<li>Da click en tu carrito para iniciar con el proceso de pago </li>
								<li>Selecciona la fecha de entrega de tu pedido. Da click en Continuar</li>
								<li>Selecciona la forma de pago y da click en Continuar</li>
								<li>Confirma los datos de tu pedido y da click en Realizar pedido</li>
								<li>Recibirás un mail con la confirmación de tu compra </li>
							</ol>

							<p>Tambien podrá, en caso de requierirlo, realizar la cancelación de un pedido (siempre y cuando lo haga dentro del plazo permitido para ello), y lo podra realizar de la siguiente forma; </p>

							<ol>
								<li>Ingresar su usuario y contraseña dentro de la App Rabbit (Login).</li>
								<li>Dirígete al Menú Principal de tu App Rabbit.</li>
								<li>Selecciona Mis pedidos</li>
								<li>Busca y da click en el pedido que deseas cancelar (recuerda que debe ser antes de las 6:00 pm, del día antes de la entrega)</li>
								<li>Dirígete al final de la información del pedido</li>
								<li>Elige la opción Cancelar pedido</li>
								<li>Da click en Sí, cancelar pedido </li>
								<li>Una vez solicitada la cancelación de tu pedido, recibirás un correo con la confirmación de la cancelación</li>
							</ol>

							<h4>4. Su cuenta</h4>

							<p>Es posible que usted requiera crear una cuenta Rabbit y acceder a la misma para utilizar ciertos nuestros servicios. Cuando usted utiliza los servicios de Rabbit es usted responsable de mantener la confidencialidad de los datos de su cuenta y su contraseña, así como de restringir el acceso a sus dispositivos, y usted asume la responsabilidad de cualesquier actividades realizadas desde su cuenta o utilizando su contraseña.</p>
							<p>Debes ser mayor de 18 años para comprar bebidas alcohólicas o para navegar los listados relacionados con ellas.</p>

							<p>Rabbit se reserva el derecho de dar de baja cuentas o cancelar pedidos en caso de violación a las presentes Terminos y Condiciones.</p>

							<h4>5. Formas de pago</h4>
							<p>En Rabbit puedes hacer tus compras pagando en efectivo a contra entrega.</p>
							<h4>6. Tiempos de entrega</h4>
							<p>En cuanto recibimos tus pedidos, comenzamos a procesarlos para que lleguen a la puerta de tu tienda. Nuestro horario de entrega es de 8 a 19 horas, de la fecha que hayas seleccionado recibir tu pedido. </p>

							<h4>7. Costos de envío</h4>
							<p>Podrás obtener envío gratis en todas tus compras mayores a $500.00 (quinientos pesos 00/100 M.N.) . En caso contrario, el costo de envío será de $50.00 (cincuenta pesos 00/100 M.N.). El mínimo de compra para que Rabbit surta el producto es de $300.00 (trescientos pesos 00/100 M.N.).</p>
							<p>El envío gratis aplica en los siguientes escenarios:</p>
							<p>A) Cuando el Usuario alcance un mínimo de compra de $500.00 (quinientos pesos 00/100 M.N.).</p>
							<p>B) Cuando la ruta de reparto de preventa coincida con la entrega de pedidos por la tienda en línea. La App Rabbit siempre avisará cuando esto suceda y mostrará al Usuario en la pantalla principal un cintillo con el anuncio de envío gratis y el tiempo que se tiene para hacerlo efectivo.</p>
							<p>C) Cuando exista algún cupón de descuento regalando el envío y este sea aplicado en la sección de cupones.</p>

							<h4>8. Compra mínima</h4>
							<p>Para poder acceder a los servicios de la App Rabbit se requiere una compra mínima de $300.00 (trescientos pesos 00/100 M.N.).</p>

							<h4>9. Cupones y descuentos</h4>
							<p>Para hacer válido un cupón dentro de la App Rabbit se debe cumplir con lo siguiente: </p>
							<p>1. El cupón aplicará para nuevos Usuarios en su primera compra o Usuarios activos dentro de la App Rabbit; podrán adaptarse a las reglas de negocio u terminos y condiciones que Rabbit determine para poder hacerse válidos u activarse dentro de la app. No aplica para pedidos con la preventa Rabbit.</p>
							<p>2. El Cupón &quot;ejemplo:RABBIT&quot; será válido para el periodo de tiempo determinado por Rabbit (ejemplo: 10 días naturales) a partir de la creación del mismo; los cupones no son  transferibles para otras cuentas dentro de la App Rabbit® y tampoco acumulables con otras promociones. </p>
							<p>3. Para hacer válido el cupón el Usuario deberá hacer una compra mínima de $300.00 (trescientos pesos 00/100 M.N.) dentro de la App Rabbit o por el monto que se especifique por Rabbit.</p>
							<p>4. El cupón podrá ser aplicado en cualquiera de los productos que conforman el portafolio de la App Rabbit, sin embargo, Rabbit puede modificar esta condición sin previo aviso determinando las condiciones necesarias para su validez.</p>
							<p>5. El cupón no será válido si el cliente cancela su pedido después de redimir la promoción. </p>
							<p>6. El cupón no será válido si el Usuario reduce su monto mínimo de compra - $300.00 (trescientos pesos 00/100 M.N.), toda vez que estaría incumpliendo con los términos y condiciones de esta promoción, esto puede suceder si el Usuario rechaza los productos en la entrega.</p>

							<h4>Promoción: Cupón HOLARABBIT </h4>
							<h4>El cupón HOLARABBIT es un descuento de $100 mxp y envío gratis enfocado únicamente para nuevos usuarios que realicen su primera compra en el App Rabbit.</h4>
							<p>Vigencia del 24 de enero de 2022 hasta el 31 de diciembre de 2022.</p>
							<p>Legales para hacer válido el Cupón HOLARABBIT dentro de la App Rabbit. Estas condiciones podrían ser, pero no están limitadas a lo siguiente: </p>
							<ol>
								<li>El Cupón HOLARABBIT solo es válido para clientes nuevos, en su primera compra dentro de la App Rabbit, no aplica para pedidos con la preventa Rabbit.</li>
								<li>El Cupón HOLARABBIT es válido un mes (30 días naturales) a partir de la creación de la cuenta, este cupón no es transferible para otras cuentas dentro de la App Rabbit y no es acumulable con otras promociones. </li>
								<li>Para hacer válido el Cupón HOLARABBIT el cliente deberá hacer una compra mínima de $200.00 (doscientos pesos 00/100 M.N.).</li>
								<li>El Cupón HOLARABBIT puede ser aplicado en cualquiera de los productos que conforman el portafolio de la App Rabbit.</li>
								<li>El Cupón HOLARABBIT no será válido si el cliente cancela su pedido después de redimir la promoción. </li>
								<li>El Cupón HOLARABBIT no será válido si el cliente reduce su monto mínimo de compra - $200.00 (doscientos pesos 00/100 M.N.), ya que estaría incumpliendo los términos y condiciones de esta promoción, esto puede suceceder si el cliente rechaza los productos en la entrega.</li>
							</ol>

							<p>En término de descuentos y promociones aplicadas a productos comercializados dentro del app, Rabbit es libre de determinar el descuento y/o actividad promocional que le convenga, así mismo, de determinar el periodo de vigencia y/o dar por finalizado el beneficio al consumidor sin previo aviso. </p>

							<h4>10. Disponibilidad de entrega</h4>
							<p>Actualmente en Rabbit estamos trabajando en llegar a cada rincón de México, donde siempre se cuidará la calidad y promesa de entrega en cada una de tus órdenes.</p>
							<p>En caso de que la ubicación donde deseas que sean entregados los productos solicitados, esté fuera de nuestras zonas de cobertura, aparecerá un mensaje en nuestra plataforma, notificándote que no es viable procesar la orden.</p>

							<h4>11.Cancelación y devolución de Pedidos</h4>
							<p>Tu pedido comenzará a procesarse una vez confirmada la orden en nuestra plataforma.</p>
							<p>La cancelación de un pedido sólo se procesará si no ha iniciado el proceso de envío, el cual deberás solicitar antes de las 6pm.</p>

							<p>Puedes solicitar una cancelación en tu cuenta siguiendo estos pasos:</p>
							<ol>
								<li>Dirígete al Menú Principal de tu App Rabbit</li>
								<li>Selecciona Mis pedidos</li>
								<li>Busca y da click en el pedido que deseas cancelar (recuerda que debe ser antes de las 6:00 pm, del día antes de la entrega)</li>
								<li>Dirígete al final de la información del pedido</li>
								<li>Elige la opción Cancelar pedido</li>
								<li>Da click en Sí, cancelar pedido </li>
								<li>Una vez solicitada la cancelación de tu pedido, recibirás un correo con la confirmación de la cancelación</li>
							</ol>

							<p>Recuerda que al momento de la entrega es muy importante revisar el producto ya que, si encuentras defectos en tu producto, será necesario realizar el rechazo en el momento con nuestro repartidor. </p>
							<p>Podrás reportar la situación para buscar una solución a: 55 7908 7880 o escríbenos al correo electrónico: <a href="mailto:contacto@rabbitmx.com">contacto@rabbitmx.com</a></p>
							<p>Por tu seguridad, tu pedido será sujeto a validación de identidad aún y cuando haya sido autorizada la compra, por los que aquellos pedidos en donde se detecte actividad sospechosa o información incorrecta serán cancelados.</p>

							<h4>12.Modificaciones</h4>
							<p>RABBIT se reserva la facultad de modificar en cualquier momento los presentes términos y condiciones, por lo que el CLIENTE quedará sujeto a los presentes T&C App, así como a sus ulteriores modificaciones, sin perjuicio de la aplicación de la legislación correspondiente. Dada la relevancia de lo anterior, se recomienda al CLIENTE revisar de manera periódica los presentes T&C App, así como las modificaciones que se pudieran realizar a los mismos, en el siguiente link: <Link href='https://rabbitmx.com/terminos-y-condiciones'><a>https://rabbitmx.com/terminos-y-condiciones</a></Link></p>

							<h4>13. Responsabilidad de Rabbit derivado de la disponibilidad, accesibilidad o interrupción en el funcionamiento de la App Rabbit.</h4>
							<p>Rabbit no garantiza de ningún modo la continuidad y disponibilidad de la App Rabbit, así como de los contenidos y/o servicios ofrecidos a través de la misma, no obstante, Rabbit llevará a cabo las acciones que de acuerdo a sus posibilidades le permitan mantener el buen funcionamiento de la App Rabbit, sin que esto suponga alguna responsabilidad por parte de Rabbit. </p>
							<p>De igual forma, Rabbit no será responsable ni garantiza que el contenido o software al que el Usuario pueda acceder a través de la App Rabbit se encuentre libre de errores y/o software malicioso.</p>
							<p>Rabbit tampoco se hace responsable de los daños que pudiesen ocasionarse al Usuario y/o a cualquier tercero por un uso inadecuado por parte del Usuario de la App Rabbit. En ningún caso, Rabbit será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el sólo acceso o utilización de la App Rabbit. </p>

							<h4>14. Obligaciones del comprador</h4>
							<p>Al aceptar los T&C App del servicio que ofrece Rabbit, ya sea con el uso de la app o la realización de una compra, el Usuario se obliga y tiene la responsabilidad de lo siguiente: 1) Otorgar información veraz y fidedigna al momento de crear su cuenta de Usuario; 2) Abstenerse de transferir a terceros los datos de validación de su cuenta; 3) Abstenerse de utilizar la app para realizar actos contrarios a la moral, la ley, el orden público y buenas costumbres en contra Rabbit, o de terceros; 4) Pagar oportunamente a la contraprestación económica pactada entre el comprador y Rabbit; 5) Abstenerse de suplantar la identidad de otros compradores; 6) En general todas las conductas necesarias para la ejecución del negocio para cumplir con el pacto de compra-venta, como i) la recepción de los productos solicitados en el tiempo y forma pactados, ii) verificar al momento de la validación que los productos seleccionados sí corresponden a los solicitados, iii) informarse sobre las instrucciones de uso y consumo de los productos.</p>

							<h4>15.Política de Privacidad y Protección de Datos </h4>
							<p>De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Rabbit se compromete a adoptar las medidas necesarias que estén a su alcance para asegurar la privacidad de los datos personales recabados, de forma que se garantice su seguridad, se evite su alteración, pérdida o tratamiento no autorizado. </p>
							<p>Además, a efecto de dar cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, todo dato personal del Usuario que sea recabado a través de la App Rabbit será tratado de conformidad con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad. </p>

							<p>El Usuario acepta que Rabbit ostenta el derecho de recopilar y tratar la información de carácter personal que obtenga del mismo de acuerdo con el Aviso de Privacidad de Rabbit, el cual se encuentra disponible en el siguiente link: <Link href='https://rabbitmx.com/aviso-de-privacidad'><a>https://rabbitmx.com/aviso-de-privacidad</a></Link></p>
							<p>Rabbit se reserva el derecho a modificar su Aviso de Privacidad, de acuerdo a sus necesidades o derivado de algún cambio en la legislación. Dichas modificaciones serán notificadas al Usuario, de conformidad con lo estipulado en el Aviso de Privacidad de Rabbit. </p>
							<p>Por otra parte, el acceso a la App Rabbit puede implicar la utilización de cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como Usuario, así como brindarle un mejor servicio y experiencia de Usuario al utilizar la App Rabbit.  Asimismo, Rabbit podrá recopilar información del Usuario para fines comerciales, de conformidad con lo establecido en la sección 1.10 de los presentes T&C.</p>

							<p>Para efectos de conocer más acerca de nuestra política de cookies, web beacons y otras tecnologías, acceda al Aviso de Privacidad Rabbit, el cual se encuentra disponible en el siguiente link: <Link href='https://rabbitmx.com/aviso-de-privacidad'><a>https://rabbitmx.com/aviso-de-privacidad</a></Link> y/o a la Política de Cookies de Rabbit, la cual se encuentra disponible en el siguiente link: <Link href='https://rabbitmx.com/politica-de-cookies'><a>https://rabbitmx.com/politica-de-cookies</a></Link></p>

							<h4>16.Política en Materia de Propiedad Intelectual</h4>
							<p>Rabbit por sí o como parte licenciataria, es titular/licenciatario de todos los derechos de propiedad intelectual e industrial de la App Rabbit, incluyendo los derechos de autor, el código fuente que hace posible el funcionamiento de la App Rabbit, así como las imágenes, archivos de audio o video, logotipos, marcas, combinaciones de colores, estructuras, diseños y demás elementos que lo distinguen. Serán, por consiguiente, protegidas por la Ley Federal de Protección a la Propiedad Industrial y la Ley de la Propiedad Industrial y la Ley Federal del Derecho de Autor, así como por los tratados internacionales aplicables. Por consiguiente, queda expresamente prohibida la reproducción, distribución y/o difusión de los contenidos de la App Rabbit, con fines comerciales en cualquier soporte y por cualquier medio, sin la autorización previa y por escrito de Rabbit y/o del titular de dicho derecho. </p>
							<p>El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de Rabbit y/o del titular de dichos derechos de propiedad intelectual e industrial. </p>
							<p>Por otro lado, el Usuario deberá abstenerse de suprimir, alterar y/o manipular cualquier elemento, archivo, o contenido de la App Rabbit, y por ningún motivo realizará actos tendientes a vulnerar la seguridad, los archivos y/o bases de datos que se encuentren protegidos. </p>

							<h4>17. Elección de Ley aplicable y Jurisdicción</h4>
							<p>Los presentes T&C App, se regirán por las leyes federales de los Estados Unidos Mexicanos, sin dar efecto a ninguna disposición o regla de elección o conflicto de leyes. En caso de cualquier pleito, acción o procedimiento legal que surja de o esté relacionado con estos T&C App, la App Rabbit y/o los servicios las partes se someten expresamente a la jurisdicción de los tribunales establecidos en la Ciudad de México o del domicilio del Usuario, a elección de Rabbit. Rabbit y el Usuario renuncian a cualquier otra jurisdicción que pudiese corresponderles por virtud de su domicilio actual o futuro, o por cualquier otra razón.</p>

							<h4>18. No relación laboral</h4>
							<p>Nada de lo aquí expuesto constituirá a ninguna de las partes como empleador, empleado, agente o representante de la otra parte, ni a ambas partes como empresas conjuntas o socios para ningún propósito. Las partes también acuerdan que la única relación legal entre ellas es la que se deriva de estos T&C App, y por lo tanto no existe ninguna relación laboral entre el Usuario y con Rabbit.</p>

							<h4>19. Copyright y marcas registradas</h4>
							<p>Todos los materiales, incluyendo imágenes, las ilustraciones, los diseños, los íconos, las fotografías y los materiales escritos, las marcas registradas, la combinación de signos distintivos, elementos operativos y de imagen y/o la característica intelectual poseída, controlada o licenciada por Rabbit o por los terceros que han licenciado sus materiales a Rabbit, son protegidos por la legislación Mexicana y los tratados internacionales en materia de Propiedad Industrial e intelectual aplicables.</p>
							<p>La compilación del contenido en el app Rabbit y sitio web rabbitmx.com es exclusivo de Rabbit y también es protegida por la legislación Mexicana y los tratados internacionales en materia de Propiedad industrial e intelectual aplicables.</p>
							<p>Rabbit y sus proveedores y otorgantes de licencias se reservan todos los derechos intelectuales en todo el texto, programas, productos, procesos, tecnología, contenido y otros materiales que aparecen en el app y sitio web. El acceso a este sitio no otorga y no podrá considerarse como una concesión o licencia alguna respecto de los derechos de los cuales Rabbit es titular o licenciatario. El acceso a este sitio no autoriza a nadie a utilizar cualquier nombre, logo o marca en ninguna forma.</p>

							<h4>20. Datos de Contacto de Rabbit </h4>
							<ul>
								<li>Número telefónico: 5579 08 7880, lunes a viernes con un horario de atención de 8:30 am a 5:30 pm.</li>
								<li>Email: <a href="mailto:contacto@rabbitmx.com">contacto@rabbitmx.com</a></li>
								<li>Sitio web: <Link href='https://rabbitmx.com/'><a>https://rabbitmx.com/</a></Link></li>
								<li>Dirección: 
									Av. Ricardo Margain Zozaya No. 440, 
									Interior 402, Colonia Valle del Campestre, 
									San Pedro Garza García, C.P.  66265, 
									Nuevo León, Mexico
								</li>
							</ul>

							<h4>21. Mecanismos de solución para reclamaciones o aclaraciones </h4>
							<p>El Usuario podrá presentar sus reclamaciones o aclaraciones al siguiente email: <a href="mailto:contacto@rabbitmx.com">contacto@rabbitmx.com</a>  o bien al número telefónico 5579 08 7880, en los siguientes días y horarios de atención: lunes a viernes de 8:30 am a 5:30 pm. </p>
							<p>El plazo de resolución para las reclamaciones o aclaraciones será de 24 a 48 horas en días hábiles (lunes a viernes), contados a partir de la fecha y hora de recepción.</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}