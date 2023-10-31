import Dymamic from 'next/dynamic'
const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const ProductCard = Dymamic(import('../components/ProductCard'))
const Path = Dymamic(import('../components/Path'))
const VideoPlayer = Dymamic(import('../components/VideoPlayer'))
const Image = Dymamic(import("next/image"))


import React, { useEffect } from 'react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import { gsap, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

SwiperCore.use([Pagination, Navigation, Autoplay])
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const item = document.querySelectorAll('.home-section-hero .home-hero-transition-item-1');
			const tl = gsap.timeline()
			tl.from(item, {
				y: 50,
				duration: 0.6,
				opacity: 0,
				stagger: 0.3
			});
		}
	}, [])

	useEffect(() => {
		if (window.innerWidth >= 768) {
			const title = document.querySelector('.path-cont-1 h1');
			const subtitle = document.querySelector('.path-cont-1 p');
			const path = document.querySelectorAll('.path-cont-1 .path');
			const pathText = document.querySelectorAll('.path-cont-1 .path .cont-info p');
			gsap.timeline({
				scrollTrigger: {
					trigger: '.path-cont-1',
					start: 'top center'
				}
			}).from(title, {
				y: 50,
				opacity: 0,
				duration: 0.4,
			}).from(subtitle, {
				y: 50,
				opacity: 0,
				duration: 0.4,
			}).from(path, {
				scale: 0,
				opacity: 0,
				duration: 0.4,
				stagger: 0.2,
				transformOrigin: "center",
				ease: Back.easeOut
			}).from(pathText, {
				y: 50,
				opacity: 0,
				duration: 0.4,
				stagger: 0.2
			})
		}
	})

	useEffect(() => {
		if (window.innerWidth >= 768) {
			const title = document.querySelector('.home-steps-transition-title');
			const subtitle = document.querySelector('.home-steps-transition-subtitle');
			const itemImage = document.querySelectorAll('.home-section-steps .path .image');
			const itemTitle = document.querySelectorAll('.home-section-steps .path .cont-info');
			gsap.timeline({
				defaults: {
					duration: 0.4,
				},
				scrollTrigger: {
					trigger: '.home-section-steps',
					start: 'top center',
				}
			}).from(title, {
				y: -20,
				opacity: 0,
			}).from(subtitle, {
				y: -20,
				opacity: 0,
			}).from(itemImage, {
				stagger: 0.2,
				scale: 0,
				transformOrigin: "center",
				ease: Back.easeOut
			}).from(itemTitle, {
				stagger: 0.2,
				y: -10,
				opacity: 0
			}, "-=0")
		}
	}, [])

	useEffect(() => {
		if (window.innerWidth >= 768) {
			const title = document.querySelector('.home-video-cont .cont-info')
			const item = document.querySelectorAll('.home-video-cont .video-container');

			gsap.timeline({
				scrollTrigger: {
					trigger: '.home-video-cont',
					start: 'top center',
				}
			}).from(title, {
				y: 50,
				opacity: 0,
				duration: 0.6
			}).from(item, {
				opacity: 0,
				duration: 0.6,
				stagger: 0.3
			})
		}
	})
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const title = document.querySelectorAll('.home-stockBusiness-transition-title');
			const item = document.querySelectorAll('.home-stockBusiness-transition-item');
			gsap.timeline({
				scrollTrigger: {
					trigger: '.section-stock',
					start: 'top center',
				}
			}).from(title, {
				y: 50,
				opacity: 0,
				duration: 0.4,
				stagger: 0.2
			})
				.from(item, {
					y: 50,
					opacity: 0,
					duration: 0.4,
					stagger: 0.3
				})
		}
	}, [])
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const item = document.querySelector('.home-supplyroute-transition-item');
			const image = document.querySelector('.home-supplyroute-transition-image');
			const image2 = document.querySelector('.home-supplyroute-transition-timeline')
			gsap.timeline({
				scrollTrigger: {
					trigger: '.home-section-route',
					start: 'top center',
				}
			}).from(item, {
				y: 10,
				duration: 0.4,
				opacity: 0,
			}).from(image, {
				scale: 0,
				duration: 0.3,
			}).from(image2, {
				opacity: 0,
				duration: 0.3
			}, "+=0.1")
		}
	}, [])
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const title = document.querySelector('.home-blog .has-text-centered p')
			const item = document.querySelectorAll('.home-blog .journal-note');
			gsap.timeline({
				scrollTrigger: {
					trigger: '.home-blog',
					start: 'top center',
				}
			}).from(title, {
				y: 50,
				opacity: 0,
				duration: 0.6
			}).from(item, {
				y: 50,
				opacity: 0,
				duration: 0.6,
				stagger: 0.3
			})
		}
	}, [])


	// Home Section Steps Parallax
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const elipse1 = document.querySelector('.home-section-steps .elipse-1');
			const elipse2 = document.querySelector('.home-section-steps .elipse-2');
			const elipse3 = document.querySelector('.home-section-steps .elipse-3');

			gsap.from(elipse1, {
				scrollTrigger: {
					trigger: '.home-section-steps',
					start: 'top bottom',
					scrub: 1.5
				},
				y: -100
			});
			gsap.to(elipse2, {
				scrollTrigger: {
					trigger: '.home-section-steps',
					start: 'top bottom',
					scrub: 2,
				},
				y: -100
			});
			gsap.to(elipse3, {
				scrollTrigger: {
					trigger: '.home-section-steps',
					start: 'top bottom',
					scrub: 1.3,
				},
				y: -100
			});
		}
	}, [])
	// Home Section Video Parallax
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const elipse1 = document.querySelector('.home-video-cont .elipse-1');
			const elipse2 = document.querySelector('.home-video-cont .elipse-2');
			const elipse3 = document.querySelector('.home-video-cont .elipse-3');
			gsap.from(elipse1, {
				scrollTrigger: {
					trigger: '.home-video-cont',
					start: 'top bottom',
					scrub: 1.5
				},
				y: -100
			});
			gsap.to(elipse2, {
				scrollTrigger: {
					trigger: '.home-video-cont',
					start: 'top bottom',
					scrub: 2,
				},
				y: -100
			});
			gsap.to(elipse3, {
				scrollTrigger: {
					trigger: '.home-video-cont',
					start: 'top bottom',
					scrub: 1.3,
				},
				y: -100
			});
		}
	}, [])
	//Home Section Stock Parallax
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const elipse1 = document.querySelector('.section-stock .elipse-1');
			const elipse2 = document.querySelector('.section-stock .elipse-2');
			const elipse3 = document.querySelector('.section-stock .elipse-3');
			const elipse4 = document.querySelector('.section-stock .elipse-4');

			gsap.from(elipse1, {
				scrollTrigger: {
					trigger: '.section-stock',
					start: 'top bottom',
					scrub: 1.2
				},
				y: -100
			});
			gsap.to(elipse2, {
				scrollTrigger: {
					trigger: '.section-stock',
					start: 'top bottom',
					scrub: 1.3,
				},
				y: -140
			});
			gsap.to(elipse3, {
				scrollTrigger: {
					trigger: '.section-stock',
					start: 'top bottom',
					scrub: 1.6,
				},
				y: 130
			});
			gsap.to(elipse4, {
				scrollTrigger: {
					trigger: '.section-stock',
					start: 'top bottom',
					scrub: 1,
				},
				y: -150
			});
		}
	}, [])

	//Home Section Route Parallax
	useEffect(() => {
		if (window.innerWidth >= 768) {
			const elipse1 = document.querySelector('.home-section-route .elipse-1');
			const elipse2 = document.querySelector('.home-section-route .elipse-2');

			gsap.from(elipse1, {
				scrollTrigger: {
					trigger: '.home-section-route',
					start: 'top bottom',
					scrub: 1.7
				},
				y: -100
			});
			gsap.to(elipse2, {
				scrollTrigger: {
					trigger: '.home-section-route',
					start: 'top bottom',
					scrub: 1.4,
				},
				y: -100
			});
		}
	}, [])
	return (
		<Layout
			title="¡Tu aliado para surtir tu tienda de abarrotes! Rabbit®"
			description="Conoce a los Aliados y App Rabbit® y surte tu tienda, también podrás aceptar tarjetas de Crédito, Débito y Vales de Despensa con la Terminal Rabbit®"
			keyWords="Rabbit,tienda de abarrotes, App Rabbit, vales de despensa, tarjeta de credito, Rabbit México"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
			schema={
				<script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `
					{
						"@context": "https://schema.org/",
						"@type": "SoftwareApplication",
						"name": "Rabbit: Surte tu tienda online",
						"aggregateRating": {
						"@type": "AggregateRating",
						"ratingValue": "3",
						"ratingCount": "67"
						},
						"applicationCategory": "SHOPPING",
						"operatingSystem": "ANDROID",
						"contentRating": "Apto para todo p˙blico",
						"author": {
						"@type": "Person",
						"name": "Rabbit MX",
						"url": "https://rabbitmx.com"
						},
						"description": "Surte tu tienda en lÌnea | EnvÌos sin costo y en 24* hrs | Cientos de productos",
						"image": "https://play-lh.googleusercontent.com/0QiDLSCi27NPxogOan3_KW0uIm_7EFZ0IlVfCkzLSR0zfxpLA-De1f-RvjpaFiV_Pg",
						"url": "https://play.google.com/store/apps/details/Rabbit_Surte_tu_tienda_online?id=com.rabbitmx.shopkeeper_app",
						"screenshot": [
							"https://play-lh.googleusercontent.com/rjNUvSW05xAocQ3Mrn5J2RVOdIfqcgRGd8ToMHihg9R5Ej5OmXJSp3Yc3zStZbj3osg=w526-h296-rw",
							"https://play-lh.googleusercontent.com/M_41hXai5YTAK1LvCpoq9ZgPAcQurhaDYdzYTBfLF9-Oh8Ogeh5HburLz_rmOeFUhKA=w526-h296-rw",
							"https://play-lh.googleusercontent.com/Ym3QCCpux-92ZAsTyBZ9tPwNoXcN4HqE0OaMJoHM1Nzmi2K9cA4fJ8EhfqS-_b4BmpA=w526-h296-rw",
							"https://play-lh.googleusercontent.com/QLRn4kChRy4Nkj9upK0w-0oMpcOSeyJvxyYn1LodqDhhsTl6fLPtV91cyfo9rkHJ8g=w526-h296-rw",
							"https://play-lh.googleusercontent.com/toab9RgSAYlX0z5QLNMVc_NkA_z2eUaPatBs_fiqq9VZxiJBWz8temftKl-dAWd5TxY=w526-h296-rw"
						],
						"datePublished": "18 jun 2022",
						"offers": {
							"@type": "Offer",
							"price": 0,
							"priceCurrency": "MXN",
							"category": "free"
						}
					}
				`}}></script>
			}
		>
			<section className="home-section-hero">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					autoplay={{
						"delay": 8000,
						"disableOnInteraction": false
					}}
					pagination={{ "clickable": true }}

					navigation={true}
				>
					<SwiperSlide>
						<div className="hero">
							<div className="image hero-background-2">
								<img width="1440px" height="689px" src="/Back_Precios para abajo_1440X689.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								{/* <Image width="1440px" height="689px" src="/rabbit-surtir-tiendas.png" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy"/> */}
							</div>
							<div className="hero-body">
								<div className='hero-precios-abajo'>
									<div className='contenedor-info-precios-abajo'>
										<img alt='' title='' width='600px' height='443px' src='/Elementos_Precios para abajo_600Xx.webp' loading='lazy' className='image-precios-abajo-top ' />

									</div>

									<div className='contenedor-info-precios-abajo top-precios-abajo'>
										<img alt='' title='' width='500px' height='574px' src='/Elementos_Precios para abajo_742X684.webp' loading='lazy' className='image-precios-abajo-bottom' />
										<Link href="https://apps.apple.com/MX/app/id1608218188?mt=8">
											<a className="button primary boton_enlace_precios_abajo" >
												Descarga la App Rabbit®
											</a>
										</Link>
									</div>





									{/* <img width="393px" height="482px" src="/banner_img1.png" alt="Surte tu tienda desde donde quieras con Rabbit®" title='aliado-rabbit-desde-tu-tienda' loading="lazy" className="image-banner"/> */}

								</div>

							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="hero">
							<div className="image hero-background">
								<Image src="/banner/Banner_top_fondo.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" layout='fill' />
							</div>
							<div className="hero-body">
								<div className='hero-horizontal'>
									<div className='hero-horizontal-top'>
										<Image width="746px" height="140px" alt="Surte tu tienda con las marcas más vendidas" title="Surte tu tienda con las marcas más vendidas" src="/banner/Banner_top_texto.webp" />
									</div>
									<div className='hero-horizontal-bottom'>
										<Image width="800px" height="458px" alt="Surte tu tienda con las marcas más vendidas" title="Surte tu tienda con las marcas más vendidas" src="/banner/Banner_top_productos.webp" />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="hero">
							<div className="image hero-background-2">
								<img width="1440px" height="689px" src="/Nanos_1440X689_Back copy.webp" alt="Plataforma mexicana para tenderos" title='rabbit-tienda-de-abarrotes' />
							</div>
							<div className="hero-body">
								<div className="container rmvPad">
									<div className='cont-horizontal'>
										<div className='content-img-text'>
											<p className='text-content-img'><strong>Surtir tu negocio</strong></p>
											<p className='text-content-img-green'><strong>Nunca había sido tan fácil</strong></p>
											<p className='text-content-img-subtitle'>Únete a Rabbit y descubre la nueva forma de surtir tu tienda de abarrotes </p>
										</div>
										<div className='content-img-bann'>
											<Image width="1046px" height="684px" src="/influencer_mago.webp" alt="Descarga la App Rabbit® y conoce sus beneficios" title='app-rabbit' objectFit='contain' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="hero">
							<div className="image hero-background">
								<img width="1440px" height="689px" src="/productos-abarrotes.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								{/* <Image width="1440px" height="689px" src="/rabbit-surtir-tiendas.png" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy"/> */}
							</div>
							<div className="hero-body">
								<div className="container rmvPad">
									<div className="columns is-vcentered">
										<div className="column">
											<div className="cont-info has-text-white">
												<h2><strong>Rabbit® te trae una nueva solución para tu tienda</strong></h2>
												<h3><strong>La Terminal Rabbit®</strong></h3>
												<p className='no-padding'>- Cobra tarjeta de <strong>Crédito, Débito y Vales.</strong></p>
												<p className='no-padding'>- <strong>3.6%</strong> de tasa.</p>
												<p className='no-padding'>- Depósito en <strong>24 hrs</strong>.</p>
												<p className='no-padding'>Entre más uses la Terminal Rabbit® tendrás más beneficios en tus compras en la App Rabbit®*</p>
												<p className='no-padding'>*Consulta Términos y Condiciones</p>
												<p className='no-padding'>*El depósito se realizará dentro de las 24 hrs del día hábil bancario siguiente</p>
												<div className="buttons">
													<Link href="/terminal-rabbit">
														<a className="button primary texto_grande" >Únete a Rabbit®</a>
													</Link>
												</div>
											</div>
										</div>
										<div className="column">
											<div className="image">
												<img width="393px" height="482px" src="/banner_img1.png" alt="Surte tu tienda desde donde quieras con Rabbit®" title='aliado-rabbit-desde-tu-tienda' loading="lazy" className="image-banner" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>



					{/* <SwiperSlide >
						<div className='hero-banner'>
							<div className='hero-text'>
								<p className='text-green'>Tómate una foto</p>								
								<p className='text-white'>¡Participa y gana!</p>								
								<p className='text-white-bold'>#RabbitFan</p>
								<p className='text-white-small'>Consulta Términos y Condiciones en rabbitmx.com</p>								


							</div>
							<div className='hero-img'>
								<img width="875px" height="707px" src="/tienda.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" className='img-banner-hero'/>
							</div>
						</div>
					</SwiperSlide> */}
					{/* <SwiperSlide >
						<div className="hero">
							<div className="image hero-background-2">
								<img width="1440px" height="800px" src="/Preview_cuaresma_1440X689_Back.webp" alt="" title="" loading="lazy" className='no-mask'/>
								
							</div>
						
							<div className="container columns-seller-center">
								<div className="image-seller-left">
									<Image width="594px" height="396px" src="/elementos_600_2.webp" alt="Gana premios para tu tienda de abarrotes con Mete Gol de Rabbit." title='Gana premios para tu tienda de abarrotes con Mete Gol de Rabbit.' loading="lazy" className='no-mask'/>
								</div>
								<div className="image-seller-right">
									<img width="742px" height="689px" src="/Personas_742X689.webp" alt="Tendero participa en la dinámica y gana premios para tu tiendita." title='Tendero participa en la dinámica y gana premios para tu tiendita.' loading="lazy" className='img-match-right'/>
									
								</div>
							</div>
						</div>
					</SwiperSlide> */}
					{/* cambios */}
					{/* <SwiperSlide >
						<div className="hero">
							<div className="image hero-background">
								<img width="1440px" height="689px" src="/fondo.webp" alt="Participa en la dinámica Mete Gol con Rabbit." title="Participa en la dinámica Mete Gol con Rabbit." loading="lazy" className='no-mask'/>
							</div>
							<div className="hero-body">
								<div className="container rmvPad">
									<div className="columns is-vcentered">
										<div className="column">
											<div className="cont-info has-text-white llegamos-queretaro">
												<div className="image-queretaro-texto">
													<Image width="400px" height="103px" src="/texto.webp" alt="Gana premios para tu tienda de abarrotes con Mete Gol de Rabbit." title='Gana premios para tu tienda de abarrotes con Mete Gol de Rabbit.' loading="lazy"/>
												</div>
												<div className="image-queretaro">
													<Image width="300px" height="287px" src="/mapa.webp" alt="Gana premios para tu tienda de abarrotes con Mete Gol de Rabbit." title='Gana premios para tu tienda de abarrotes con Mete Gol de Rabbit.' loading="lazy"/>
												</div>
												<div className="buttons">
														<Link href='https://rabbitmx.onelink.me/rfY7/v51tfvew'>
															<a className='downloadAppGtag' target="_blank" onClick={() => {
																gtag('event', 'download', {
																	'TheEventAction': 'click',
																});
																gtag('event', 'conversion', {'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso'});
															}}>
																<div className="image">
																	<Image width="120" height="40" src="/descarga-app-rabbit-en-googleplay-android.svg" alt="Instala la App Rabbit para tu tienda en tu Android" title="Instala Rabbit en tu celular" loading="lazy"/>
																</div>
															</a>
														</Link>
														<Link href='https://rabbitmx.onelink.me/rfY7/v51tfvew'>
															<a className='downloadAppGtag' target="_blank" onClick={() => {
																gtag('event', 'download', {
																	'TheEventAction': 'click',
																});
																gtag('event', 'conversion', {'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso'});
															}}>
																<div className="image">
																	<Image width="120" height="40" src="/descarga-app-rabbit-en-appstore-iphone.svg" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy"/>
																</div>
															</a>
														</Link>
														<Link href="/abastecimiento-presencial#descubre">
																<a className="button primary center">Consulta la cobertura </a>
														</Link>
													</div>
											</div>
										</div>
										<div className="column">
											<div className="image">
												<Image width="742px" height="684px" src="/Aliado_nuevo.webp" alt="Tendero participa en la dinámica y gana premios para tu tiendita." title='Tendero participa en la dinámica y gana premios para tu tiendita.' loading="lazy"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide> */}

					{/* <SwiperSlide>
						<div className="hero">
							<div className="image hero-background">
								<img width="1440px" height="689px" src="/DONAMAGO_1440X689_Back.webp" alt="Plataforma mexicana para tenderos" title='rabbit-tienda-de-abarrotes' />
							</div>
							<div className="hero-body">
								<div className="container rmvPad">
									<div className="columns is-vcentered">
										<div className="column">
											<div className="cont-info has-text-white">
												<h2><strong>La nueva forma de surtir tu tienda</strong></h2>
												<p>Con Rabbit®, tú decides cómo surtir tu tienda <br></br> Descarga la App Rabbit® y conoce todos los beneficios que tendrás surtiendo tu tienda desde tu celular.</p>
												<p>¡Da el salto que tu tienda necesita! </p>
												<div className="buttons">
													<Link href="/abastecimiento-en-linea-app">
														<a className="button primary">Descubre más</a>
													</Link>
												</div>
											</div>
										</div>
										<div className="column">
											<div className="image">
												<Image width="742px" height="684px" src="/Personas_742X684mago.webp" alt="Descarga la App Rabbit® y conoce sus beneficios" title='app-rabbit' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide> */}



					<SwiperSlide >
						<div className="hero">
							<div className="image hero-background">
								{/* <Image width="1440px" height="689px" src="/productos-tienda-de-abarrotes.webp" alt="Fortalece tu tienda de abarrotes con Rabbit®" title='productos-tienda-de-abarrotes' loading="lazy"/> */}
								<img width="1440px" height="689px" src="/productos-tienda-de-abarrotes.webp" alt="Fortalece tu tienda de abarrotes con Rabbit®" title='productos-tienda-de-abarrotes' loading="lazy" />
							</div>
							<div className="hero-body">
								<div className="container rmvPad">
									<div className="columns is-vcentered">
										<div className="column">
											<div className="cont-info has-text-white">
												<h2><strong>En Rabbit® somos tu aliado en el desarrollo de tu negocio</strong></h2>
												<p>Rabbit® es una plataforma 100% mexicana que busca fortalecer a las tiendas de la esquina y convertirlas en el punto de venta favorito de los mexicanos y así desarrollar e impulsar la economía del país.</p>
												<p>¡Con Rabbit®, da el salto que tu tienda necesita!</p>
												<div className="buttons">
													<Link href="/abastecimiento-presencial">
														<a className="button primary">Conoce más</a>
													</Link>
												</div>
											</div>
										</div>
										<div className="column">
											<div className="image">
												<Image width="742px" height="684px" src="/aliado-rabbit.webp" alt="Somos tu aliado para el desarrollo de tu tienda de abarrotes" title='aliado-rabbit' loading="lazy" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>

				</Swiper>
			</section>
			<section className="bg-prim-3">
				<div className='container'>
					<Swiper
						spaceBetween={0}
						slidesPerView={1}
						autoplay={{
							"delay": 8000,
							"disableOnInteraction": false
						}}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
						}}
						pagination={{ "clickable": true }}
						navigation={true}
					>
						{/* promo con link */}
						<SwiperSlide >
							<Link href="/catalogo-digital-feb2023.pdf">
								<a target="_blank">
									<div className="hero">
										<div className="image">
											<Image width="1080px" height="1080px" className="img_promos" src="/catalogo-rabbit-2023.png" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
										</div>
									</div>
								</a>
							</Link>

						</SwiperSlide>
						{/* Agosto 2023 */}

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top5_FEMSA_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top5_Farmacia_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top5_Colgate_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/FEMSA_AppRabbit-1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Colgate_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/Nuevo_P&G-2_1080X1080_2.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_farmacia_theraflu_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Alimentos_bimbo_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_bebidas_propimex_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/BTS_Zeus_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/Nuevo_P&G-2_1080X1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top_Electrolit_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/TopSeller_Vogue_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top_Seller_Coca_Ciel_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top_Seller_Cerveza_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top_Petalo_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/TopSeller_Nutrioli_Ave_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="hero">
								<div className="image">
									<Image width="1080px" height="1080px" className="img_promos" src="/topseller/123_Top_Moderna_1080x1080.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy" />
								</div>
							</div>
						</SwiperSlide>

					</Swiper>
				</div>
			</section>
			<section className="path-cont-1 has-round-bottom has-gradient-1">
				<div className="container">
					<div className="cont-info has-text-centered has-text-white">
						<h1><strong >¡Las soluciones de Rabbit® son el salto que tu tienda necesita!</strong></h1>
						<p>Rabbit® te ayuda a fortalecer tu tienda con soluciones de abasto presencial y digital, además hicimos que las herramientas de inclusión financiera fueran accesibles y sencillas para ti. ¡Juntos lograremos que tu tienda sea la más competitiva de la colonia!</p>
					</div>
					<div className="columns">
						<div className="column is-4">
							<Path image="/illustration-1.png" altImg="Haz tu pedido a través de un aliado Rabbit®">
								<div className="cont-info has-text-centered has-text-white text-path">
									<p>Con la App Rabbit® haz tu vida más fácil. Recibe tus pedidos hasta la puerta de tu tienda.</p>
								</div>
							</Path>
						</div>
						<div className="column is-4">
							<Path image="/en trega.png" altImg="Servicio de entrega Rabbit">
								<div className="cont-info has-text-centered has-text-white">
									<p>La Terminal Rabbit® será tu super aliada para vender y cobrar más. Acepta pagos con tarjetas de débito, crédito y vales.</p>
								</div>
							</Path>
						</div>
						<div className="column is-4">
							<Path image="/illustration.png" altImg="Apoyamos a que tu tienda de el salto">
								<div className="cont-info has-text-centered has-text-white">
									<p>El Aliado Rabbit® será tu mano derecha, levantando tus pedidos una vez a la semana y orientándote en cómo usar todas las soluciones que Rabbit® tiene para tu tienda. </p>
								</div>
							</Path>
						</div>
					</div>
					<div className='column has-text-centered has-text-white'>
						<h3><strong>¿Qué esperas? Lleva tu tienda al siguiente nivel, con Rabbit®</strong></h3>
						<h3><strong>¡Da el salto que tu tienda necesita!</strong></h3>
					</div>
				</div>
			</section>
			<section className="abastecimiento-cont has-dot-background">
				<div className="container">
					<div className="cont-info has-text-centered">
						<h3><strong>Conoce los beneficios que Rabbit® te ofrece</strong></h3>
						<p>Dale a tu tienda el salto que necesita. ¡Tú eliges cómo!</p>
					</div>
					<div className="columns is-vcentered">
						<div className="column is-6">
							<div className="cont-info">
								<h3><strong>App Rabbit®</strong></h3>
								<p>Descarga  <span>App Rabbit®</span></p>
								<ul className="rabbit-list has-text-left">
									<li><p>Pide <span>cuando quieras</span> los 365 días del año, las 24 horas del día desde tu celular con envío gratis*</p></li>
									<li><p>En nuestra App tendrás disponible un <span>amplio catálogo</span> de marcas para surtir tu tienda</p></li>
									<li><p>Que no se te vaya ninguna venta, acepta pagos con tarjeta de <span>Débito, Crédito y Vales</span></p></li>
									<li><p>Contáctanos en nuestras plataformas digitales para recibir apoyo</p></li>
								</ul>
								<p>*Consulta Términos y Condiciones</p>
								<div className="buttons">
									<Link href="/abastecimiento-en-linea-app">
										<a className="button primary">Adquiérela ya</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="column is-6">
							{/* <Image width="643px" height="362px" className="" src="/RABBIT_123_282X500 copy.webp" alt="Abastecimiento de tiendas mediante app" title="Abastecimiento de tiendas de manera confiable" loading="lazy"/> */}
							<VideoPlayer src="https://www.youtube.com/watch?v=rokuQ6iMcpc" thumbnail="/app-rabbit-video-thumbnail.webp" altThumb="Da el salto en tu tienda con Rabbit®" />
						</div>
					</div>
					<div className="columns is-vcentered is-flex-direction-row-reverse my-5">
						<div className="column is-6">
							<div className="cont-info">
								<h3><strong>Terminal Rabbit®</strong></h3>
								<ul className="rabbit-list has-text-left">
									<li><p>Moderniza tu tienda con la Terminal Rabbit® y acepta pagos con tarjeta de <span>Débito, Crédito y Vales.</span></p></li>
									<li><p>Recibe tus ganancias <span>en menos 24 horas*.</span></p></li>
									<li><p>Contáctanos en nuestras plataformas digitales, WhatsApp y Redes Sociales para recibir apoyo.</p></li>
								</ul>
								<p>*Consulta Términos y Condiciones</p>
								<p>*El depósito se realizará dentro de las 24 hrs del día hábil bancario siguiente</p>
								<div className="download">
									<div className="buttons">
										<Link href='https://apps.apple.com/MX/app/id1608218188?mt=8'>
											<a className="button primary">Adquiérela ya</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="column is-6">
							<VideoPlayer src="https://www.youtube.com/watch?v=z-122gD-pl0" thumbnail="/video-terminal-rabbit-thumbnail-home.webp" altThumb="Descarga la App de Rabbit® y conoce nuestro catálogo" />
						</div>
					</div>
					<div className="columns is-vcentered">
						<div className="column is-6">
							<div className="cont-info">
								<h3><strong>Abastecimiento Presencial</strong></h3>
								<ul className="rabbit-list has-text-left">
									<li><p>Tu Aliado Rabbit® te visitará una <span>vez a la semana</span> para ofrecerte un amplio portafolio de marcas y promociones vigentes</p></li>
									<li><p>Recibe tu pedido <span>en menos 24 horas*</span> hasta la puerta de tu tienda</p></li>
									<li><p>Si tienes alguna duda sobre los beneficios del <span>ecosistema de soluciones rabbit®</span>, pregúntale a tu Aliado Rabbit®</p></li>
									<li><p>Rabbit® siempre está a tus órdenes para brindarte <span>asesoría y un gran servicio</span></p></li>
								</ul>
								<div className="buttons">
									<div className='column'>
										<Link href="/abastecimiento-presencial">
											<a className="button primary">Conoce nuestra cobertura</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="column is-6">
							<VideoPlayer src="https://www.youtube.com/watch?v=Dh4KpgE0oPI" thumbnail="/tendero-rabbit-video.jpg" altThumb="Da el salto en tu tienda con Rabbit®" />
						</div>
						<div className="download">
							<div className="buttons">
								<Link href='https://rabbitmx.onelink.me/rfY7/6343yaxk'>
									<a className='downloadAppGtag' target="_blank" onClick={() => {
										gtag('event', 'download', {
											'TheEventAction': 'click',
										});
										gtag('event', 'conversion', { 'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso' });
									}}>
										<div className="image">
											<Image width="120" height="40" src="/descarga-app-rabbit-en-googleplay-android.svg" alt="Instala la App Rabbit para tu tienda en tu Android" title="Instala Rabbit en tu celular" loading="lazy" />
										</div>
									</a>
								</Link>
								<Link href='https://rabbitmx.onelink.me/rfY7/6343yaxk'>
									<a className='downloadAppGtag' target="_blank" onClick={() => {
										gtag('event', 'download', {
											'TheEventAction': 'click',
										});
										gtag('event', 'conversion', { 'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso' });
									}}>
										<div className="image">
											<Image width="120" height="40" src="/descarga-app-rabbit-en-appstore-iphone.svg" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="home-section-steps">
					<div className="elipse-1"></div>
					<div className="elipse-2"></div>
					<div className="elipse-3"></div>
					<div className="cont-info has-text-centered">
						<h3 className="home-steps-transition-title"><strong>¡Que tu tienda dé el salto y tus clientes también!</strong></h3>
						<p className="home-steps-transition-subtitle">Es muy fácil, solo tienes que seguir estos sencillos pasos:</p>
					</div>
					<div className="block-section-step">
						<div className="block-background-top">

							<div className="block-item toTop">
								<div className="block-image">
									<Image width="270px" height="270px" src="/home.png" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
								</div>
								<div className="block-text margin-top">
									<p><strong>Descarga la App Rabbit®<br></br> y registra tu tienda</strong></p>
								</div>
							</div>
							<div className="block-item reverse-columns toTop">
								<div className="block-image">
									<Image width="270px" height="270px" src="/Grupo 3.png" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
								</div>
								<div className="block-text">
									<p><strong>Realiza tu pedido y recíbelo en <br></br>24 horas.*</strong></p>
								</div>
							</div>
							<div className="block-item toTop">
								<div className="block-image">
									<Image width="270px" height="270px" src="/Grupo 1.png" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
								</div>
								<div className="block-text margin-top">
									<p><strong>Paga tus productos en <br></br> efectivo contra entrega</strong></p>
								</div>
							</div>

						</div>
						<div className="block-background-bottom">
							<div className="block-item item-display-left">
								<div className="block-image center-block">
									<Image width="270px" height="270px" src="/Grupo 4.png" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
								</div>
								<div className="block-text margin-top">
									<p><strong>Adquiere tu Terminal Rabbit® </strong></p>
								</div>
							</div>
							<div className="block-item reverse-columns toTop position">
								<div className='position-item'>
									<div className="block-text">
										<p><strong>Actívala en la App Rabbit®</strong></p>
									</div>
									<div className="block-image">
										<Image width="270px" height="270px" src="/home.png" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
									</div>
								</div>
							</div>
							<div className="block-item item-display-right">
								<div className="block-image">
									<Image width="270px" height="270px" src="/Grupo 6.png" alt="Instala la App Rabbit para tu tienda en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
								</div>
								<div className="block-text margin-top">
									<p><strong>¡Da el salto que tu tienda <br></br> necesita!</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="home-video-cont my-5">
					<div className="elipse-1"></div>
					<div className="elipse-2"></div>
					<div className="elipse-3"></div>
					<div className="container">
						<div className="cont-info has-text-centered">
							<h3><strong>Surte tu tienda desde nuestra App Rabbit®</strong></h3>
							<p><span>Surtir tu tienda desde la palma de tu mano</span> a cualquier hora, en cualquier lugar, los 365 días del año, es tan sencillo como descargar nuestra aplicación.</p>
							<h4>Conoce cómo y comienza hoy.</h4>
						</div>
						<div className='video-container'>
							<VideoPlayer src="https://www.youtube.com/watch?v=TH6hgmIm44o" thumbnail="/registro-app-rabbit.jpg" altThumb="Conoce como dar de alta tu tienda en la App de Rabbit®"/>
						</div>
					</div>
				</div> */}
			</section>
			{/* <section className="section-stock">
				<div className="elipse-1"></div>
				<div className="elipse-2"></div>
				<div className="elipse-3"></div>
				<div className="elipse-4"></div>
				<div className="container">
					<div className="has-text-centered">
						<h3 className="home-stockBusiness-transition-title"><strong>Contamos con un gran portafolio de marcas </strong></h3>
						<p className="home-stockBusiness-transition-title">Conoce las categorías que Rabbit® te lleva a la puerta de tu tienda</p>
					</div>
					<div className="columns is-centered is-mobile marY">
						{
							abastecimiento.map((item) => (
								<div key={item.id} className="column is-3-desktop is-3-tablet is-6-mobile home-stockBusiness-transition-item">
									<ProductCard title={item.name} img={item.src}  altImg={item.alt}/>
								</div> 
							))
						}
					</div>
				</div>
			</section> */}
			<section className="home-section-route">
				{/* <div className="elipse-1"></div>
				<div className="elipse-2"></div> */}
				<div className="container">
					<div className="columns is-vcentered">
						<div className="column text-centered home-supplyroute-transition-item">
							<div className="cont-info">
								<h3><strong>Rabbit® está contigo<br></br>Conoce nuestra cobertura</strong></h3>
								<p>Tenemos más de <span>800 Aliados Rabbit®</span> y una cobertura de <span>205 mil tiendas.</span></p>
								<p>Porque lo de hoy es <span>abastecerte</span> sin salir de tu tienda.</p>
								<div className="buttons">
									<Link href="/cobertura-rabbit">
										<a className="button primary">Conoce nuestra cobertura</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="image map-routes home-supplyroute-transition-image">
								<Image width="547px" height="483.75px" src="/mapa-cobertura-rabbit.webp" alt="500 aliados Rabbit® cerca de tí" loading="lazy" />
							</div>
							<div className="image home-supplyroute-transition-timeline">
								<Image width="547px" height="47px" src="/linea_del_tiempo.webp" alt="Conoce la cobertura de Rabbit" title="Estamos en CDMX, EdoMex, Puebla, Guanajuato, Nuevo Leon y Jalisco" loading="lazy" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="home-section-route">
				{/* <div className="elipse-1"></div>
				<div className="elipse-2"></div> */}
				<div className="container">
					<div className="columns is-vcentered">
						<div className="column text-centered home-supplyroute-transition-item">
							<div className="cont-info">
								<h3><strong>Crece con Rabbit®, en nuestro blog encontrarás consejos prácticos para potenciar tu negocio y que tengas más ventas</strong></h3>

								<div className="buttons">
									<Link href="/blog">
										<a className="button primary">Visitar blog</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="image map-routes home-supplyroute-transition-image">
								<Image width="547px" height="483.75px" src="/imagen_ya_llego.jpg" alt="500 aliados Rabbit® cerca de tí" loading="lazy" />
							</div>
						</div>
					</div>
				</div>
				<p><strong>*Consulta Términos y Condiciones.</strong></p>
			</section>
			<section className="home-blog bg-sec-4">
				<div className="container">
					<div className="has-text-centered">
						<p><strong>Conoce los grandes saltos que Rabbit® está dando</strong></p>
					</div>
					<div className="columns">
						{
							noteContent.map(item => (
								<div key={item.id} className="column is-4">
									<div className="journal-note box">
										<div className="image">
											<Image width="1024px" height="630px" src={item.image} alt={item.alt} loading="lazy" />
											<Image width="150px" height="42px" className="journal" src={item.journal} alt={item.alt_journal ? item.alt_journal : item.alt} title={item.title} loading="lazy" />
											{/* <Image width="50px" height="12px" className="journal" src={item.journal} alt={item.alt} title={item.title} loading="lazy"/>  */}
										</div>
										<div className="info">
											<p>{item.content}</p>
											<Link href={item.link} >
												<a target="_blank">Ver más</a>
											</Link>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div className="disclaimer">
					<div className="container">
						<p>*Consulta <Link href="/terminos-y-condiciones">Términos y Condiciones</Link></p>
					</div>
				</div>
			</section>

		</Layout>
	)
}

const abastecimiento = [
	{
		id: 1,
		name: 'Abarrotes',
		src: '/abarrotes-rabbit.webp',
		alt: 'Todo en abarrotes directo hasta tu negocio'
	},
	{
		id: 2,
		name: 'Bebidas',
		src: '/bebidas-rabbit.webp',
		alt: 'Todas las bebidas para tu tienda con Rabbit®'
	},
	{
		id: 3,
		name: 'Cuidado personal',
		src: '/cuidado-personal.webp',
		alt: 'Todo en cuidado personal para tu tienda de abarrotes'
	},
	{
		id: 4,
		name: 'Farmacia',
		src: '/farmacia.webp',
		alt: 'Lo que necesites en Farmacia Rabbit® te lo lleva hasta tu tienda'
	},
	// {
	// 	id: 5,
	// 	name: 'Bebidas alcohólicas',
	// 	src: '/bebidas-alcoholicas.png'
	// },
	{
		id: 6,
		name: 'Cuidado del hogar',
		src: '/cuidado-del-hogar.webp',
		alt: 'Todo en cuidado del hogar para tu tienda de abarrotes'
	},
	{
		id: 7,
		name: 'Botanas',
		src: '/botanas-tienda-de-abarrotes.webp',
		alt: 'Todas las botanas en tu tienda gracias a Rabbit®'
	},
]

const noteContent = [
	{
		id: 8,
		content: 'Para seguir impulsando el desarrollo y crecimiento de las marcas, la startup mexicana lanza Rabbit Ads®, la red más grande de soluciones de publicidad y comunicación omnichannel en México. ',
		image: '/Fotos-Nota-de-prensa_DonPepe-1-1280x720.webp',
		journal: '/medios-que-mecionan-rabbit-forbes.webp',
		alt_journal: 'Nota en Forbes sobre App Rabbit México',
		link: 'https://www.forbes.com.mx/ad-rabbit-ads-red-soluciones-publicidad-comunicacion-omnicanal-mexico/',
		alt: 'Conoce los Rabbits Ads dentro de la App Rabbit',
		title: ''
	},
	{
		id: 7,
		content: 'Hoy Rabbit® anuncia su más reciente innovación: La App Rabbit® la nueva solución para surtir las tiendas de la esquina, sin salir de ellas...',
		image: '/note-preview-7.webp',
		journal: '/medios-que-mecionan-rabbit-universal_new.webp',
		alt_journal: 'Nota en El Universal sobre App Rabbit México',
		link: 'https://www.eluniversal.com.mx/cartera/lanzan-app-rabbit-para-fortalecer-tiendas-de-la-esquina',
		alt: 'App Rabbit para artículos de abarrotes',
		title: ''
	},
	{
		id: 6,
		content: 'Rabbit®, la startup mexicana que impulsó el desarrollo de más 205 mil tiendas con soluciones de abasto presencial, anuncia la digitalización de su canal tradicional...',
		image: '/note-preview-6.webp',
		journal: '/medios-que-mecionan-rabbit-reforma.webp',
		alt_journal: 'Periódico Reforma sobre App Rabbit',
		link: 'https://www.reforma.com/anuncia-rabbit-lanzamientode-app-a-nivel-nacional/gr/ar2413995?md5=1a0f7d6cdac88778a3e418f4698274fe&ta=0dfdbac11765226904c16cb9ad1b2efe&utm_source=facebook&utm_medium=social&utm_campaign=promocion_editor',
		alt: 'App Rabbit móvil para tenderos',
		title: ''
	},
	{
		id: 5,
		content: 'Rabbit®, la startup mexicana que impulsó el desarrollo de más 205 mil tiendas con soluciones de abasto presencial, anuncia la digitalización de su canal tradicional...',
		image: '/note-preview-5.webp',
		journal: '/medios-que-mecionan-rabbit-forbes.webp',
		alt_journal: 'Nota en Forbes sobre App Rabbit México',
		link: 'https://www.forbes.com.mx/ad-rabbit-startup-tiendas-rabbit-app-tenderos-abasto/',
		alt: 'Productos de abarrotes desde la App Rabbit',
		title: ''
	},
	{
		id: 4,
		content: 'La región latinoamericana ya se posicionó como una de las más atractivas para emprender e invertir en startups...',
		image: '/note-preview-4.webp',
		journal: '/medios-que-mecionan-rabbit-forbes.webp',
		alt_journal: 'Nota en Forbes sobre App Rabbit México',
		link: 'https://www.forbes.com.mx/nuestra-revista-las-100-startups-de-mayor-crecimiento-en-mexico/',
		alt: 'Las 100 startups de mayor crecimiento en México',
		title: 'Conoce las mejores startups'
	},
	{
		id: 3,
		content: 'Rabbit® es el ecosistema de soluciones tecnológicas que busca fortalecer a los tenderos y hacerlos más competitivo...',
		image: '/note-preview-3.webp',
		journal: '/medios-que-mecionan-rabbit-merca20.webp',
		link: 'https://www.merca20.com/rabbit-la-startup-mexicana-que-transformara-a-la-tienda-de-la-esquina-a-traves-de-una-amplia-red-logistica-productos-digitales-e-inclusion-financiera/',
		alt: 'Solución digital para surtir tiendas',
		title: 'Surtir de mercancía a tiendas de manera fácil'
	},
	{
		id: 2,
		content: 'México es la punta de lanza en su plan de expansión para llegar a toda América Latina...',
		image: '/note-preview-2.webp',
		journal: '/medios-que-mecionan-rabbit-milenio.webp',
		link: 'https://www.milenio.com/content/rabbit-esta-transformando-a-las-tiendas-de-la-esquina',
		alt: 'Startup Rabbit que transforma las tiendas',
		title: 'Rabbit es la solución tecnológica para tiendas'
	},
	{
		id: 1,
		content: 'Este es solo el primer “salto” para la startup mexicana, en 2022 su objetivo es llegar a más de 308 mil puntos de venta...',
		image: '/note-preview-1.webp',
		journal: '/medios-que-mecionan-rabbit-universal.webp',
		link: 'https://www.eluniversal.com.mx/cartera/rabbit-la-startup-mexicana-que-esta-transformando-las-tiendas-de-la-esquina',
		alt_journal: 'Nota en El Universal sobre App Rabbit México',
		alt: 'Marketplace para surtir tiendas',
		title: 'Fortalecimiento de tiendas mediante logística digital'
	},
]