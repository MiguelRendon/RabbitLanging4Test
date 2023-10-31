import Dymamic from 'next/dynamic';

const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const Image = Dymamic(import("next/image"))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))
const VideoPlayer = Dymamic(import('../components/VideoPlayer'))
const Map = Dymamic(import("../components/Map"))

// import Layout from "../components/Layout";
// import VideoPlayer from "../components/VideoPlayer";
// import Link from "next/link";
// import Image from "next/image";
// import Breadcrumbs from "nextjs-breadcrumbs";
// import Map from "../components/Map";


import { useEffect } from "react";

export default function AliadoRabbit() {
	useEffect(() => {
		fbq('track', 'ViewContent');
	})
	return (
		<Layout
			title=" Aliado Rabbit® | Levantamos tus pedidos y levanta tu tienda"
			description="Nuestros Aliados Rabbit® te acompañan en todo momento para llevar tu tienda de abarrotes al siguiente nivel. Abastecer tu tienda con nosotros es fácil."
			keyWords="aliados rabbit, rabbit personal, rabbit visitas"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_aliado-rabbit.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<section className="page-ally">


				<div className="hero is-halfheight page-hero has-dot-background">
					<div className="container">
						<nav className="breadcrumb">
							<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active"/>
						</nav>
					</div>
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered">
								<div className="column">
									<div className="cont-info">
										<h1><strong>Somos tu Aliado Rabbit®</strong></h1>
										<p>Cada mañana nuestros más de 800 Aliados Rabbit® salen de las oficinas con la misión de ayudar a que tu negocio crezca.</p>
										<p>Tu Aliado Rabbit®️ te hará una visita a la semana con un amplio portafolio de productos para que puedas surtir tu tienda sin salir de ella.</p>
									</div>
								</div>
								<div className="column">
									<div className="image">
										<Image
											src="/somos-aliados-rabbit.webp"
											alt="Rabbit® tu mejor opción"
											title="somos-aliados-rabbit"
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

				<div className="ally-description has-round-bottom">
					<div className="container">
						<div className="cont-info">									
							<h2 className="has-text-centered"><strong>Conoce a tu Aliado Rabbit®</strong></h2>
							<p className="has-text-centered"><strong>¿Qué va a querer? ¿Qué va a llevar? Para eso está su Aliado Rabbit®.</strong></p>
							<p className="has-text-centered">Los Aliados Rabbit® te llevarán los productos más pedidos por los tenderos de México.</p>
						</div>
						<div className="columns is-mobile">
							{
								scopeContent.map(item => (
									<div key={item.title} className="column is-4-desktop is-4-tablet is-12-mobile">
										<div className="scope">
											<div className="image">
												<Image
													src={item.image}
													alt={item.alt}
													title={item.image}
													loading="lazy"
													width="250"
													height="251"
												/>
											</div>
											<div className="cont-info">
												<h4><strong>{item.title}</strong></h4>
												<p><strong>{item.subtitle}</strong></p>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>

				<div className="has-translated-top has-gradient-1">
					<div className="container rmvPad">
						<div className="columns is-vcentered">
							<div className="column">
								<div className="image">
									{/* <img src="/equipo-rabbit.png" alt="Contamos con el mejor equipo" title="equipo-rabbit" loading="lazy"/> */}
									<Image 
										src="/equipo-rabbit.webp"
										alt="Contamos con el mejor equipo"
										title="equipo-rabbit"
										loading="lazy"
										width="648px"
										height="657px"
									/>
								</div>
							</div>
							<div className="column">
								<div className="cont-info has-text-white">
									<h2><strong>Si ves por tu localidad a un Aliado Rabbit® <br /> ¡Salta de la emoción!</strong></h2>
									<p>Ten por seguro que te brindaremos el mejor servicio, siempre estamos para ayudarte y aclarar cualquier duda.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<VideoPlayer src="https://www.youtube.com/watch?v=Dh4KpgE0oPI" thumbnail="/tendero-rabbit-video.webp" altThumb="Da el salto en tu tienda con Rabbit®"/>

				<Map
					title="Nuestros Aliados Rabbit® pronto estarán saltando por todo México"
					subtitle="Surtimos a más de 205 mil tiendas a nivel nacional en Ciudad de México, Estado de México, Puebla, Jalisco, Guanajuato y Nuevo León"
				/>
				
				<div className="join-us">
					<div className="container rmvPad">
						<div className="columns is-vcentered">
							<div className="column is-8">
								<div className="cont-info">
									<h2><strong className="has-text-white">Conviértete en un Aliado Rabbit®</strong></h2>
									<h4 className="has-text-white">Y ayuda a los tenderos a que den el salto de su negocio.</h4>
									<p><strong>¿Te interesa ser parte de nuestro equipo?</strong></p>
									<div className="buttons">
										<Link href="/contacto">
											<a className="button primary">Sé equipo Rabbit®</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="column is-4">
								<div className="image">
									<Image
										src="/equipo-rabbit-aliado.webp"
										alt="Sé parte del equipo Rabbit® como aliado"
										title="equipo-rabbit-aliado"
										loading="lazy"
										width="360"
										height="360"
									/>
								</div>
							</div>
						</div>
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
		title: 'Visita semanal',
		subtitle: 'Tu Aliado Rabbit® te visitará una vez a la semana asegurándose que no te falte nada.',
		image: '/circulo-visitas.webp',
		alt: 'Tu aliado Rabbit® te visitará'
	},
	{
		title: 'Súrtete con un solo proveedor',
		subtitle: 'Los Aliados Rabbit® te llevarán los productos más pedidos por tus clientes.',
		image: '/tienda-rabbit.webp',
		alt: 'Apoyamos a que tu tienda de el salto'
	},
	{
		title: 'Entrega en 24 horas*',
		subtitle: 'Todo esto sin salir de tu tienda y sin costos de envío.*',
		image: '/entrega-rabbit.webp',
		alt: 'Servicio de entrega Rabbit'
	}
]