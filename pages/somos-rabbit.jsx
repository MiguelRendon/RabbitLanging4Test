import Dymamic from "next/dynamic"

const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const Image = Dymamic(import("next/image"))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))
const VideoPlayer = Dymamic(import('../components/VideoPlayer'))
const SliderImages = Dymamic(import('../components/SliderImages'))

import { useEffect } from "react";
import { gsap, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SomosRabbit() {

	useEffect(() => {
		fbq('track', 'ViewContent');
		if(window.innerWidth >= 768) {
			const item = document.querySelectorAll('.list-animated li')
			const image = document.querySelector('.rabit-list-anim-img')
			gsap.timeline({
				scrollTrigger: {
					trigger: '.slider-images-cont',
					start: 'top center'
				},
				defaults: {
					duration: 0.6
				}
			}).from(item, {
				opacity: 0,
				stagger: 0.3
			}).from(image, {
				scale: 0,
				ease: Back.easeOut
			})
		}
	}, [])

	return (
		<Layout
			title="Tu aliado para hacer crecer tu tienda | Rabbit®"
			description="Forma parte de los miles de tenderos que ya dieron el salto con Rabbit®. Somos una plataforma 100% mexicana que busca fortalecer tu tienda de abarrotes."
			keyWords="Rabbit, Rabbit Mexico, Marca del conejo, Rabbit tienditas, Rabbit terminal, rabbit para que sirve, que es rabbit"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_somos-rabbit.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<section className="page-rabbit">


				<div className="hero is-halfheight page-hero has-dot-background">
					<div className="container">
						<nav className="breadcrumb">
							<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
						</nav>
					</div>
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered">
								<div className="column">
									<div className="cont-info">
										<h1><strong>Somos Rabbit®</strong></h1>
										<p>En México, ¡donde salta uno, saltan todos!</p>
										<p>Los mexicanos siempre nos hemos distinguido por ser personas trabajadoras, aguerridas y apasionadas en todo lo que hacemos.</p>
										<p>Estos valores los podemos encontrar en cada una de las tiendas de la esquina, donde cada día los tenderos se levantan a dar lo mejor de sí.</p>
									</div>
								</div>
								<div className="column">
									<div className="image">
										<Image width="547px" height="547px" src="/somos-aliado-rabbit.webp" alt="Fortaleciendo a los tenderos mexicanos" loading="lazy"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="rabbit-rest">
					<div className="container">
						<div className="cont-info has-text-centered">
							<p>En Rabbit® queremos <strong>fortalecer a las tiendas</strong> para convertirlas en el punto de venta favorito de los mexicanos y así <strong>desarrollar e impulsar la economía de México.</strong></p>
							<p>Estamos comprometidos en <strong>brindar las mejores soluciones</strong>, así como el mejor servicio a cada uno de los tenderos para impulsar el desarrollo integral de sus negocios.</p>
						</div>
					</div>
				</div>

				
				<VideoPlayer src="https://www.youtube.com/watch?v=G9p8LnxvaJ0" thumbnail="/somos-rabbit.webp" altThumb="Comprometidos con los tenderos"/>

				<div className="about-rabbit">
					<div className="container">
						<div className="has-text-centered">
							<h2><strong>Conoce más de Rabbit®</strong></h2>
						</div>
						<div className="columns is-vcentered">
							<div className="column is-4">
								<div className="image">
									<Image width="357px" height="357px" src="/proposito-de-rabbit.webp" alt="Conoce más de nuestro objetivo en Rabbit®" title="proposito-de-rabbit" loading="lazy"/>
								</div>
							</div>
							<div className="column is-8">
								<div className="cont-info">
									<div className="cont-info">
										<p><strong>Nuestro Propósito</strong></p>
										<p>Aportar al desarrollo económico del país a través del fortalecimiento de la tienda, convirtiéndola en la fuente de abasto preferida del consumidor por su portafolio de productos y los servicios que ofrece, logrando su crecimiento e impactando de manera positiva a su comunidad.</p>
										<p>Seremos la plataforma <strong>aliada número #1 de los tenderos de América Latina y México</strong>, a través de un amplio portafolio de soluciones logísticas, financieras y tecnológicas que modernicen la manera en que operan las tiendas con las que crecimos.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="columns is-vcentered">
							<div className="column is-4">
								<div className="image">
									<Image width="357px" height="357px" src="/mision-rabbit.webp" alt="Nuestra misión en Rabbit®" title="mision-rabbit" loading="lazy"/>
								</div>
							</div>
							<div className="column is-8">
								<div className="cont-info">
									<div className="cont-info">
										<p><strong>Nuestra Misión</strong></p>
										<p>Inspirar el desarrollo e innovación de nuestro Modelo de Negocio, siempre pensando en las mejores soluciones que logren <strong>dar el salto a las tiendas de México & América Latina</strong>, ubicando al tendero y a su comunidad como eje central de Rabbit®.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="columns is-vcentered">
							<div className="column is-4">
								<div className="image">
									<Image width="357px" height="357px" src="/vision-rabbit.webp" alt="Nuestra visión en Rabbit®"  loading="lazy"/>
								</div>
							</div>
							<div className="column is-8">
								<div className="cont-info">
									<div className="cont-info">
										<p><strong>Nuestra Visión</strong></p>
										<p>Convertirnos en la plataforma logística, tecnológica y financiera preferida por el tendero.</p>
										<p>Haremos más competitivas a las tiendas de la esquina, habilitándolas con las herramientas necesarias que potencialicen su desarrollo, crecimiento y competitividad a través de un ecosistema de soluciones que van desde abastecimiento presencial y digital, hasta facilitadores de inclusión financiera.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="rabbit-scope">
					<div className="container">
						<div className="has-text-centered">
							<h2><strong>Nuestro alcance al día de hoy</strong></h2>
						</div>
						<div className="columns is-centered is-mobile">
							{
								scopeContent.map(item => (
									<div key={item.id} className="column is-4-desktop is-6-tablet is-6-mobile">
										<div className="scope">
											<div className="image">
												<Image width="120px" height="120px" src={item.image} alt={item.alt} title={item.image} loading="lazy"/>
											</div>
											<div className="cont-info">
												{
													item.title ? <h4><strong>{item.title}</strong></h4>
													: ''
												}
												{
													item.subtitle ? <p><strong>{item.subtitle}</strong></p>
													: ''
												}
												{
													item.list ? 
													<ul className="rabbit-list">
														{item.list.map(item => (
															<li key={item.title}><p><strong>{item.title}</strong></p></li>
														))}
													</ul>
													: ''
												}
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>

				<SliderImages>
					<div className="cont-info">
						<p>Muy pronto llegaremos a más de <strong className="has-text-principal-color-2">205 mil tiendas en los principales estados del país</strong> que concentran al 50% de la población:</p>
						<div className="columns is-vcentered">
							<div className="column is-6">
								<ul className="rabbit-list list-animated has-text-left">
									<li><p><strong>CDMX</strong></p></li>
									<li><p><strong>Estado de México</strong></p></li>
									<li><p><strong>Nuevo León</strong></p></li>
									<li><p><strong>Jalisco</strong></p></li>
									<li><p><strong>Puebla</strong></p></li>
									<li><p><strong>Guanajuato</strong></p></li>
									<li><p><strong>Querétaro</strong></p></li>
								</ul>
							</div>
							<div className="column is-6">
								<Image width="120px" height="120px" className="m-auto rabit-list-anim-img is-min-width-200" src="/mapa-cobertura.svg" alt="Cada vez más cerca de tu tienda" title="mapa-cobertura" loading="lazy"/>
							</div>
						</div>
					</div>
				</SliderImages>

				<div className="container rmvPad">
					<div className="columns is-vcentered">
						<div className="column is-7">
							<div className="cont-info">
								<h2><strong>Contamos con el mejor equipo</strong></h2>
								<p>En Rabbit® buscamos fortalecer a las tiendas de la esquina y convertirlas en el punto de venta favorito de los mexicanos.</p>
								<p>Todo esto gracias a un talentoso equipo de trabajo de más de <strong className="has-text-principal-color-2">800 colaboradores directos y 1,500 indirectos</strong>. Que nos han permitido construir <strong className="has-text-principal-color-2">sólidas capacidades organizacionales y operativas</strong> para avanzar firmemente en la implementación de nuestro modelo de negocio.</p>
							</div>
						</div>
						<div className="column is-5">
							<div className="image">
								<Image width="898px" height="910px" src="/equipo-rabbit.webp" alt="Contamos con el mejor equipo" title="equipo-rabbit" loading="lazy"/>
							</div>
						</div>
					</div>
				</div>

				<div className="join-us">
					<div className="container rmvPad">
						<div className="columns is-vcentered is-centered">
							<div className="column is-8">
								<div className="cont-info has-text-white">
									<h2><strong>Únete a nuestro equipo de trabajo</strong></h2>
									<div className="buttons">
										<Link href="/contacto">
											<a className="button primary">Sé equipo Rabbit®</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="column is-4">
									<img width="200px" height="230px" src="/HB_Aliado.webp" alt="Fortaleciendo a los tenderos mexicanos" loading="lazy" style={{ objectFit: 'contain' }} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}


const scopeContent = [
	{
		id: 0,
		title: '+ 205 mil',
		subtitle: 'Clientes a nivel nacional',
		image: '/alcance-clientes.svg',
		alt: 'Más de cien mill clientes'
	},
	{
		id: 1,
		title: '800',
		subtitle: 'Colaboradores directos',
		image: '/colaborador-directo.svg',
		alt: 'Contamos con colaboradores directos'
	},
	{
		id: 2,
		title: '1,500',
		subtitle: 'Colaboradores indirectos',
		image: '/colaboradores-indirectos.svg',
		alt: 'Contamos con colaboradores indirectos'
	},
	{
		id: 3,
		title: '330',
		subtitle: 'Rutas de entrega',
		image: '/rutas-de-entrega.svg',
		alt: '330 rutas de entrega'
	},
	{
		id: 4,
		title: 'Visitas',
		subtitle: 'Periodicidad Semanal',
		image: '/visitas.svg',
		alt: 'Visitas semanales a clientes'
	},
	{
		id: 5,
		list: [
			{
				title: 'CDMX',
			},
			{
				title: 'Estado de México',
			},
			{
				title: 'Nuevo León',
			},
			{
				title: 'Jalisco',
			},
			{
				title: 'Puebla',
			},
			{
				title: 'Guanajuato',
			},
			{
				title: 'Querétaro',
			},	
		],
		image: '/cobertura-mexico.svg',
		alt: 'Visitas semanales a clientes'
	},
	{
		id: 6,
		title: '10',
		subtitle: 'Oficinas a nivel nacional',
		image: '/oficinas-rabbit.svg',
		alt: 'Oficinas en México Rabbit®'
	},
	{
		id: 7,
		title: '8',
		subtitle: 'Centros de distribución',
		image: '/centros-distribucion.svg',
		alt: 'Centros de distribución Rabbit® en México'
	}
]