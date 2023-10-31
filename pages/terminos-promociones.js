import Layout from "../components/Layout";
import Breadcrumbs from 'nextjs-breadcrumbs';
import Link from 'next/link';
import { createClient } from 'contentful';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const richText = {
	renderNode: {
		[INLINES.HYPERLINK]: (node) => <Link href={node.data.uri}><a target="_blank" rel="noreferrer">{node.content[0].value}</a></Link>
	}
}

export async function getServerSideProps() {
	const res = await client.getEntries({ 
		content_type: 'promotionalTermsRabbit'
	})
	return {
		props: {
			legales: res.items
		}
	}
	
}

export default function TerminosPromociones({legales}) {
	return (
		<Layout
			title="Términos y Condiciones Promociones | Rabbit®"
			description="Entra y conoce los Términos y Condiciones de las promociones que puedes aprovechar con Rabbit®. Surte tu tienda de abarrotes y obtén las mejores ofertas."
			keyWords=""
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_terminos-promociones.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<div className="container">
				<nav className="breadcrumb has-succeeds-separator">
					<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
				</nav>
				<div className="has-text-centered">
					<h1><strong>{legales[0].fields.title}</strong></h1>
				</div>
				<div className="box">
					<div className="columns is-centered">
						<div className="column is-9">
							<div className="mb-5">
								<div className="has-text-justify">
									{documentToReactComponents(legales[0].fields.content, richText)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}