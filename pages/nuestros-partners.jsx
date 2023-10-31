import Dymamic from 'next/dynamic'
const Layout = Dymamic(import('../components/Layout'))
const Link = Dymamic(import('next/link'))
const Image = Dymamic(import("next/image"))
const Breadcrumbs = Dymamic(import("nextjs-breadcrumbs"))

export default function NuestrosPartners() {
    return (
        <Layout
			title="Sé parte de nuestros Socios Comerciales | Rabbit® Catálogo"
			description="Conoce los beneficios que tienen nuestros socios. Súmate a las marcas de renombre que hacemos llegar a los  tenderos en México y crece tu negocio."
			keyWords="socios comerciales rabbit, socio rabbit"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_nuestros-partners.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
            <div className="page-partners">
				<div className="hero is-halfheight page-hero has-dot-background">
					<div className="container">
						<nav className="breadcrumb has-succeeds-separator">
							<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" replaceCharacterList={[{ from: 'nuestros-partners', to: 'nuestros socios' }]}/>
						</nav>
					</div>
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered">
								<div className="column">
									<div className="cont-info">
										<h1><strong>Nuestro Socios Comerciales</strong></h1>
										<p>Los tenderos de México empiezan a solicitar más facilidades de compra y entrega para el abastecimiento de sus negocios, es por eso que tenemos las marcas más solicitadas por los consumidores.</p>
										<p>Sé parte de nuestro catálogo y haz que tu producto llegue a más de 205 mil puntos de venta en Ciudad de México, Estado de México, Puebla, Jalisco, Guanajuato y Nuevo León.</p>
									</div>
								</div>
								<div className="column">
									<div className="image">
										<Image
											src="/nuestros-socios.webp"
											alt="Sé parte de nuestro catálogo Rabbit®"
											title="nuestros-socios"
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

				<div className="product-behind has-round-bottom">
					<div className="container">
						<div className="cont-info has-text-centered">
							<h2><strong>Descubre los beneficios que tenemos para nuestros socios</strong></h2>
							<p>Llegamos a más de 205 mil puntos de venta en Ciudad de México, Estado de México, Puebla, Jalisco, Guanajuato y Nuevo León gracias a nuestra red logística.</p>
							<div className="columns is-mobile">
								<div className="column is-4-desktop is-4-tablet is-12-mobile">
									<div className="scope">
										<div className="image">
											<Image
												src="/tienda-rabbit.webp"
												alt="Apoyamos a que tu tienda de el salto"
												title="Tu Tienda de abarrotes da el salto con Rabbit"
												loading="lazy"
												width="250"
												height="250"
											/>
										</div>
										<div className="cont-info">
											<h3><strong>10</strong></h3>
											<p><strong>Oficinas de ventas</strong></p>
										</div>
									</div>
								</div>
								<div className="column is-4-desktop is-4-tablet is-12-mobile">
									<div className="scope">
										<div className="image">
											<Image
												src="/entrega-rabbit.webp"
												alt="Servicio de entrega Rabbit"
												title="Conoce el servicio de entrega Rabbit"
												loading="lazy"
												width="250"
												height="250"
											/>
										</div>
										<div className="cont-info">
											<h3><strong>8</strong></h3>
											<p><strong>Centros de distribución</strong></p>
										</div>
									</div>
								</div>
								<div className="column is-4-desktop is-4-tablet is-12-mobile">
									<div className="scope">
										<div className="image">
											<Image
												src="/conoce-al-aliado-rabbit-circ.webp"
												alt="El aliado Rabbit te ayuda en tu tienda"
												description="Conoce al aliado Rabbit"
												loading="lazy"
												width="250"
												height="250"
											/>
										</div>
										<div className="cont-info">
											<h3><strong>+ de 800</strong></h3>
											<p><strong>Aliados Rabbit®</strong></p>
										</div>
									</div>
								</div>
							</div>
							<div>
								<p><strong>Si quieres ser parte de Rabbit®, déjanos tus datos.</strong></p>
								<Link href="/contacto">
									<a className="button primary">Sé socio Rabbit®</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="rabbit-coverage">
					<div className="container py-0">
						<div className="columns is-vcentered">
							<div className="column">
								<div className="cont-info">
									<h2><strong>Rabbit® da un salto cada vez más grande</strong></h2>
									<p>Únete al catálogo de Rabbit® para que tu marca también llegue a más de <span>205 mil tiendas en México</span></p>
									<p>Llevaremos un amplio portafolio de soluciones tecnológicas para fortalecer y hacer crecer sus negocios.</p>
									<div className="buttons">
										<p><strong>¿Quieres ser nuestro <span>socio comercial</span> ?</strong></p>
										<Link href="/contacto">
											<a className="button primary">Sé socio Rabbit®</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="image">
									<Image 
										src="/socio-comercial.webp"
										alt="Sé nuestro socio comercial Rabbit®"
										title="socio-comercial"
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
        </Layout>
    )
}