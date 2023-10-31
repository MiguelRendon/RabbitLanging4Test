import Dymamic from 'next/dynamic';
const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const Image = Dymamic(import("next/image"))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))
const Brands = Dymamic(import("../components/Brands"))
const FAQS = Dymamic(import("../components/FAQS"))
const VideoPlayer = Dymamic(import("../components/VideoPlayer"))


import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Navigation, Autoplay])

export default function MarketPlace() {

	return (
		<>
			<Layout
				title="Surte tu tienda de abarrotes | Abastecimiento con App Rabbit®"
				description="Surte tu tienda de abarrotes desde la App Rabbit®. Pide solo lo que necesitas, a cualquier hora los 365 días del año y con envío hasta tu negocio."
				keyWords="como surtir una tienda de abarrotes, distribuidores para tiendas de abarrotes, donde surtir mi tienda de abarrotes, donde puedo surtir mi tienda de abarrotes, donde comprar para surtir mi tienda de abarrotes, comprar abarrotes en linea, app Rabbit"
				imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_abastecimiento-en-linea-app.png"
				publishedTime="2021-12-10T23:17:39+02:00"
				modifiedTime="2022-03-04T02:09:06+02:00"
				schema={
					<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:`
						{
							"@context": "https://schema.org/",
							"@type": "SoftwareApplication",
							"name": "Rabbit Surte tu tienda online",
							"aggregateRating": {
								"@type": "AggregateRating",
								"ratingValue": 4,
								"reviewCount": 11
							},
							"applicationCategory": "Compras",
							"operatingSystem": "Requiere iOS 11.0 o posterior. Compatible con iPhone, iPad y iPod touch.",
							"contentRating": "Apto para todo p˙blico",
							"author": {
								"@type": "Person",
								"name": "Rabbit Impulsora de Mercados, S.A. de C.V",
								"url": "https://apps.apple.com/mx/developer/rabbit-impulsora-de-mercados-s-a-de-c-v/id1608218190"
							},
							"description": "°Surte tu tienda de abarrotes de volada! Pide los productos que necesitas desde el celular y los llevamos hasta tu tienda en 24 horas*. \n\nSÈ el primer@ en enterarte de nuestras increÌbles promociones; aumenta tus ventas mejorando el cat·logo de productos, ahorra tiempo y dinero surtiendo tu tienda sin salir de ella, adem·s de conocer nuestro sugerido de precios para aumentar las ganancia de tus productos . °Da el salto con RabbitÆ!\n\nVentajas de usar la App RabbitÆ:\n\n°Descargar la App, no tiene costo!\nAprovecha todas nuestras promociones y cupones de descuento.  \nNo pierdas tiempo saliendo de tu tienda, haz tu pedido en lÌnea desde el celular.\n°Surte tu tienda con un solo proveedor! \nAbastece tu tienda con las marcas que tus clientes buscan. \nTe ayudamos a aumentar tu cat·logo de productos, para que tu tienda no pierda ventas.\n No te quedes esperando, recibe tus productos en 24 horas*. \nPonte buzo y conoce quÈ dÌas el envÌo de tu pedido °puede ser gratis!\nPaga contra entrega cuando te lleguen tus productos. \nHaz pedidos para tu tienda de abarrotes los 365 dÌas del aÒo y las 24 horas del dÌa.\nNuestros Aliados RabbitÆ te acompaÒar·n en todo momento en el uso de la App. \n\nøPor quÈ RabbitÆ?\n\nLlevamos un amplio portafolio de soluciones tecnolÛgicas para fortalecer y hacer crecer las tiendas. \nBrindamos una amplia cantidad de soluciones, asÌ como un excelente servicio a cada uno de los tenderos para impulsar el desarrollo integral de sus negocios.",
							"image": "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/2d/d7/17/2dd7172d-f916-f5ca-c3d5-5952c9963caa/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
							"url": "https://apps.apple.com/mx/app/rabbit-surte-tu-tienda-online/id1608218188",
							"screenshot": [
								"https://is3-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/3d/a1/49/3da14985-5267-fea5-f545-041f4ff3235b/64748da4-1a2f-4f5d-b414-5d4705fb5af8_1242x2688_LC_Ipad_01_English.png/300x0w.jpg",
								"https://is2-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/a3/30/5d/a3305d39-435a-d3d1-d3c3-85b7bdded9f0/70051871-8d7f-4ecb-b67c-d1c9f0879e32_1242x2688_LC_Ipad_02_English.png/300x0w.jpg",
								"https://is2-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/8c/71/f7/8c71f7a1-b32a-c99c-a846-25e04d74d017/788951ec-a3d7-4d51-865d-9471ababe387_1242x2688_LC_Ipad_03_English.png/300x0w.jpg",
								"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/60/52/b0/6052b0f3-971c-33d4-4f5f-67dbfbed2541/d083c889-e868-4514-9192-bb336cfa0ea7_1242x2688_LC_Ipad_04__English.png/300x0w.jpg",
								"https://is2-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/72/ce/9d/72ce9d6d-52dc-e6fd-8ef8-1fd4f2a8d0da/1acb2d3c-46ac-480b-ad6c-d7f7e82dba9e_1242x2688_LC_Ipad_06_English.png/300x0w.jpg",
								"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/4c/fd/1d/4cfd1d6c-99cc-ff38-1988-3af17de86ca4/1a5691e2-f345-41a8-bad2-83de6dbe107d_1242x2688_LC_Ipad_05_English.png/300x0w.jpg",
								"https://is2-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/58/0a/db/580adb25-53c7-6169-e71b-9b022b398e1c/508b5c7a-45e6-4b41-a8d7-4efc0253ab8e_1242x2688_LC_Ipad_07_English.png/300x0w.jpg"
							],
							"datePublished": "12 feb 2022",
							"offers": {
								"@type": "Offer",
								"price": 0,
								"priceCurrency": "MXN",
								"category": "free"
							}
						}
					`}}></script>
				}
				schema2={
					<script type="application/ld+json" dangerouslySetInnerHTML={{__html:`
						{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Dónde surtir mi tienda de abarrotes?","acceptedAnswer":{"@type":"Answer","text":"Si te preguntas “¿Dónde y cómo puedo surtir mi tienda?” cada vez que te falta algún producto, la respuesta es sencilla: con Rabbit®. Ya sea que descargues nuestra App o que hagas el pedido con los Aliados Rabbit."}},{"@type":"Question","name":"¿Dónde está mi pedido?","acceptedAnswer":{"@type":"Answer","text":"En cuanto recibimos tus pedidos, comenzamos a procesarlos para que lleguen a la puerta de tu tienda. Nuestro horario de entrega es de 8 a 19 horas, de la fecha que hayas seleccionado recibir tu pedido. En caso de no haberlo recibido en este horario, por favor contáctanos para ayudarte a solucionar la situación."}},{"@type":"Question","name":"Costo de envío","acceptedAnswer":{"@type":"Answer","text":"¡Estás a un click de llevar al siguiente nivel tu tienda! Podrás obtener envío gratis en todas tus compras mayores a $500 pesos. En caso contrario, el costo de envío será de $50 pesos.\n\nAdicional, te recomendamos estar al pendiente ya que un día a la semana te podremos ofrecer envío gratis ¡en compras desde $200 pesos!"}},{"@type":"Question","name":"Tiempos de envío","acceptedAnswer":{"@type":"Answer","text":"¡Con Rabbit® tu eliges cuando recibir tus pedidos! Podemos entregarte en 24 horas después de haber realizado tu compra o en la fecha que tu decidas."}},{"@type":"Question","name":"Mi pedido llegó incompleto","acceptedAnswer":{"@type":"Answer","text":"Lamentamos la mala experiencia, ayúdanos a reportar inmediatamente vía WhatsApp a este número: 55 7908 7880 o escríbenos al correo electrónico: contacto@rabbitmx.com"}},{"@type":"Question","name":"Me cobraron de más","acceptedAnswer":{"@type":"Answer","text":"Favor de reportar inmediatamente vía WhatsApp a este número: 55 7908 7880 o escríbenos al correo electrónico: contacto@rabbitmx.com"}},{"@type":"Question","name":"Recibí un producto en mal estado","acceptedAnswer":{"@type":"Answer","text":"Lamentamos la mala experiencia, por el momento no tenemos habilitada la opción de devoluciones, te sugerimos que en tus próximos pedidos, los revises a detalle en el momento de la entrega y si algo no te pinta bien, ¡En ese instante puedes devolverlos sin problema!"}},{"@type":"Question","name":"Deseo cancelar mi pedido","acceptedAnswer":{"@type":"Answer","text":"Lamentamos tu decisión de cancelar el pedido.\n\nPara hacer la cancelación de tu pedido, considera que en cuanto recibamos el alta de tu pedido, comenzamos a procesarlo para que llegue a la puerta de tu tienda en 24 horas*, por lo tanto, no podemos cancelarlo después de las 6:00 pm, del día antes seleccionado para la entrega.\n\nSigue estos pasos para la cancelación de tu pedido:\n\nDirígete al Menú Principal de tu App Rabbit®\n\nSelecciona Mis pedidos\n\nBusca y da click en el pedido que deseas cancelar (recuerda que debe ser antes de las 6:00 pm, del día antes de la entrega)\n\nDirígete al final de la información del pedido\n\nElige la opción Cancelar pedido\n\nDa click en Sí, cancelar pedido\n\nUna vez solicitada la cancelación de tu pedido, recibirás un correo con la confirmación de la cancelación\n\nRecuerda: En caso de haber solicitado factura ésta también quedará cancelada."}},{"@type":"Question","name":"Políticas de devolución","acceptedAnswer":{"@type":"Answer","text":"Recuerda que únicamente podrás devolver los productos al momento de la entrega, por ello es muy importante que revises a detalle tus productos. En caso de requerir algún tipo de ayuda contáctanos por Chat y uno de nuestros Aliados te ayudará a resolver el malentendido lo más pronto posible."}},{"@type":"Question","name":"Deseo Actualizar mis datos","acceptedAnswer":{"@type":"Answer","text":"Ayúdanos enviando un correo a: holarabbit@rabbitmx.com con los siguientes datos:\n\nCorreo electrónico registrado en la aplicación\n\nNúmero de teléfono registrado en la aplicación\n\nNombre de la tienda\n\nY descríbenos que datos son los que te interesa actualizar y uno de nuestros Aliados te ayudará lo más pronto posible."}},{"@type":"Question","name":"¿Cómo me registro?","acceptedAnswer":{"@type":"Answer","text":"¡Estás a un click de darle a tu tienda el salto que necesita! Con Rabbit® abrir tu cuenta está de volada. Sigue los pasos y dentro de unos minutos podrás darle a tu tienda el salto que necesita y recibir pedidos cuando tu elijas.\n\nDescarga e ingresa a la App Rabbit®\n\nIngresa tu número de teléfono y verifícalo\n\nIngresa tu correo y genera una contraseña. Da click en Crear cuenta\n\nTe enviaremos un correo para verificar tu cuenta, recuerda revisar tu carpeta de no deseados o SPAM\n\n¡Listo! Ya creaste tu cuenta Rabbit® ahora verifiquemos tu cobertura para poderte enviarte tus pedidos\n\nIngresa tu Código postal para validar tu cobertura. Da click en Continuar\n\nSi ya eres cliente Rabbit® puedes ingresar de manera opcional tu número de cliente; da click en Continuar\n\nSelecciona la ubicación de tu tienda en el mapa; ¡Esta será la dirección donde enviaremos tus pedidos!\n\nIntroduce el nombre de tu tienda y el giro que más se acople a tu negocio. Por ejemplo: abarrotes, cremería, dulcería, entre otras. Da click en Continuar\n\n¡Felicidades! Así de fácil es registrarte para poder abastecer tu tienda\n\n¡Ya puedes comprar en nuestra App Rabbit® con promociones, envíos gratis y en 24 horas!*"}},{"@type":"Question","name":"Métodos de pago","acceptedAnswer":{"@type":"Answer","text":"En Rabbit® puedes hacer tus compras pagando en efectivo contra entrega"}},{"@type":"Question","name":"No me descontaron un cupón","acceptedAnswer":{"@type":"Answer","text":"Lamentamos mucho que hayas tenido inconvenientes al momento de ingresar el cupón de descuento, por favor ayúdanos a verificar estos puntos para encontrar la solución:\n\nDirígete al Menú principal de la App Rabbit®\n\nSelecciona la opción Mis cupones. En este apartado encontrarás los cupones que tienes disponibles.\n\nConsulta los Términos y Condiciones del cupón que deseas utilizar.\n\nSi la compra que realizaste cumple con los Términos y Condiciones, por favor escríbenos a holarabbit@rabbitmx.com, incluyendo en el cuerpo del correo el número de pedido que te proporcionamos al momento de tu compra y describe brevemente la situación.\n\nNos comunicaremos contigo para darte una solución. ¡Estamos para ayudarte!"}},{"@type":"Question","name":"Facturación de pedidos","acceptedAnswer":{"@type":"Answer","text":"Recuerda que solo podrás solicitar la factura de tus pedidos durante el mes en curso de la fecha en que realizaste el pedido:\n\nMientras estás realizando tus compras y cuando confirmas tu forma de pago podrás encontrar una opción de “solicitar factura” y deberás ingresar tus datos:\n\nRazón social\n\nRFC\n\nTipo de Facturación\n\nUso de la factura\n\nPara facturar pedidos después de haberlos solicitado:\n\nDirígete al menú principal de la aplicación\n\nElige la opción Mis pedidos\n\nSelecciona el pedido que deseas facturar\n\nVe al final de la pantalla y encontrarás la opción para solicitar factura e ingresa tus datos\n\nImportante: ¡tu factura llegará por correo electrónico después de la entrega de tus productos!"}},{"@type":"Question","name":"No me llegó mi factura","acceptedAnswer":{"@type":"Answer","text":"Enviar correo: facturación@rabbitmx.com con el número de folio de compra y fecha solicitud de factura.\n\nUn asesor le dará respuesta con un plazo máximo de 2-3 días con el estatus de la facturación.\n\nLa factura estará llegando al buzón de su usuario y correo electrónico."}},{"@type":"Question","name":"Quiero refacturar","acceptedAnswer":{"@type":"Answer","text":"Enviar correo: holarabbit@rabbitmx.com con el número de folio de compra, fecha solicitud de factura, Factura en PDF y XML. Con los siguientes datos fiscales:\n\nNombre\n\nDomicilio\n\nRFC\n\nEstado\n\nMunicipio/Alcaldía\n\nTeléfono de contacto, correo electrónico y nombre de la tienda (asegúrate que sean igual a como los registraste).\n\nNuestro servicio al cliente procesará la solicitud con un plazo máximo de respuesta de 3-5 días\n\nLa factura nueva estará llegando al buzón de su usuario y correo electrónico."}},{"@type":"Question","name":"Promociones","acceptedAnswer":{"@type":"Answer","text":"¡Las mejores ofertas para surtir tu tienda están en Rabbit®! Desde la App Rabbit® podrás encontrar: cupones, promociones ¡y envíos gratis*!\n\nPara encontrar las promociones sigue estos pasos:\n\nEncuentran en el Menú Principal el botón Mis Cupones, en donde podrás conocer las promociones disponibles que te dan descuentos en productos dentro de la App Rabbit®\n\nPara hacer válido un cupón, sigue estos pasos:\n\nEn la sección Mis Cupones, puedes dar click en Copiar cupón\n\nInicia el proceso de compra\n\nCuando tu carrito de compras esté listo, ingresa a la pantalla Confirmar el pedido, da click en Continuar y pega el cupón en el apartado Cupón. Da click en Aplicar\n\nLa App Rabbit® te indicará si el cupón es válido para esta compra, de ser así, da click en Continuar. Si la App te indica que este cupón no es válido, te sugerimos revisar los Términos y Condiciones, que se encuentran dentro de la App Rabbit®\n\n¡Estás a un salto! Da click en Continuar y comenzaremos a preparar tu pedido\n\nSi la compra se realizó de forma exitosa en la pantalla podrás leer el mensaje ¡Orden recibida! Te compartiremos tu número de pedido y en breve recibirás el correo electrónico de confirmación\n\nTodas las promociones tienen vigencia y restricciones; para saber más ingresa a nuestra sección de Términos y Condiciones.\n\n¡Sigue abasteciendo tu tienda desde el celular; con las marcas más top y a excelentes precios!"}},{"@type":"Question","name":"¿Cómo hacer un pedido?","acceptedAnswer":{"@type":"Answer","text":"¡Surtir tu negocio desde la App Rabbit® es muy fácil! ¡Recuerda que tu eliges cuando recibir tus pedidos!\n\nSigue estos sencillos pasos:\n\nDesde el Menú Principal, da click en la categoría que deseas\n\nSe desplegarán todos los productos de esa categoría\n\nDa click en cualquier producto que deseas comprar\n\nDentro de cada producto, encontrarás la descripción, el costo y el precio sugerido de venta a tus clientes\n\nDa click en Agregar\n\nTodos los productos que agregues se irán cargando a tu carrito de compra\n\nDa click en tu carrito para iniciar con el proceso de pago\n\nSelecciona la fecha de entrega de tu pedido. Da click en Continuar\n\nSelecciona la forma de pago y da click en Continuar\n\nConfirma los datos de tu pedido y da click en Realizar pedido\n\nRecibirás un mail con la confirmación de tu compra\n\n¡Felicidades! Tu orden fue recibida y pronto llegará hasta la puerta de tu tienda. ¡Sigue abasteciendo tu tienda desde el celular con marcas líderes!"}},{"@type":"Question","name":"¿Dónde encuentro mi historial de pedidos?","acceptedAnswer":{"@type":"Answer","text":"Dirígete al Menú Principal de la App Rabbit®\n\nSelecciona la opción Mis pedidos. En este apartado, podrás encontrar todos los pedidos que has realizado en tu App Rabbit® y dar seguimiento a la fecha de entrega de tus pedidos en curso.\n\n"}},{"@type":"Question","name":"Haz pedidos desde la aplicación","acceptedAnswer":{"@type":"Answer","text":"¡Hacer un pedido desde tu App Rabbit®, es muy fácil! Sigue estos sencillos pasos:\n\nDesde la pantalla principal, da click en la categoría que deseas abastecer tu tienda. Se desplegarán todos los productos de esa categoría\n\nDa click en el producto que sea de tu interés\n\nDentro de cada producto, encontrarás la descripción, el costo y el precio sugerido de venta a tus clientes\n\nDa click en Agregar\n\nTodos los productos que agregues se irán cargando a tu carrito de compra\n\nDa click en tu carrito para proceder con el envío\n\nSelecciona el día de entrega de acuerdo con tus preferencias. Da click en Continuar\n\nSelecciona la forma de pago. Da click en Continuar\n\nConfirma los datos de tu pedido y da click en Realizar pedido\n\n¡Felicidades! Tu orden fue recibida y pronto llegará hasta la puerta de tu tienda"}},{"@type":"Question","name":"Cancelar pedidos","acceptedAnswer":{"@type":"Answer","text":"Lamentamos tu decisión de cancelar el pedido.\n\nPara hacer la cancelación de tu pedido, considera que en cuanto recibamos el alta de tu pedido, comenzamos a procesarlo para que llegue a la puerta de tu tienda en 24 horas*, por lo tanto, no podemos cancelarlo después de las 6:00 pm, del día antes seleccionado para la entrega.\n\nSigue estos pasos para la cancelación de tu pedido:\n\nDirígete al Menú Principal de tu App Rabbit®\n\nSelecciona Mis pedidos\n\nBusca y da click en el pedido que deseas cancelar (recuerda que debe ser antes de las 6:00 pm, del día antes de la entrega)\n\nDirígete al final de la información del pedido\n\nElige la opción Cancelar pedido\n\nDa click en Sí, cancelar pedido\n\nUna vez solicitada la cancelación de tu pedido, recibirás un correo con la confirmación de la cancelación\n\nRecuerda: En caso de haber solicitado factura ésta también quedará cancelada."}},{"@type":"Question","name":"Cancelar pedidos","acceptedAnswer":{"@type":"Answer","text":"¡Da el salto que tu tienda necesita! La App Rabbit® es una plataforma digital, propiedad de Rabbit® que está a disposición de sus clientes para que puedan encontrar, elegir y adquirir los productos que necesitan para surtir su tienda."}},{"@type":"Question","name":"Uso de Datos personales","acceptedAnswer":{"@type":"Answer","text":"Para Rabbit la protección de sus Datos Personales es muy importante, por ello te invitamos a que conozcas nuestro Aviso de Privacidad en https://rabbitmx.com/aviso-de-privacidad"}}]}
					`}}></script>
				}
			>
				<div className="marketplace">
					<div className="hero is-halfheight page-hero has-dot-background">
						<div className="container">
							<nav className="breadcrumb">
								<Breadcrumbs rootLabel="Inicio"  activeItemClassName="is-active" />
							</nav>
						</div>
						<div className="hero-body">
							<div className="container">
								<div className="columns is-vcentered">
									<div className="column is-half rmvPad">
										<Swiper
											spaceBetween={0}
											slidesPerView={1}
											autoplay={{
												"delay": 15000,
												"disableOnInteraction": false
											}}
											pagination={{ "clickable": true }}
											navigation={false}
										>
												<SwiperSlide>
													<div className="cont-info">
														<h2><strong>App Rabbit® es la solución perfecta para surtir tu tienda sin salir de ella</strong></h2>
														<p>Con tu <span>App Rabbit®</span> podrás hacer tu pedido a cualquier hora en cualquier lugar y recibir tus productos en 24 horas*.</p>
														<p>Ten tu tienda bien surtida con nuestro <span>amplio portafolio de productos</span>, elegidos especialmente para las tiendas de abarrotes mexicanas</p>
														<p>Haz <span>pedidos los 365 días del año</span> y las 24 horas del día.</p>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="cont-info">
														<h2><strong>No salgas de tu tienda para ir a surtirla</strong></h2>
														<p>Con Rabbit® podrás <span>abastecer tu negocio</span> desde tu celular y recibir tus pedidos al día siguiente.*</p>
													</div>
												</SwiperSlide>
										</Swiper>
									</div>
									<div className="column is-half rmvPad">
										<div className="marketplaceAnimationCont">
											<div className="image mp-item-phone">
												<Image src="/instala-app-rabbit.webp" alt="La App Rabbit® para tu tienda de abarrotes" title="instala-app-rabbit" loading="lazy" width="600" height="600" />
											</div>
											<div className="image mp-item">
												<Image src="/productos-de-limpieza-del-hogar-app-rabbit.webp" alt="Productos de limpieza para el hogar en tu tienda"  loading="lazy" width="600" height="600"/>
											</div>
											<div className="image mp-item">
												<Image src="/productos-de-abarrotes-para-tienda.webp" alt="Productos de abarrotes para tu tienda"  loading="lazy" width="600" height="600"/>
											</div>
											<div className="image mp-item">
												<Image src="/surtimos-botanas-para-tu-tienda.webp" alt="Surtimos botanas para tu tienda de abarrotes"  loading="lazy" width="600" height="600"/>
											</div>
											<div className="image mp-item">
												<Image src="/productos-de-higiene-app.webp" alt="Surtimos productos de higiene personal para tu tienda"  loading="lazy" width="600" height="600"/>
											</div>
											<div className="image mp-item">
												<Image src="/bebidas-para-tu-tienda-app.webp" alt="Abastece tu tienda con bebidas con App Rabbit®"  loading="lazy" width="600" height="600"/>
											</div>
											<div className="image mp-item">
												<Image src="/medicamentos-para-tu-tienda.webp" alt="Surte tu tienda de medicamentos con Rabbit®"  loading="lazy" width="600" height="600"/>
											</div>
										</div>
										<div className="cont-info mt-5 mb-5">
											<div className="download">
												<div className="buttons is-centered">
													<Link href='https://rabbitmx.onelink.me/rfY7/kpvu1zx9'>
														<a className="downloadAppGtag" target="_blank" onClick={() => {
															gtag('event', 'download', {
																'TheEventAction': 'click',
															});
															gtag('event', 'conversion', {'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso'});
														}}>
															<div className="image">
																<Image 
																	src="/descarga-app-rabbit-en-googleplay-android.svg"
																	alt="Instala la App Rabbit para tu tienda de abarrotes en tu Android"
																	title="Instala Rabbit en tu celular"
																	loading="lazy"
																	width="120"
																	height="40"
																/>
															</div>
														</a>
													</Link>
													<Link href='https://rabbitmx.onelink.me/rfY7/kpvu1zx9'>
														<a className='downloadAppGtag' target="_blank" onClick={() => {
															gtag('event', 'download', {
																'TheEventAction': 'click',
															});
															gtag('event', 'conversion', {'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso'});
														}}>
															<div className="image">
																<Image 
																	src="/descarga-app-rabbit-en-appstore-iphone.svg"
																	alt="Instala la App Rabbit para tu tienda en tu iPhone"
																	title="Instala la App Rabbit para tu tienda de abarrotes en tu iPhone"
																	loading="lazy"
																	width="120"
																	height="40"
																/>
															</div>
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-sec-4 has-elipse-elements">
						<div className="elipse-1"></div>
						<div className="elipse-2"></div>
						<div className="elipse-3"></div>
						<div className="elipse-4"></div>
						<div className="container">
							<div className="has-text-centered">
								<h1><strong>Aprovecha los beneficios que tu App Rabbit® tiene para ti</strong></h1>
							</div>
							<div className="columns is-vcentered">
								<div className="column is-6">
									<div className="cont-info">
										<ul className="rabbit-list has-text-left">
											<li><p>Descarga la <span>App Rabbit®</span> en la Play Store para dispositivos Android o App Store para iOS y da el salto que tu tienda necesita.</p></li>
											<li><p>Puedes pedir tus <span>productos de abarrotes cuando quieras</span> los 365 días del año, las 24 horas del día desde tu celular*.</p></li>
											<li><p>Tenemos disponible un <span>amplio catálogo de marcas</span> que puedes comprar para surtir tu tienda de abarrotes desde tu negocio.</p></li>
											<li><p>Nuestros Aliados Rabbit® <span>están disponibles para asesorarte en cualquier momento</span> si tienes alguna duda de la App Rabbit®.</p></li>
										</ul>
										<div className="download">
											<div className="buttons">
												<Link href='https://rabbitmx.onelink.me/rfY7/p7zwdtik'>
													<a className='downloadAppGtag' target="_blank" onClick={() => {
														gtag('event', 'download', {
															'TheEventAction': 'click',
														});
														gtag('event', 'conversion', {'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso'});
													}}>
														<div className="image">
															<Image 
																src="/descarga-app-rabbit-en-googleplay-android.svg"
																alt="Instala la App Rabbit para tu tienda de abarrotes en tu Android"
																title="Instala Rabbit en tu celular"
																loading="lazy"
																width="120"
																height="40"
															/>
														</div>
													</a>
												</Link>
												<Link href='https://rabbitmx.onelink.me/rfY7/p7zwdtik'>
													<a className='downloadAppGtag' target="_blank" onClick={() => {
														gtag('event', 'download', {
															'TheEventAction': 'click',
														});
														gtag('event', 'conversion', {'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso'});
													}}>
														<div className="image">
															<Image 
																src="/descarga-app-rabbit-en-appstore-iphone.svg"
																alt="Instala la App Rabbit para tu tienda en tu iPhone"
																title="Instala la App Rabbit para tu tienda de abarrotes en tu iPhone"
																loading="lazy"
																width="120"
																height="40"
															/>
														</div>
													</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="column is-6">
								{/* <Image width="643px" height="362px" className="" src="/RABBIT_123_282X500 copy.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy"/> */}
									<VideoPlayer src="https://www.youtube.com/watch?v=rokuQ6iMcpc" thumbnail="/app-rabbit-video-thumbnail.webp" altThumb="Descarga la App de Rabbit® y conoce nuestro catálogo"/>
								</div>
							</div>
						</div>
					</div>

					<div className="has-dot-background">
						<div className="container">
							<div className="cont-info has-text-centered">
								<h3><strong>En la App Rabbit® encontrarás un gran portafolio de marcas</strong></h3>
								<p>¡Para que tu tienda siempre esté bien surtida!</p>
								<p>Pide los productos abarroteros que necesitas para que puedas decir: ¡Aquí sí hay, joven!</p>
							</div>
							<Brands />
							<div>
								<div className="cont-info has-text-centered">
									<h3><strong>Surte tu tienda desde nuestra App Rabbit®</strong></h3>
									<p>Surte tu tienda de abarrotes desde la App Rabbit®. Si quieres <span>surtir tu tienda desde la palma de tu mano</span> a cualquier hora, en cualquier lugar, los 365 días del año, tan solo tienes que descargar la App Rabbit®. Crea una cuenta con nosotros y disfruta de grandes beneficios para tu negocio.</p>
									<h3>Conoce cómo y comienza hoy.</h3>
								</div>
								<VideoPlayer src="https://www.youtube.com/watch?v=TH6hgmIm44o&t=9s" thumbnail="/registro-app-rabbit.webp" altThumb="Conoce como dar de alta tu tienda en la App de Rabbit®"/>
							</div>
						</div>
					</div>

					<div className="section-grad">
						<div className="container rmvPad">
							<div className="columns is-vcentered">
								<div className="column">
									<div className="cont-info">
										<h3><strong>En el crecimiento de tu negocio no estás solo ¡Contáctanos!</strong></h3>
										<p>Da el salto que tu tienda necesita. Cuéntanos tus dudas y nos pondremos en contacto contigo para brindarte el mejor servicio y asesoría.</p>
										<div className="buttons">
											<Link href="/contacto" passHref>
												<button className="button third">Contacto</button>
											</Link>
										</div>
									</div>
								</div>
								<div className="column">
									<div className="image">
										<Image
											src="/aliado-rabbit-crecimiento.webp"
											alt="Contáctanos y da el salto en tu tienda"
											title="aliado-rabbit-crecimiento"
											width="489"
											height="660"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<FAQS />

					<div className="disclaimer">
						<div className="container">
							<p>*Consulta <Link href="/terminos-y-condiciones">Términos y Condiciones</Link></p>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}