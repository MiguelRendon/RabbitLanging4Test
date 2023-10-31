import Layout from '../components/Layout'
import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import React, { useEffect, useState } from 'react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import FsLightbox from 'fslightbox-react';

SwiperCore.use([Pagination, Navigation, Autoplay])



export default function BienvenidaTerminal() {
	
	const [isPlayingV1, setisPlayingV1] = useState(false);
	const [isPlayingV2, setisPlayingV2] = useState(false);
	const [isPlayingV3, setisPlayingV3] = useState(false);
	const [isPlayingV4, setisPlayingV4] = useState(false);
	useEffect(()=>{

		if (window.location.pathname.indexOf("/bienvenida-terminalrabbit") == 0)
		{
			const button_next = document.querySelector(".swiper-button-next")
			const button_prev = document.querySelector(".swiper-button-prev")
			// const slider_bienvenida = document.querySelector(".slider-container-bienvenida")
			button_next.style="top:60%;"
			button_prev.style="top:60%;"
			// slider_bienvenida.style=" width: 75%;"
		}
	},[])
	return (
		<Layout>
			<div className='welcome-terminal'>
				<div className="container">
					<nav className="breadcrumb">
						<Breadcrumbs rootLabel="Inicio"  activeItemClassName="is-active" replaceCharacterList={[{from:'bienvenida-terminalrabbit',to:'Bienvenida Terminal Rabbit'}]}/>
					</nav>
				</div>
				<div className="row">
					<div className="mainTxtWrap">
						<div className="text">
							<h1><strong>¡Felicidades ya tienes tu Terminal <span>Rabbit®</span>!</strong></h1>
							<p>Échale un ojo a esta información y encuentra el paso a paso para sacarle el mayor provecho a tu Terminal, también encontrarás materiales de apoyo para que tus clientes sepan que tu tienda ya dio el salto.</p>
							<p><b>Vincula, registra y gana más con Rabbit®.</b></p>
						</div>
					</div>
					<div className="mainImage"></div>
				</div>
				<div className="row secondSection">
					<div className="manualBlock">
						<div className="containerManual">
							<h2>¡A sacarle todo el provecho a tu Terminal Rabbit®!</h2>
							<p>Descubre salto a salto lo fácil que es usarla con estas sencillas instrucciones que tenemos para ti y ¡Estrénala ahora!</p>
							<div className="imgManual">
								<img src="/manual.jpg" alt="Manual visual" />
							</div>
							<div className="descargaBtnWrpr">
								<a href="/Manual_Fintech_2023.pdf" target="_blank" className="downloadLink">Descarga tu manual</a>
							</div>
						</div>
					</div>
					<div className="stickersBlock">
						<div className="containerStikers">
						<h2>¡Avísales que ya aceptas pago con tarjeta!</h2>
                        <p>
                            <b>1.</b> Descarga<br />
                            <b>2.</b> Imprime<br />
                            <b>3.</b> Pega
                        </p>
                        <ul>
                            <li>
                                <div className="imageStickerTarjeta"><img src="sticker-aceptamos-tarjeta.png" alt="Aceptamos tarjeta de crédito" /></div>
                            </li>
                        </ul>
                        <div className="descargaBtnWrpr"><a href="media/Rabbit_Sticker_16X16.pdf" className="downloadLink" target="_blank">Descarga tus stickers</a></div>
						</div>
					</div>
				</div>
				<div className="videoSection">
					<div className="videoTitle"><h2 className='title_h2'>Videos</h2></div>
					<div className="sliderContainer">

						<Swiper
							spaceBetween={10}
							slidesPerView={1}
							autoplay= {{
								"delay": 8000,
								"disableOnInteraction": false
							}}
							breakpoints={{
								768: {
									slidesPerView: 2,
									spaceBetween: 0,
								},
								1091: {
									slidesPerView: 3,
									spaceBetween: 0
								}
							}}
							pagination={{ "clickable": true }}
							navigation={true}	
						>
							<SwiperSlide >
								<div className="tarjetaVideoBienvenida">
									<div className="holderVideoTextBienvenida"><h3>Conoce la nueva Terminal Rabbit®</h3></div>
									
									<div className="holderVideoImage">
										<img src="thmbs/video_1.jpg" className="btnMostrarModal" data-bs-toggle="modal" data-bs-target="#" data-videoid="F9kM7_lPjR0" alt="Video" onClick={() => setisPlayingV1(!isPlayingV1)} />
									</div>
						
								</div>
							</SwiperSlide>
							<SwiperSlide  >
								<div className="tarjetaVideoBienvenida">
									<div className="holderVideoTextBienvenida"><h3>¿Como registrar mi TPV en la App Rabbit®?</h3></div>
									<div className="holderVideoImage"><img src="thmbs/video_2.jpg" className="btnMostrarModal" data-bs-toggle="modal" data-bs-target="#" data-videoid="gHqy5ldNjuw" alt="Video" onClick={() => setisPlayingV2(!isPlayingV2)}/></div>
								
								</div>
							</SwiperSlide>
							<SwiperSlide  >
							<div className="tarjetaVideoBienvenida">
									<div className="holderVideoTextBienvenida"><h3>Aprende a cobrar con tu nueva Terminal Rabbit®</h3></div>
										<div className="holderVideoImage"><img src="thmbs/video_3.jpg" className="btnMostrarModal" data-bs-toggle="modal" data-bs-target="#" data-videoid="DXM1Cjz5a_c" alt="Video" onClick={() => setisPlayingV3(!isPlayingV3)}/></div>
										
									</div>
							</SwiperSlide>
							<SwiperSlide  >
							<div className="tarjetaVideoBienvenida">
									<div className="holderVideoTextBienvenida"><h3>¿Dónde puedo ver las ganancias<br></br> de mi App Rabbit®?</h3></div>
										<div className="holderVideoImage"><img src="thmbs/video_4.jpg" className="btnMostrarModal" data-bs-toggle="modal" data-bs-target="#" data-videoid="DXM1Cjz5a_c" alt="Video" onClick={() => setisPlayingV4(!isPlayingV4)}/></div>										
									</div>
							</SwiperSlide>
					</Swiper>
			<FsLightbox
				toggler={isPlayingV1}
				sources={["https://www.youtube.com/watch?v=z-122gD-pl0"]}
			/>
			<FsLightbox
				toggler={isPlayingV2}
				sources={["https://www.youtube.com/watch?v=6YsxTwKVLKs"]}
			/>
			<FsLightbox
				toggler={isPlayingV3}
				sources={["https://www.youtube.com/watch?v=AL-VRMlX60Y"]}
			/>
			<FsLightbox
				toggler={isPlayingV4}
				sources={["https://www.youtube.com/watch?v=Xi7_SvsWSpk"]}
			/>

					</div>
				</div>
			</div>
			<script dangerouslySetInnerHTML={{__html:""}}>
				
			</script>
		</Layout>
	)
}