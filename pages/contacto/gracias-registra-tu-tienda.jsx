import Link from "next/link";
import Layout from "../../components/Layout";
import { useEffect } from "react";

export default function ThankYouPagePedidoRegistro() {
	useEffect(() => {
		fbq('track', 'Lead');
	})
    return (
        <Layout
			noIndex={true}
		>
			<div className="page-thank-you hero is-fullheight">
				<div className="hero-body is-flex-direction-column is-justify-content-center is-align-items-center">
					<div className="has-text-centered maxWidth">
						<h1><strong>Gracias</strong></h1>
						<p>Muy pronto estaremos en contacto para dar seguimiento a tu situación. Mantente al pendiente de tu correo o número telefónico para que no nos dejes colgados.</p>
					</div>
					<div className="buttons is-centered">
						<Link href="/">
							<a className="button primary">Regresar al home</a>
						</Link>
					</div>
				</div>
			</div>
        </Layout>
    )
}