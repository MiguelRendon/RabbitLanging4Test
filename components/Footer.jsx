import Link from 'next/link'
import Button from './Button'
import Image from "next/image"

export default function Footer () {

    return (
        <footer className="footer">
			<div className="container">
				<div className="footer-logo">
					<Link href="/" passHref>
						<div className="image">
							<Image width='210px' height='48px' src="/logo-app-rabbit.svg" alt="App Rabbit Logo, fortaleciendo tu tienda de abarrotes" loading="lazy" />
							{/* <img src="/logo-app-rabbit.svg" alt="App Rabbit Logo, fortaleciendo tu tienda de abarrotes" loading="lazy" /> */}
						</div>
					</Link>
					<div className="social-media">
						<Link href='https://msng.link/o/?mexrabbit=fm'>
							<a target="_blank">
								<div className="icon is-medium">
									<div className="image">
										<Image width='32px' height='32px' src='/contacta-rabbit-por-messenger-2.svg' alt='Contacto de Rabbit en WhatsApp' title='Contáctanos mediante WhatsApp' loading="lazy"/>
										{/* <img src='/contacta-rabbit-por-whatsapp.svg' alt='Contacto de Rabbit en WhatsApp' title='Contáctanos mediante WhatsApp' loading="lazy"/> */}
									</div>
								</div>
							</a>
						</Link>
						<Button
							cat='flt_c002'
							socialMedia={true}
							link='https://wa.me/5215579087880'
							image='/contactanos-por-whatsapp.svg'
							alt='Contacto de Rabbit en Facebook'
							titleSeo='Contáctanos mediante Facebook'
							width='32px' 
							height='32px'
						/>
						<Link href='https://www.facebook.com/mexrabbit'>
							<a target="_blank">
								<div className="icon is-medium">
									<div className="image"> 
										<Image width='32px' height='32px' src='/contactanos-por-facebook.svg' alt='Contacto de Rabbit en Messenger' title='Contáctanos mediante Messenger' loading="lazy"/>
										{/* <img src='/contacta-rabbit-por-messenger.svg' alt='Contacto de Rabbit en Messenger' title='Contáctanos mediante Messenger' loading="lazy"/> */}
									</div>
								</div>
							</a>
						</Link>
						<Button
							cat='flt_c002'
							socialMedia={true}
							link='https://www.instagram.com/rabbit.mexico/'
							image='/contacta-rabbit-por-instagram_2.svg'
							alt='Contacto de Rabbit App en Instagram'
							width='32px' 
							height='32px'
						/>
						<Button
							cat='flt_c002'
							socialMedia={true}
							link='https://www.youtube.com/channel/UCIIMFO4mWIdDGIF3V3gdC7Q'
							image='/canal-app-rabbit-youtube_2.svg'
							alt="Canal de App Rabbit en YouTube"
							width='32px' 
							height='32px'
						/>
						<Button
							cat='flt_c002'
							socialMedia={true}
							link='https://vm.tiktok.com/ZMRqFhc6s/'
							image='/tiktok-rabbit-app_2.svg'
							alt='Conoce el TikTok de App Rabbit'
							width='32px' 
							height='32px'
						/>
					</div>
					<div className="legales">
						<p>© 2023 Copyright Rabbit®</p>
						<Link href="/aviso-de-privacidad">
							<a>Aviso de Privacidad</a>
						</Link>
						<Link href="/politica-de-cookies">
							<a>Política de cookies</a>
						</Link>
						<Link href="/terminos-y-condiciones">
							<a>Términos y Condiciones</a>
						</Link>
						<Link href="/terminos-promociones">
							<a>Términos de Promociones</a>
						</Link>
						<Link href="/terminos-dinamicas">
							<a>Términos de Dinámicas</a>
						</Link>
						<Link href="/contrato-de-procesamiento-de-transacciones">
							<a>Términos y Condiciones Terminal Rabbit</a>
						</Link>
					</div>
				</div>
			</div>
        </footer>
    )
}