import Acordeon from "./Acordeon"
import Link from "next/link"

// <Acordeon title=''></Acordeon>

export default function Faqs() {

	return (
		<div className="section-faqs bg-sec-4">
			<div className="container">
				<div className="cont-info">
					<div className="has-text-centered">
						<p><strong>Preguntas Frecuentes</strong></p>
					</div>
				</div>

				<p><strong>Envíos y entregas</strong></p>
				<Acordeon title='¿Dónde surtir mi tienda de abarrotes?'>
					<p>Si te preguntas “¿dónde y cómo puedo surtir mi tienda?” cada vez que te falta algún producto, la respuesta es sencilla: con Rabbit®. Ya sea que descargues nuestra App o que hagas el pedido con los Aliados Rabbit.</p>
				</Acordeon>
				<Acordeon title='¿Dónde está mi pedido?'>
					<p>En cuanto recibimos tus pedidos, comenzamos a procesarlos para que lleguen a la puerta de tu tienda. Nuestro horario de entrega es de 8 a 19 horas, de la fecha que hayas seleccionado recibir tu pedido. En caso de no haberlo recibido en este horario, por favor contáctanos para ayudarte a solucionar la situación.</p>
				</Acordeon>
				<Acordeon title='Costo de envío'>
					<p>¡Estás a un click de llevar al siguiente nivel tu tienda! Podrás obtener envío gratis en todas tus compras mayores a $500 pesos. En caso contrario, el costo de envío será de $50 pesos.</p>
					<p>Adicional, te recomendamos estar al pendiente ya que un día a la semana te podremos ofrecer envío gratis ¡en compras desde $200 pesos!</p>
				</Acordeon>
				<Acordeon title='Tiempos de envío'>
					<p>¡Con Rabbit® tu eliges cuando recibir tus pedidos! Podemos entregarte en 24 horas después de haber realizado tu compra o en la fecha que tu decidas.</p>
				</Acordeon>

				<p><strong>Devoluciones</strong></p>
				<Acordeon title='Mi pedido llegó incompleto'>
					<p>Lamentamos la mala experiencia, ayúdanos a reportar inmediatamente vía WhatsApp a este número: 55 7908 7880 o escríbenos al correo electrónico: contacto@rabbitmx.com</p>
				</Acordeon>
				<Acordeon title='Me cobraron de más'>
					<p>Favor de reportar inmediatamente vía WhatsApp a este número: 55 7908 7880 o escríbenos al correo electrónico: contacto@rabbitmx.com</p>
				</Acordeon>
				<Acordeon title='Recibí un producto en mal estado'>
					<p>Lamentamos la mala experiencia, por el momento no tenemos habilitada la opción de devoluciones, te sugerimos que en tus próximos pedidos, los revises a detalle en el momento de la entrega y si algo no te pinta bien, ¡En ese instante puedes devolverlos sin problema!</p>
				</Acordeon>
				<Acordeon title='Deseo cancelar mi pedido'>
					<p>Lamentamos tu decisión de cancelar el pedido. </p>
					<p>Para hacer la cancelación de tu pedido, considera que en cuanto recibamos el alta de tu pedido, comenzamos a procesarlo para que llegue a la puerta de tu tienda en 24 horas*, por lo tanto, no podemos cancelarlo después de las 6:00 pm, del día antes seleccionado para la entrega.</p>
					<p>Sigue estos pasos para la cancelación de tu pedido:</p>
					<ol className="rabbit-list has-text-left px-5">
						<li><p>Dirígete al Menú Principal de tu App Rabbit®</p></li>
						<li><p>Selecciona Mis pedidos</p></li>
						<li><p>Busca y da click en el pedido que deseas cancelar (recuerda que debe ser antes de las 6:00 pm, del día antes de la entrega)</p></li>
						<li><p>Dirígete al final de la información del pedido</p></li>
						<li><p>Elige la opción Cancelar pedido</p></li>
						<li><p>Da click en Sí, cancelar pedido</p></li>
						<li><p>Una vez solicitada la cancelación de tu pedido, recibirás un correo con la confirmación de la cancelación</p></li>
					</ol>
					<p>Recuerda: En caso de haber solicitado factura ésta también quedará cancelada.</p>
				</Acordeon>
				<Acordeon title='Políticas de devolución'>
					<p>Recuerda que únicamente podrás devolver los productos al momento de la entrega, por ello es muy importante que revises a detalle tus productos. En caso de requerir algún tipo de ayuda contáctanos por Chat y uno de nuestros Aliados te ayudará a resolver el malentendido lo más pronto posible.</p>
				</Acordeon>

				<p><strong>Administra tu cuenta</strong></p>
				<Acordeon title='Deseo Actualizar mis datos'>
					<p>Ayúdanos enviando un correo a: holarabbit@rabbitmx.com con los siguientes datos:</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Correo electrónico registrado en la aplicación</p></li>
						<li><p>Número de teléfono registrado en la aplicación</p></li>
						<li><p>Nombre de la tienda</p></li>
					</ul>
					<p>Y descríbenos que datos son los que te interesa actualizar y uno de nuestros Aliados te ayudará lo más pronto posible.</p>
				</Acordeon>
				<Acordeon title='¿Cómo me registro?'>
					<p>¡Estás a un click de darle a tu tienda el salto que necesita! Con Rabbit® abrir tu cuenta está de volada. Sigue los pasos y dentro de unos minutos podrás darle a tu tienda el salto que necesita y recibir pedidos cuando tu elijas.</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Descarga e ingresa a la App Rabbit®</p></li>
						<li><p>Ingresa tu número de teléfono y verifícalo</p></li>
						<li><p>Ingresa tu correo y genera una contraseña. Da click en <strong>Crear</strong> cuenta</p></li>
						<li><p>Te enviaremos un correo para verificar tu cuenta, recuerda revisar tu carpeta de no deseados o SPAM</p></li>
						<li><p>¡Listo! Ya creaste tu cuenta Rabbit® ahora verifiquemos tu cobertura para poderte enviarte tus pedidos </p></li>
						<li><p>Ingresa tu Código postal para validar tu cobertura. Da click en <strong>Continuar</strong></p></li>
						<li><p>Si ya eres cliente Rabbit® puedes ingresar de manera opcional tu número de cliente; da click en <strong>Continuar</strong></p></li>
						<li><p>Selecciona la ubicación de tu tienda en el mapa; ¡Esta será la dirección donde enviaremos tus pedidos!</p></li>
						<li><p>Introduce el nombre de tu tienda y el giro que más se acople a tu negocio. Por ejemplo: abarrotes, cremería, dulcería, entre otras. Da click en <strong>Continuar</strong></p></li>
						<li><p>¡Felicidades! Así de fácil es registrarte para poder abastecer tu tienda</p></li>
						<li><p>¡Ya puedes comprar en nuestra App Rabbit® con promociones, envíos gratis y en 24 horas!*</p></li>
					</ul>
				</Acordeon>

				<p><strong>Precios, pagos y promociones</strong></p>
				<Acordeon title='Métodos de pago'>
					<p>En Rabbit® puedes hacer tus compras pagando en efectivo contra entrega</p>
				</Acordeon>
				<Acordeon title='No me descontaron un cupón'>
					<p>Lamentamos mucho que hayas tenido inconvenientes al momento de ingresar el cupón de descuento, por favor ayúdanos a verificar estos puntos para encontrar la solución:</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Dirígete al Menú principal de la App Rabbit®</p></li>
						<li><p>Selecciona la opción <strong>Mis cupones</strong>. En este apartado encontrarás los cupones que tienes disponibles.</p></li>
						<li><p>Consulta los <strong>Términos y Condiciones</strong> del cupón que deseas utilizar.</p></li>
						<li><p>Si la compra que realizaste cumple con los Términos y Condiciones, por favor escríbenos a holarabbit@rabbitmx.com, incluyendo en el cuerpo del correo el número de pedido que te proporcionamos al momento de tu compra y describe brevemente la situación.</p></li>
						<li><p>Nos comunicaremos contigo para darte una solución. ¡Estamos para ayudarte!</p></li>
					</ul>
				</Acordeon>
				<Acordeon title='Facturación de pedidos'>
					<p>Recuerda que solo podrás solicitar la factura de tus pedidos durante el mes en curso de la fecha en que realizaste el pedido:</p>
					<p>Mientras estás realizando tus compras y cuando confirmas tu forma de pago podrás encontrar una opción de “solicitar factura” y deberás ingresar tus datos:</p>
					<ul className="rabbit-list px-5">
						<li><p>Razón social</p></li>
						<li><p>RFC</p></li>
						<li><p>Tipo de Facturación</p></li>
						<li><p>Uso de la factura</p></li>
					</ul>
					<p>Para facturar pedidos después de haberlos solicitado:</p>
					<ul className="rabbit-list px-5">
						<li><p>Dirígete al menú principal de la aplicación</p></li>
						<li><p>Elige la opción Mis pedidos</p></li>
						<li><p>Selecciona el pedido que deseas facturar</p></li>
						<li><p>Ve al final de la pantalla y encontrarás la opción para solicitar factura e ingresa tus datos</p></li>
					</ul>
					<p>Importante: ¡tu factura llegará por correo electrónico después de la entrega de tus productos!</p>
				</Acordeon>
				<Acordeon title='No me llegó mi factura'>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Enviar correo: facturación@rabbitmx.com con el número de folio de compra y fecha solicitud de factura.</p></li>
						<li><p>Un asesor le dará respuesta con un plazo máximo de 2-3 días con el estatus de la facturación.</p></li>
						<li><p>La factura estará llegando al buzón de su usuario y correo electrónico.</p></li>
					</ul>
				</Acordeon>
				<Acordeon title='Quiero refacturar'>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Enviar correo: holarabbit@rabbitmx.com con el número de folio de compra, fecha solicitud de factura, Factura en PDF y XML. Con los siguientes datos fiscales:</p></li>
						<li><p>Nombre</p></li>
						<li><p>Domicilio</p></li>
						<li><p>RFC</p></li>
						<li><p>Estado</p></li>
						<li><p>Municipio/Alcaldía</p></li>
						<li><p>Teléfono de contacto, correo electrónico y nombre de la tienda (asegúrate que sean igual a como los registraste).</p></li>
						<li><p>Nuestro servicio al cliente procesará la solicitud con un plazo máximo de respuesta de 3-5 días</p></li>
						<li><p>La factura nueva estará llegando al buzón de su usuario y correo electrónico.</p></li>
					</ul>
				</Acordeon>
				<Acordeon title='Promociones'>
					<p>¡Las mejores ofertas para surtir tu tienda están en Rabbit®! Desde la App Rabbit® podrás encontrar: cupones, promociones ¡y envíos gratis*!</p>
					<p>Para encontrar las promociones sigue estos pasos:</p>
					<p>Encuentran en el Menú Principal el botón Mis Cupones, en donde podrás conocer las promociones disponibles que te dan descuentos en productos dentro de la App Rabbit®</p>
					<p>Para hacer válido un cupón, sigue estos pasos:</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>En la sección <strong>Mis Cupones</strong>, puedes dar click en <strong>Copiar cupón</strong></p></li>
						<li><p>Inicia el proceso de compra</p></li>
						<li><p>Cuando tu carrito de compras esté listo, ingresa a la pantalla <strong>Confirmar el pedido</strong>, da click en <strong>Continuar</strong> y pega el cupón en el apartado <strong>Cupón</strong>. Da click en <strong>Aplicar</strong></p></li>
						<li><p>La App Rabbit® te indicará si el cupón es válido para esta compra, de ser así, da click en <strong>Continuar</strong>. Si la App te indica que este cupón <strong>no es válido</strong>, te sugerimos revisar los Términos y Condiciones, que se encuentran dentro de la App Rabbit® </p></li>
						<li><p>¡Estás a un salto! Da click en <strong>Continuar y comenzaremos a preparar tu pedido</strong></p></li>
						<li><p>Si la compra se realizó de forma exitosa en la pantalla podrás leer el mensaje <strong>¡Orden recibida!</strong> Te compartiremos tu número de pedido y en breve recibirás el correo electrónico de confirmación </p></li>
					</ul>
					<p>Todas las promociones tienen vigencia y restricciones; para saber más ingresa a nuestra sección de <strong>Términos y Condiciones.</strong></p>
					<p>¡Sigue abasteciendo tu tienda desde el celular; con las marcas más top y a excelentes precios!</p>
				</Acordeon>

				<p><strong>Pedidos</strong></p>
				<Acordeon title='¿Cómo hacer un pedido?'>
					<p>¡Surtir tu negocio desde la App Rabbit® es muy fácil! ¡Recuerda que tu eliges cuando recibir tus pedidos!</p>
					<p>Sigue estos sencillos pasos:</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Desde el Menú Principal, da click en la categoría que deseas</p></li>
						<li><p>Se desplegarán todos los productos de esa categoría</p></li>
						<li><p>Da click en cualquier producto que deseas comprar </p></li>
						<li><p>Dentro de cada producto, encontrarás la descripción, el costo y el precio sugerido de venta a tus clientes</p></li>
						<li><p>Da click en Agregar</p></li>
						<li><p>Todos los productos que agregues se irán cargando a tu carrito de compra</p></li>
						<li><p>Da click en tu carrito para iniciar con el proceso de pago </p></li>
						<li><p>Selecciona la fecha de entrega de tu pedido. Da click en Continuar</p></li>
						<li><p>Selecciona la forma de pago y da click en Continuar</p></li>
						<li><p>Confirma los datos de tu pedido y da click en Realizar pedido</p></li>
						<li><p>Recibirás un mail con la confirmación de tu compra </p></li>
					</ul>
					<p>¡Felicidades! Tu orden fue recibida y pronto llegará hasta la puerta de tu tienda. ¡Sigue abasteciendo tu tienda desde el celular con marcas líderes!</p>
				</Acordeon>
				<Acordeon title='¿Dónde encuentro mi historial de pedidos?'>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Dirígete al Menú Principal de la App Rabbit®</p></li>
						<li><p>Selecciona la opción Mis pedidos. En este apartado, podrás encontrar todos los pedidos que has realizado en tu App Rabbit® y dar seguimiento a la fecha de entrega de tus pedidos en curso.</p></li>
					</ul>
				</Acordeon>
				<Acordeon title='Haz pedidos desde la aplicación'>
					<p>¡Hacer un pedido desde tu App Rabbit®, es muy fácil! Sigue estos sencillos pasos:</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Desde la pantalla principal, da click en la categoría que deseas abastecer tu tienda. Se desplegarán todos los productos de esa categoría</p></li>
						<li><p>Da click en el producto que sea de tu interés</p></li>
						<li><p>Dentro de cada producto, encontrarás la descripción, el costo y el precio sugerido de venta a tus clientes</p></li>
						<li><p>Da click en Agregar</p></li>
						<li><p>Todos los productos que agregues se irán cargando a tu carrito de compra</p></li>
						<li><p>Da click en tu carrito para proceder con el envío</p></li>
						<li><p>Selecciona el día de entrega de acuerdo con tus preferencias. Da click en Continuar</p></li>
						<li><p>Selecciona la forma de pago. Da click en Continuar</p></li>
						<li><p>Confirma los datos de tu pedido y da click en Realizar pedido</p></li>
					</ul>
					<p>¡Felicidades! Tu orden fue recibida y pronto llegará hasta la puerta de tu tienda</p>
				</Acordeon>
				<Acordeon title='Cancelar pedidos'>
					<p>Lamentamos tu decisión de cancelar el pedido.</p>
					<p>Para hacer la cancelación de tu pedido, considera que en cuanto recibamos el alta de tu pedido, comenzamos a procesarlo para que llegue a la puerta de tu tienda en 24 horas*, por lo tanto, no podemos cancelarlo después de las 6:00 pm, del día antes seleccionado para la entrega.</p>
					<p>Sigue estos pasos para la cancelación de tu pedido:</p>
					<ul className="rabbit-list has-text-left px-5">
						<li><p>Dirígete al Menú Principal de tu App Rabbit®</p></li>
						<li><p>Selecciona Mis pedidos</p></li>
						<li><p>Busca y da click en el pedido que deseas cancelar (recuerda que debe ser antes de las 6:00 pm, del día antes de la entrega)</p></li>
						<li><p>Dirígete al final de la información del pedido</p></li>
						<li><p>Elige la opción Cancelar pedido</p></li>
						<li><p>Da click en Sí, cancelar pedido</p></li>
						<li><p>Una vez solicitada la cancelación de tu pedido, recibirás un correo con la confirmación de la cancelación</p></li>
					</ul>
					<p>Recuerda: En caso de haber solicitado factura ésta también quedará cancelada.</p>
				</Acordeon>

				<p><strong>Consulta sobre la aplicación</strong></p>
				<Acordeon title='Cancelar pedidos'>
					<p>¡Da el salto que tu tienda necesita! La App Rabbit® es una plataforma digital, propiedad de Rabbit® que está a disposición de sus clientes para que puedan encontrar, elegir y adquirir los productos que necesitan para surtir su tienda.</p>
				</Acordeon>
				<Acordeon title='Uso de Datos personales'>
					<p>Para Rabbit la protección de sus Datos Personales es muy importante, por ello te invitamos a que conozcas nuestro Aviso de Privacidad en <Link href='/aviso-de-privacidad'>https://rabbitmx.com/aviso-de-privacidad</Link></p>
				</Acordeon>
			</div>
		</div>
	)
}