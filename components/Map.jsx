import PostalCode from './forms/PostalCode'
import Image from 'next/image'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Map({title, subtitle, subClass,id}) {
	useEffect(() => {
		if(window.innerWidth >= 768) {
			const image = document.querySelector('.rabbit-coverage-transition-image');
			const image2 = document.querySelector('.rabbit-coverage-transition-timeline')
			gsap.timeline({
				scrollTrigger: {
					trigger: '.rabbit-coverage',
					start: 'top center',
				}
			}).from(image, {
				scale: 0,
				duration: 0.6,
			}).from(image2, {
				opacity: 0,
				duration: 0.6,
			}, "+=0.1")
		}	
	}, [])
	return (
		<div id={id} className={'rabbit-coverage ' + subClass}>
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column">
						<div className="cont-info">
							<PostalCode title={title} subtitle={subtitle} />
						</div>
					</div>
					<div className="column">
						<div className="image map-routes rabbit-coverage-transition-image">
							<Image
								src="/mapa-cobertura-rabbit.webp"
								alt="500 aliados Rabbit® cerca de tí"
								loading="lazy"
								width="666"
								height="589"
							/>
						</div>
						<div className="image rabbit-coverage-transition-timeline">
							<Image
								src="/linea_del_tiempo.webp"
								alt="Conoce la cobertura de Rabbit"
								title="Estamos en CDMX, EdoMex, Puebla, Guanajuato, Nuevo Leon y Jalisco"
								loading="lazy"
								width="547px"
								height="47px"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}