import Dymamic from 'next/dynamic';

// import Breadcrumbs from "nextjs-breadcrumbs";
// import Layout from "../components/Layout";
// import Link from "next/link";
// import Image from "next/image";
// import ProductCard from "../components/ProductCard";
// import Acordeon from "../components/Acordeon";
// import Map from "../components/Map";
// import Brands from "../components/Brands";

import React, { useEffect } from 'react';
import { gsap, Back } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const ProductCard = Dymamic(import('../components/ProductCard'))
const Image = Dymamic(import("next/image"))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))
const Acordeon = Dymamic(import("../components/Acordeon"))
const Map = Dymamic(import("../components/Map"))
const Brands = Dymamic(import("../components/Brands"))

gsap.registerPlugin(ScrollTrigger)

export default function Abastecimiento() {

	useEffect(() => {
		fbq('track', 'ViewContent');
		if(window.innerWidth >= 768) {
			const image = document.querySelectorAll('.supply-store-anim .supply-store-anim-image')
			const item = document.querySelectorAll('.supply-store-anim .supply-store-anim-item')
			gsap.timeline({
				scrollTrigger: {
					trigger: '.supply-store-anim',
					start: 'top center',
					stagger: 0.3
				},
				defaults: {
					duration: 0.5,
				}
			}).from(image, {
				scale: 0,
				ease: Back.easeOut,
				stagger: 0.3
			}).from(item, {
				y: 100,
				opacity: 0,
				stagger: 0.3
			})
		}
	}, [])

	return (
		<Layout
			title="Surte tu tienda de abarrotes | Abastecimiento Aliados Rabbit®"
			description="Un Aliado Rabbit® llega hasta tu negocio y toma tu pedido, elige los productos que necesitas para abastecer tu tienda de abarrotes y paga a la entrega."
			keyWords="como surtir una tienda de abarrotes, productos de tienda de abarrotes, donde surtir mi tienda de abarrotes, app para tienda de abarrotes, como administrar una tienda de abarrotes, abastecimiento de tiendas de abarrotes, como surtir una tienda de abarrotes, donde surtir mi tienda de abarrotes, donde comprar productos para tienda de abarrotes, donde comprar para surtir mi tienda de abarrotes"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_abastecimiento-presencial.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
			schema={
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
					{
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [
						{
							"@type": "Question",
							"name": "¿Puedo pagar mi pedido contra entrega?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "¡Sí! Puedes pagar nuestros productos en el momento en que te los entreguemos."
							}
						},
						{
							"@type": "Question",
							"name": "¿Tienen costo de envío los pedidos que levante con el Aliado Rabbit®?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "No, nuestros envíos no tienen ningún costo y es entrega en 24 horas*."
							}
						},
						{
							"@type": "Question",
							"name": "Mi pedido no llegó completo",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "En caso de que tu pedido no haya llegado completo, toma una foto a tu ticket y contacta a nuestro servicio a cliente.\n\nTeléfono: 5579 08 7880 o Correo: contacto@rabbitmx.com"
							}
						}]
					}
				`}}></script>
			}
		>
			<section className="page-supply">
				<div className="hero is-halfheight page-hero has-dot-background">
					<div className="container">
						<nav className="breadcrumb">
							<Breadcrumbs rootLabel="Inicio"  activeItemClassName="is-active" />
						</nav>
					</div>
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered">
								<div className="column">
									<div className="cont-info">
										<h1><strong>Abastecimiento Rabbit®</strong></h1>
										<p>¡Surte tu tienda con un solo proveedor! Un Aliado Rabbit® llegará hasta tu negocio para tomar tu pedido y así podrás tener los productos más solicitados por tus clientes.</p>
									</div>
								</div>
								<div className="column">
									<div className="image">
										<Image
											src="/abastecimiento-rabbit.webp"
											alt="Surte tu tienda de abarrotes con un solo proveedor"
											title="abastecimiento-rabbit"
											loading="lazy"
											width="547"
											height="547"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-stock">
					<div className="container">
						<div className="has-text-centered">
							<h2><strong>Contamos con un gran portafolio de marcas, conoce algunos de los productos que tenemos para ti</strong></h2>
							<p>Surte tu tienda sin salir de ella, sin costos de envío y en 24 horas.*</p>
						</div>
						<div className="columns is-mobile is-centered marY">
							{
								abastecimientoContent.map((item) => (
									<div key={item.id} className="column is-3-desktop is-3-tablet is-6-mobile anim-item">
										<ProductCard title={item.name} img={item.src} altImg={item.alt}/>
									</div> 
								))
							}
						</div>
						<div className="buttons is-centered">
							<p><strong>¡Encuentra todo lo que tu tienda necesita!</strong></p>
							<Link href="/contacto">
								<a className="button primary">Abastécete con Rabbit®</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<Brands />
				</div>
				<div className="country-coverage">
					<div className="container">
						<h2 className="has-text-centered"><strong>Nuestra cobertura para el Valle de México</strong></h2>
						<div className="columns is-mobile">
							{
								scopeContent.map(item => (
									<div key={item.title} className="column is-4-desktop is-4-tablet is-12-mobile">
										<div className="scope">
											<div className="image">
												<Image
													src={item.image}
													alt={item.title}
													loading="lazy"
													width="200"
													height="200"
												/>
											</div>
											<div className="cont-info">
												<p><strong>{item.title}</strong></p>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
				<Map 
					title="Descubre si eres parte de las rutas de nuestros Aliados Rabbit®"
					id="descubre"
				/>
				<div className="supply-store">
					<div className="container">
						<h2 className="has-text-centered"><strong>Surte tu tienda con Rabbit® con estos tres sencillos pasos</strong></h2>
						<div className="columns is-vcentered supply-store-anim">
							<div className="column">
								<div className="image supply-store-anim-image">
									<Image
										src="/registra-tu-tienda-circulo.webp"
										alt="Descarga la App de Rabbit® y registra tu tienda"
										title="registra-tu-tienda-circulo"
										loading="lazy"
										width="270"
										height="270"
									/>
								</div>
							</div>
							<div className="column">
								<div className="cont-info supply-store-anim-item">
									<h2>Regístrate <Link href="/contacto"><a>aquí</a></Link> y espera la visita de tu Aliado Rabbit®.*</h2>
								</div>
							</div>
						</div>
						<div className="columns is-vcentered supply-store-anim">
							<div className="column">
								<div className="image supply-store-anim-image">
									<Image
										src="/abastece-tu-tienda-circulo-azul.webp"
										alt="Realiza tu pedido en la App de Rabbit®"
										title="abastece-tu-tienda-circulo-azul"
										loading="lazy"
										width="270"
										height="270"
									/>
								</div>
							</div>
							<div className="column">
								<div className="cont-info supply-store-anim-item">
									<h2>Realiza tu pedido y recíbelo en 24 horas.*</h2>
								</div>
							</div>
						</div>
						<div className="columns is-vcentered supply-store-anim">
							<div className="column">
								<div className="image supply-store-anim-image">
									<Image
										src="/paga-productos-en-efectivo.webp"
										alt="Paga tus pedidos en efectivo contra entrega"
										title="paga-productos-en-efectivo"
										loading="lazy"
										width="270"
										height="270"
									/>
								</div>
							</div>
							<div className="column">
								<div className="cont-info supply-store-anim-item">
									<h2>Pago contra entrega.*</h2>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-faqs">
					<div className="container">
						<div className="has-text-centered">
							<p><strong>Preguntas Frecuentes</strong></p>
						</div>
						<Acordeon title='¿Puedo pagar mi pedido contra entrega?'>
							<p>¡Sí! Puedes pagar nuestros productos en el momento en que te los entreguemos.</p>
						</Acordeon>
						<Acordeon title='¿Tienen costo de envío los pedidos que levante con el Aliado Rabbit®?'>
							<p>No, nuestros envíos no tienen ningún costo y es entrega en 24 horas*.</p>
						</Acordeon>
						<Acordeon title='Mi pedido no llegó completo'>
							<p>En caso de que tu pedido no haya llegado completo, toma una foto a tu ticket y contacta a nuestro servicio a cliente.</p>
							<p>Teléfono: <a href="tel:5579087880">5579 08 7880</a> o Correo: <a href="mailto:contacto@rabbitmx.com">contacto@rabbitmx.com</a></p>
						</Acordeon>
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

const scopeContent = [
	{
		title: 'Surtimos a + de 205 mil tiendas a nivel nacional',
		subtitle: 'Tiendas Rabbit® activas',
		image: '/alcance-rabbit.webp',
		alt: 'Cobertura en todo el valle de México'
	},
	{
		title: 'Contamos con + de 800 Aliados Rabbit®',
		subtitle: 'Aliados Rabbit®',
		image: '/cobertura-aliado-rabbit.webp',
		alt: 'Somos más de 500 aliados Rabbit® en el Valle de México'
	},
	{
		title: 'Tenemos las marcas más solicitadas por tus clientes',
		subtitle: 'En Nuestro Portafolio',
		image: '/alcance-entrega-rabbit.webp',
		alt: 'Entregamos los productos que necesita tu tienda de abarrotes'
	},
]

const abastecimientoContent = [
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