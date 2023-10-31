import Link from 'next/link'
import Button from './Button'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Image from "next/image"

function Header() {

	const route = useRouter()
	const [menuStatus, setMenuStatus] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', function () {
			if (menuStatus === true) {
				setMenuStatus(false)
			}
		});
	})

	const showMenu = () => {
		setMenuStatus(!menuStatus);
	}

	return (
		<header className="header">
			<div className='header-top'>
				<div className="buttons is-centered">
					<Link href='https://rabbitmx.onelink.me/rfY7/xjhsdyzt'>
						<a className='downloadAppGtag' target="_blank" onClick={() => {
							gtag('event', 'download', {
								'TheEventAction': 'click',
							});
							gtag('event', 'conversion', { 'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso' });
						}}>
							<div className="image">
								{/* <img src="/descarga-app-rabbit-en-googleplay-android.svg" alt="Instala la App Rabbit para tu tienda de abarrotes en tu Android" title="Instala Rabbit en tu celular" loading="lazy"/> */}
								<Image width='130px' height='44px' src="/descarga-app-rabbit-en-googleplay-android.svg" alt="Instala la App Rabbit para tu tienda de abarrotes en tu Android" title="Instala Rabbit en tu celular" loading="lazy" />
							</div>
						</a>
					</Link>
					<Link href='https://rabbitmx.onelink.me/rfY7/xjhsdyzt'>
						<a className='downloadAppGtag' target="_blank" onClick={() => {
							gtag('event', 'download', {
								'TheEventAction': 'click',
							});
							gtag('event', 'conversion', { 'send_to': 'AW-10829665062/mFJkCMOdoZADEKam_qso' });
						}}>
							<div className="image">
								{/* <img src="/descarga-app-rabbit-en-appstore-iphone.svg" alt="Instala la App Rabbit para tu tienda de abarrotes en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy"/> */}
								<Image width='130px' height='44px' src="/descarga-app-rabbit-en-appstore-iphone.svg" alt="Instala la App Rabbit para tu tienda de abarrotes en tu iPhone" title="Descarga la aplicación Rabbit" loading="lazy" />
							</div>
						</a>
					</Link>
				</div>
			</div>
			<div className="container">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<div className="logo">
							<Link href="/" passHref>
								<div className="image">
									{/* <img src="/logo-app-rabbit.svg" alt="App Rabbit Logo, fortaleciendo tu tienda de abarrotes." title='logo-rabbit' loading="lazy"/> */}
									<Image width='140px' height='32px' src="/logo-app-rabbit.svg" alt="App Rabbit Logo, fortaleciendo tu tienda de abarrotes." title='logo-rabbit' loading="lazy" />
								</div>
							</Link>
						</div>
						<button className={`hamburguer ${menuStatus ? 'is-active' : ''}`} onClick={showMenu} >
							<span></span>
						</button>
					</div>
					<div className={`navbar-menu ${menuStatus ? 'is-active' : ''}`}>
						<div className="navbar-start">
							<div className={`navbar-item ${route.asPath === '/somos-rabbit' ? 'is-active' : ''}`}>
								<Link href="/somos-rabbit">
									<a>Somos Rabbit®</a>
								</Link>
							</div>
							<div className={`navbar-item ${route.asPath === '/abastecimiento-en-linea-app' ? 'is-active' : ''}`}>
								<Link href="/abastecimiento-en-linea-app">
									<a>App Rabbit®</a>
								</Link>
							</div>
							<div className={`navbar-item ${route.asPath === '/abastecimiento-presencial' ? 'is-active' : ''}`}>
								<Link href="/abastecimiento-presencial">
									<a>Abastecimiento</a>
								</Link>
							</div>
							<div className={`navbar-item ${route.asPath === '/aliado-rabbit' ? 'is-active' : ''}`}>
								<Link href="/aliado-rabbit">
									<a>Aliado Rabbit®</a>
								</Link>
							</div>
							{/* agrego seccion nueva */}
							<div className={`navbar-item ${route.asPath === '/terminal-rabbit' ? 'is-active' : ''}`}>
								<Link href="/terminal-rabbit">
									<a>Terminal Rabbit®</a>
								</Link>
							</div>
							{/* fin seccion nueva */}
							<div className={`navbar-item ${route.asPath === '/nuestros-partners' ? 'is-active' : ''}`}>
								<Link href="/nuestros-partners">
									<a>Nuestros Socios</a>
								</Link>
							</div>
							<div className={`navbar-item ${route.asPath === '/blog' ? 'is-active' : ''}`}>
								<Link href="/blog">
									<a>Blog</a>
								</Link>
							</div>
						</div>
						<div className="navbar-end">
							<div className="navbar-item p-0">
								<Link href="/contacto" passHref >
									<button className="button primary" onClick={() => {
										gtag('event', 'contacto', {
											'TheEventAction': 'click',
										});
										gtag('event', 'conversion', { 'send_to': 'AW-10829665062/VMtKCKmSoZADEKam_qso' });
									}}>Contacto</button>
								</Link>
							</div>
						</div>
					</div>

				</nav>
			</div>
			{
				route.pathname === '/' || route.asPath === '/abastecimiento-en-linea-app' ?
					<div className="label">
						<div className="container has-text-white">
							{/* <p>¡Da un gran salto de felicidad porque ya puedes consultar el catálogo Rabbit® <Link href="/catalogo-digital-feb2023.pdf"><a target="_blank">aquí</a></Link>! 🐰🧃🥫</p> */}
							{/* <p>¡Da un gran salto de felicidad porque la App Rabbit® ya está más cerca de ti! Verifica si llegamos a tu tienda <Link href="/cobertura-rabbit"><a>aquí</a></Link></p> */}
							<p>¡Da un gran salto de felicidad porque ya puedes consultar el catálogo Rabbit® <Link href="/CATALOGO_DIGITAL_julio_Nacional.pdf"><a target="_blank">Valle de México, Querétaro, Puebla y León</a></Link> <Link href="/CATALOGO_DIGITAL_julio_Nortel.pdf"><a target="_blank"> Monterrey y Guadalajara</a></Link>! 🐰🧃🥫</p>
						</div>
					</div> : ''
			}
		</header>
	)
}

export default Header