import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'
import Image from "next/image"

SwiperCore.use([Pagination, Navigation, Autoplay])

export default function SliderImages({children}) {
	return (
		<div className="slider-images-cont">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column is-half">
						{
							children
						}
					</div>
					<div className="column is-half">
						<Swiper
							spaceBetween={0}
							slidesPerView={1}
							autoplay= {{
								"delay": 4000,
								"disableOnInteraction": false
							}}
							pagination={{ "clickable": true }}
							navigation={true}
						>
							{
								sliderCont.map(item => (
									<SwiperSlide key={item.image}>
										{/* <img src={`/cobertura-${item.image}.webp`} alt={item.title} title={item.image} loading="lazy"/> */}
										<Image width='643px' height='482px' src={`/cobertura-${item.image}.webp`} alt={item.title} title={item.image} loading="lazy"/>
									</SwiperSlide>
								))
							}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

const sliderCont = [
	{
		image: 'toluca',
		title: 'Contamos con cobertura en Toluca'
	},
	{
		image: 'puebla',
		title: 'Contamos con cobertura en Puebla'
	},
	{
		image: 'xochimilco',
		title: 'Contamos con cobertura en Xochimilco'
	},
	{
		image: 'lindavista',
		title: 'Contamos con cobertura en la colonia Lindavista'
	},
	{
		image: 'los-reyes',
		title: 'Contamos con cobertura en Los Reyes Edo de México'
	},
	{
		image: 'coacalco',
		title: 'Contamos con cobertua en Coacalco'
	},
	{
		image: 'condesa',
		title: 'Contamos con cobertura en La Condesa'
	},
	{
		image: 'santa-fe',
		title: 'Contamos con cobertura en Santa Fe'
	},
	{
		image: 'guadalajara',
		title: 'Contamos con cobertura en Guadalajara'
	},
	{
		image: 'monterrey',
		title: 'Contamos con cobertura en Monterrey'
	},
	{
		image: 'leon',
		title: 'Contamos con cobertura en Leon'
	},
	{
		image: 'queretaro',
		title: 'Contamos con cobertura en Querétaro'
	},	
]