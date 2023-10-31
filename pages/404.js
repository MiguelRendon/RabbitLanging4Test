import Link from "next/link"
import Layout from "../components/Layout"

export default function Custom404() {
	return (
		<Layout title="Rabbit Not Found">
			<section className="page-not-found">
				<div className="hero is-fullheight">
					<div className="hero-body">
						<div className="container">
							<div className="columns is-vcentered">
								<div className="column">
									<div className="cont-info">
										<h1><strong>¡Uups!</strong></h1>
										<p>No pudimos encontrar la página que buscas, pero podemos ayudarte a encontrar el camino de regreso.</p>
										<div className="buttons">
											<Link href="/">
												<a className="button primary">¡Da el salto!</a>
											</Link>
										</div>
									</div>
								</div>
								<div className="column">
									<div className="image">
										<img src="/error-404.svg" alt="Página no encontrada" title="error-404" loading="lazy"/>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}