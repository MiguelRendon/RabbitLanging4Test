import Layout from "../../components/Layout"
import Note from "../../components/Note"

import Breadcrumbs from 'nextjs-breadcrumbs'
import Link from 'next/link'

import React, { useEffect, useRef } from 'react'
import { useRouter } from "next/router";
import { createClient } from 'contentful'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const richText = {
	renderNode: {
		[INLINES.HYPERLINK]: (node) => <Link href={node.data.uri}><a target="_blank" rel="noreferrer">{node.content[0].value}</a></Link>,
		[INLINES.ASSET_HYPERLINK]: (node) => <a href={node.content[0].value} target="_blank" rel="noreferrer"><div className="image"><img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} title={node.data.target.fields.title} oading="lazy"></img></div></a>,
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const type = node.data.target.fields.file.contentType
			if (type === "video/mp4") {
				return (
					<div className="video-iframe">
						<video className="responsive-iframe" controls controlsList="nodownload">
							<source src={node.data.target.fields.file.url} />
						</video>
					</div>
				)
			} else {
				return (
					<div className="image">
						<img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} title={node.data.target.fields.title} loading="lazy" />
					</div>
				)
			}
		}
	}
}

export async function getServerSideProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'note',
		'fields.slug': params.slug
	})
	const notes = await client.getEntries({
		content_type: 'note'
	})
	return {
		props: {
			note: items[0],
			notes: notes.items
		}
	}

}

gsap.registerPlugin(ScrollTrigger)

export default function Interno({ note, notes }) {
	const { heroImage, content } = note.fields
	const contentItem = useRef(null)
	const router = useRouter()

	function getRelatedNotes() {
		const newArray = [];
		notes.map(item => {
			if (item.fields.slug !== note.fields.slug && item.fields.category === note.fields.category) {
				newArray.push(item)
			}
		})
		return newArray.slice(0, 3)
	}

	useEffect(() => {
		let line = document.querySelector('.progress-bar .line');
		let rabbit = document.querySelector('.progress-bar .object');
		gsap.timeline({
			scrollTrigger: {
				trigger: contentItem.current,
				start: 'top 20%',
				end: 'bottom 80%',
				pin: '.progress-bar',
				scrub: true,
			}
		}).from(line, {
			height: '0%',
			duration: 1
		}).from(rabbit, {
			top: 0,
			duration: 1
		}, '-=')
	}, [])

	return (
		<Layout
			title={note.fields.metaTitle}
			description={note.fields.metaDescription}
			keyWords={note.fields.metaKeyWords}
			currentURL={note.fields.slug}
			imageOpengraph={'https:'+heroImage.fields.file.url}
			schema={
				<script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `
					{
						"@context": "https://schema.org/",
						"@type": "BlogPosting",
						"mainEntityOfPage": {
							"@type": "WebPage",
							"@id": "https://rabbitmx.com/blog/${note.fields.slug}"
						},
						"headline": "${note.fields.title}",
						"description": "${note.fields.metaDescription}",
						"image": {
							"@type": "ImageObject",
							"url": "${'https:' + heroImage.fields.file.url}",
							"width": "${heroImage.fields.file.details.image.width}",
							"height": "${heroImage.fields.file.details.image.height}"
						},
						"author": {
							"@type": "Organization",
							"name": "Rabbit"
						},
						"publisher": {
							"@type": "Organization",
							"name": "Rabbit",
							"logo": {
								"@type": "ImageObject",
								"url": "https://rabbitmx.com/logo.svg",
								"width": "150",
								"height": "34"
							}
						},
						"datePublished": "${note.sys.createdAt}",

						"dateModified": "${note.sys.updatedAt}"
					}
				`}}></script>
			}
		>
			<section className="page-blog-slug has-dot-background">
				<div className="hero">
					<div className="hero-body is-centered p-0">
						<div className="container">
							<div className="image">
								<img src={heroImage.fields.file.url} alt={note.fields.title} loading="lazy" />
								{/* <img src={heroImage.fields.file.url} alt={note.fields.title} onLoad={console.log({notes})} loading="lazy" /> */}
							</div>
							<nav className="breadcrumb has-succeeds-separator">
								<Breadcrumbs
									rootLabel="Inicio"
									activeItemClassName="is-active"
									replaceCharacterList={[
										{ from: note.fields.slug, to: note.fields.title },
										{ from: '!', to: '' },
										{ from: '¡', to: '' },
										{ from: '¿', to: '' },
										{ from: '?', to: '' },
										{ from: '.', to: '' },
										{ from: '-', to: '' }
									]} />
								<p>{note.fields.publishDate}</p>
							</nav>
						</div>
					</div>
				</div>
				<div ref={contentItem} className="container px-3 py-0 is-overflow-visible">
					<div className="columns is-centered">
						<div className="column is-10 p-0">
							<div className="has-text-centered">
								<h1><strong>{note.fields.title}</strong></h1>
							</div>
						</div>
						<div className="column is-10 p-0">
							<div className="rich-content">
								{
									documentToReactComponents(content, richText)
								}
							</div>
						</div>
					</div>
					<div className="progress-bar">
						<span className="object"></span>
						<span className="line"></span>
					</div>
				</div>
				<div className="container">
					<div className="content-end">
						<p>Escrito por: <strong>{note.fields.author}</strong></p>
						<div className="has-text-centered">
							<p><strong>Compartir</strong></p>
							<div className="social-media is-justify-content-center">
								<Link href={`https://www.facebook.com/sharer.php?u=${'rabbitmx.com' + router.asPath}`} >
									<a target="_blank">
										<div className="icon is-medium">
											<div className="image">
												<img src="/contacta-rabbit-por-facebook.svg" alt="Contacto de Rabbit en Facebook" title="Contáctanos mediante Facebook" />
											</div>
										</div>
									</a>
								</Link>
								<Link href={`https://api.whatsapp.com/send?text=${'rabbitmx.com' + router.asPath}`} >
									<a target="_blank">
										<div className="icon is-medium">
											<div className="image">
												<img src="/contacta-rabbit-por-whatsapp.svg" alt="Contacto de Rabbit en WhatsApp" title='Contáctanos mediante WhatsApp' />
											</div>
										</div>
									</a>
								</Link>
								<Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${'rabbitmx.com' + router.asPath}`} >
									<a target="_blank">
										<div className="icon is-medium">
											<div className="image">
												<img src="/contacta-rabbit-por-linkedin.svg" alt="Contacto de Rabbit en Linkedin" title="Contáctanos mediante Linkedin" />
											</div>
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
					{
						note.fields.infoSource ?
							<div className="container">
								<p><strong>Fuentes:</strong></p>
								<div className="info-sources">
									{
										note.fields.infoSource.map(item => (
											<Link key={item} href={item}>
												<a target="_blank">{item}</a>
											</Link>
										))
									}
								</div>
							</div>
							: ''
					}

				</div>
				<div className="container">
					{
						getRelatedNotes().length <= 0 ? '' :
							<>
								<div className="has-text-centered">
									<h3><strong>Otras Notas</strong></h3>
								</div>
								<div className="columns is-centered">
									{
										getRelatedNotes().map(item => (
											<div key={item.sys.id} className='column is-4'>
												<Note
													image={item.fields.thumbnail.fields.file.url}
													title={item.fields.title}
													date={item.fields.publishDate}
													time={item.fields.readDuration}
													content={item.fields.metaDescription}
													category={item.fields.category}
													link={'/blog/' + item.fields.slug}
												/>
											</div>
										))
									}
								</div>
							</>
					}
				</div>
			</section>
		</Layout>
	)
}