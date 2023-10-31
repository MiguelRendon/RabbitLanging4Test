import Layout from "../components/Layout";
import Breadcrumbs from 'nextjs-breadcrumbs';
import { useState } from "react";
import Link from "next/link";

import { createClient } from 'contentful';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

const richText = {
	renderNode: {
		[INLINES.HYPERLINK]: (node) => <a href={node.data.uri} target="_blank" rel="noreferrer">{node.content[0].value}</a>,
		[BLOCKS.TABLE]: (node, children) => (
			<table className="table is-bordered is-striped">
				<tbody>{children}</tbody>
			</table>
		),
		[BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
    	[BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
		[BLOCKS.UL_LIST]: (node, children) => (
			<ul className="rabbit-list">{children}</ul>
		)
	}
}

export async function getServerSideProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})
	const res = await client.getEntries({ 
		content_type: 'dynamicTerms'
	})
	return {
		props: {
			legales: res.items
		}
	}
	
}

export default function TerminosDinamicas({ legales }) {

	const [toggleState, setToggleState] = useState(legales.length > 0 ? legales[0].sys.id : 0);
	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<Layout
			title="Términos y Condiciones Dinámicas | Rabbit®"
			description="Encuentra aquí los Términos y Condiciones, mecanismos y premios a detalle que aplican en las dinamicas llevadas a cabo en las redes sociales de Rabbit®."
			keyWords="Rabbit, Rabbit México, Rabbit términos y condiciones dinamicas"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_terminos-dinamicas.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<div className="container">
				<nav className="breadcrumb has-succeeds-separator">
					<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
				</nav>
				<div className="has-text-centered">
					<h1><strong>Términos y Condiciones de Dinámicas</strong></h1>
				</div>
				{
					legales.length > 0 ? 
					<>
						<div className="form-tabs">
							<div className="tabs is-large is-centered">
								<ul>
									{
										legales.map(item => (
											<li key={item.sys.id} onClick={() => toggleTab(item.sys.id)} className={toggleState === item.sys.id ? "is-active" : ""}>
												<a>{item.fields.title}</a>
											</li>
										))
									}
								</ul>
							</div>
						</div>
						<div className="content-tabs">
							{
								legales.map(item => (
									<div key={item.sys.id} className={`content box has-text-justify ${toggleState === item.sys.id ? "is-active" : ""}`}>
										<div className="cont-info">
											{documentToReactComponents(item.fields.content, richText)}
										</div>
									</div>
								))
							}
						</div>
					</>
					:
					<>
						<div style={{display: 'flex', alignItems: 'center', textAlign: 'center', minHeight: '500px'}}>
							<h2><strong>Por el momento no contamos con dinámicas pero sigue al pendiente en nuestras redes sociales.</strong></h2>
						</div>
					</>
				}
			</div>
		</Layout>
	)
}