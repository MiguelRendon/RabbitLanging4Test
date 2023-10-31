import Dymamic from 'next/dynamic';
import {useState} from 'react';
import PropTypes from 'prop-types';
const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const Image = Dymamic(import("next/image"))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))
const Brands = Dymamic(import("../components/Brands"))
const Brands2 = Dymamic(import("../components/brands2"))
const FAQS = Dymamic(import("../components/FAQS-Terminal"))

// crear faqs independientes
const VideoPlayer = Dymamic(import("../components/VideoPlayer"))


import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Pagination, Navigation, Autoplay])




export default function TerminalRabbit() {


	const [counter,setCounter] = useState('');
	const [val, setVal] = useState('');
	
	const  coviertetexto = (e) =>{

		setCounter(e.target.value)
		

	}
	

	return (
	
		<>
			<Layout 
			title="¡Da el salto con la Terminal de Pago Rabbit® México!"
			description="¡Amplía tu tienda de abarrotes con la Terminal de pago Rabbit®! Acepta pagos con Tarjeta de Crédito, Débito y Vales de Despensa ¡Obtén tu Terminal Rabbit®!"
			keyWords="terminal de pago,tienda de abarrotes,	terminal de pago, tarjeta de crédito, vales de despensa, acepta pagos con tarjeta."
			>
				<div className="marketplace">
					<div className="hero is-halfheight page-hero2">
						<div className="container">
							<nav className="breadcrumb">
								<Breadcrumbs rootLabel="Inicio"  activeItemClassName="is-active" />
							</nav>
						</div>
						<div className="hero-body2">
							<div className="container">
								<div className="columns is-vcentered">
									<div className="column is-half rmvPad">
												<div className="cont-info">
														<h2><strong>¡Dale el salto a tu tienda con la Terminal Rabbit®!</strong></h2>
														
														<p>Atrae nuevos clientes al aceptar <span>tarjetas de Débito, Crédito y Vales</span></p>
														<p>Recibe tus ganancias en  <span>24 horas*</span></p>
													

													
													</div>
													<div className="disclaimer">

													<p>*El depósito se realizará dentro de las 24 hrs del día hábil bancario siguiente</p>
													</div>
													
													<div className="buttons">
										<Link href="/contrato-de-procesamiento-de-transacciones">
											<a className="button primary">¡Consulta Términos y Condiciones aquí!</a>
										</Link>
									</div>


												
									</div>
									<div className="column is-half rmvPad">
										
										<div className="contenido-terminal">
											
											<div className="image">
												
												<Image src="/img-terminal-rabbit.webp" alt="" title="" loading="lazy" width="700" height="700"  />
											</div>
											<div className="image mp-item">
							
											
											</div>
											<div className="image mp-item">
												
											
											</div>
											<div className="image mp-item">
											
											</div>
											<div className="image mp-item">
											</div>
											<div className="image mp-item">

											</div>
											<div className="image mp-item">
												{/* <Image src="/medicamentos-para-tu-tienda.png" alt="Surte tu tienda de medicamentos con Rabbit®"  loading="lazy" width="600" height="600"/> */}
											</div>
										</div>
										<div className="cont-info mt-5 mb-5">
											<div className="download">
												<div className="buttons is-centered">
													<Link href='https://rabbitmx.onelink.me/rfY7/kpvu1zx9'>
														<a className="downloadAppGtag" target="_blank" onClick={() => {
															
														}}>
															<div className="image">
																<Image 
																	src="/descarga-app-rabbit-en-googleplay-android.svg"
																	alt="Instala la App Rabbit para tu tienda de abarrotes en tu Android"
																	title="Instala Rabbit en tu celular"
																	loading="lazy"
																	width="130px"
																	height="44px"
																/>
															</div>
														</a>
													</Link>
													<Link href='https://rabbitmx.onelink.me/rfY7/kpvu1zx9'>
														<a className='downloadAppGtag' target="_blank" onClick={() => {
			
														}}>
															<div className="image">
																<Image 
																	src="/descarga-app-rabbit-en-appstore-iphone.svg"
																	alt="Instala la App Rabbit para tu tienda en tu iPhone"
																	title="Instala la App Rabbit para tu tienda de abarrotes en tu iPhone"
																	loading="lazy"
																	width="130px"
																	height="44px"
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
						{/* <div className="elipse-1"></div>
						<div className="elipse-2"></div>
						<div className="elipse-3"></div>
						<div className="elipse-4"></div> */}
						<div className="container">
							<div className="has-text-centered">
							<h2><strong> ¡Con Rabbit® todas estas marcas llegarán a tu tienda!</strong></h2>
							<p>Ahora podrás aceptar diferentes tipos de pago y ser el favorito de la colonia.</p>
							<Brands2></Brands2>
							{/* <div className="image">
																
															</div> */}
								
															
							</div>
							<div className="disclaimer">
															<p >Las marcas mencionadas son de la exclusiva titularidad de quien detenta su registro*</p>
							</div>



							<div className="columns is-vcentered espacio">
								<div className="column is-6">
									<div className="cont-info">
									<h2><strong>¡Aquí aprenderás el paso a pasito de cómo activar tu Terminal Rabbit®!</strong></h2>
								
										
										<div className="buttons">
									
											{/* <p >*Consulta Términos y Condiciones</p> */}
											
												<p><Link href="/contrato-de-procesamiento-de-transacciones">*Consulta Términos y Condiciones</Link></p>
											
									
											<Link href="https://apps.apple.com/MX/app/id1608218188?mt=8">
												<a className="button primary margin-left">Adquiere tu Terminal Rabbit®</a>
											</Link>
						
										</div>
									</div>
								</div>
								<div className="column is-6">
									<VideoPlayer src="https://www.youtube.com/watch?v=z-122gD-pl0" thumbnail="/video-terminal-rabbit-thumbnail-home.webp" altThumb="Descarga la App de Rabbit® y conoce nuestro catálogo"/>
								</div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="container">
							<div className="cont-info has-text-centered espaciomedio">
							<h3><strong>Es pequeña y fácil de llevar, así podrás usarla donde quieras</strong></h3>
							
							</div>
							
							<div className='columns'>	
							<div className='column is-8'>
							<Image 
																	src="/PropuestaV2.png"
																	
																	alt="Instala la App Rabbit para tu tienda de abarrotes en tu Android"
																	title="Instala Rabbit en tu celular"
																	loading="lazy"
																	width="950"
																	height="600"
																/>
							</div>
			                   
							<div className='column is-4 superior has-text-centered'>
							<h4 className="mt-4"><strong  className='has-text-principal-color-2'>Batería:</strong></h4>
							
							<p>Batería de larga duración para que no te quedes sin pila en los momentos clave.</p>
						
								<h4 className="mt-1 "><strong className='has-text-principal-color-2'>Bluetooth:</strong></h4>
							
							<p>No necesitas preocuparte por los cables, se conecta directo a tu teléfono por Bluetooth.</p>
							
							</div>



								<div className="cont-info has-text-centered">
									<h2><strong> Ponte buzo, calcula aquí la comisión del 3.6%</strong></h2>
									</div>
									<div className='container'>
									<div className="cont-info ">
								<div className='columns'>
								<div className='column is-2'></div>


								<div className='column is-8'>

								<table className="table simulador">

  <tbody className='bush round'>
    <tr className='cont-info round'>
    
      <td className='subtitle round'>
	  <tr>
		
	  <div className='disclaimer izquierda round'> <p className='texto'> Monto a cobrar</p></div>
	  <p className='entrada'>
	
 <input type="number" id="inputComision" autoComplete='off' className='input form-control' placeholder='$' value={counter}  onChange={coviertetexto} />
    </p>

	 

	
	  </tr>
	  
	  
	  <tr>
	  <div className='disclaimer izquierda round'> <p className='texto'> Monto de la comisión</p></div>
	  <div className='comison round'><p className='comision'> 3.6%</p></div>
	  </tr>
	  <tr >
	  <div className="buttons padding-b">
		<button className="button primary"  onClick= { () => {
				
					let aux= parseInt(counter)
					let value= aux;
					aux = (aux /100) ;
					let percent=  aux * 3.6;
					let result= value - percent;
					setVal(result);
					setCounter('')

						}
					
		}>Calcular</button>
		</div>
	  </tr>
	  <tr></tr>
		</td>
      <td className='subtitle has-text-centered blue-side round'>

		<tr className='has-text-centered image mitem round'>
		<img src="/home.svg" className='imagenpe'  width="500" height="500" alt="Terminal Rabbit" title="Terminal Rabbit" loading="lazy"/>
		</tr>

		<tr className='padding-b'>
		<div className='disclaimer'><p className='texto text-w'> tu recibirás</p></div>
		<div className=''><p className='total '>$ {val}</p></div>
		<div><p className='text-disclaimer'>Recibe pagos de tarjeta de Débito, Crédito y Vales. Te depositamos tus ganancias en 24 horas* </p></div>
		</tr>
		</td>
		
    </tr>
   
    
  </tbody>
</table>
								</div>
								</div>
								</div>
								</div>
								{/* acaba */}


								<div className="cont-info has-text-centered">
									<h3><strong>La Terminal Rabbit® es el salto que tu tienda necesita </strong></h3>
									<p><strong>Conoce cómo e inicia hoy</strong></p>
								</div>
								<VideoPlayer src="https://www.youtube.com/watch?v=AL-VRMlX60Y" thumbnail="/video-terminal-rabbit-thumbnail.webp" altThumb="Rabbit®"/>
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
											src="/aliado-rabbit-crecimiento.png"
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