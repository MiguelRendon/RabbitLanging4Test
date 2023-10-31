import Dymamic from 'next/dynamic';
const Layout = Dymamic(import('../components/Layout'))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))
const PostalCode = Dymamic(import('../components/forms/PostalCode'))


// import Layout from '../components/Layout'
// import Breadcrumbs from 'nextjs-breadcrumbs'
// import PostalCode from '../components/forms/PostalCode'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function CoberturaRabbit() {

	useEffect(() => {
		fbq('track', 'FindLocation');
		if(window.innerWidth >= 768) {
			const image = document.querySelector('.rabbit-coverage-transition-image');
			const image2 = document.querySelector('.rabbit-coverage-transition-timeline');
			gsap.timeline().from(image, {
				scale: 0,
				duration: 0.6,
			}).from(image2, {
				opacity: 0,
				duration: 0.6,
			})
		}
	}, [])


	const style = {
		fontSize: 20,
		color: '#1C4F80'
	}

	return (
		<Layout
			title="Conoce nuestra cobertura y surte tu tienda | Rabbit®"
			description="Verifica nuestra cobertura, surtimos a + de 205 mil tiendas de abarrotes en Ciudad de México, Estado de México, Puebla, Jalisco, Guanajuato y Nuevo León. "
			keyWords="cobertura Rabbit, Rabbit, Rabbit Mexico, Rabbit CDMX, Rabbit Estado de México, Rabbit Puebla, Rabbit Nuevo León, Rabbit Jalisco, Rabbit Guanajuato"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_cobertura-rabbit.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<div className="page-coverage">
				<div className="container">
					<nav className="breadcrumb has-succeeds-separator">
						<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
					</nav>
				</div>
				<div className="hero is-fullheight">
					<div className="hero-body">
						<div className="container">
							<div className="columns">
								<div className="column is-half">
									<PostalCode title="Cobertura Rabbit®" subtitle="" />
									<div className="columns is-vcentered">
										<div className="column is-4">
											<div className="image">
												<img src="/vision-rabbit.png" alt="Nuestra visión en Rabbit®" title='vision-rabbit' loading="lazy"/>
											</div>
										</div>
										<div className="column is-8">
											<h1 style={style}>Tu Aliado Rabbit®️ te hará 1 visita a la semana con un amplio portafolio de productos para que puedas surtir tu tienda sin salir de ella.</h1>
										</div>
									</div>
								</div>
								<div className="column">
									<div className="image map-routes rabbit-coverage-transition-image">
										<img src="/mapa-cobertura-rabbit.png" alt="500 aliados Rabbit® cerca de tí"  loading="lazy"/>
									</div>
									<div className="image rabbit-coverage-transition-timeline">
										<img src="/timeline-cobertura-mapa.svg" alt="Conoce la cobertura de Rabbit" title="Estamos en CDMX, EdoMex, Puebla, Guanajuato, Nuevo Leon y Jalisco" loading="lazy"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}