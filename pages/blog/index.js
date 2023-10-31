import Layout from '../../components/Layout'
import Note from '../../components/Note'

import Breadcrumbs from 'nextjs-breadcrumbs'
import Image from 'next/image'

import { useState } from 'react'
import { createClient } from 'contentful'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination, Navigation, Autoplay])


export async function getServerSideProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})
	const res = await client.getEntries({ 
		content_type: 'note'
	})
	return {
		props: {
			notes: res.items
		}
	}
	
}

export default function Blog({ notes }) {
	const [itemsNote, setItemsNote] = useState(notes);
	const [number, setNumber] = useState(6)
	
	const filterItem = (categoryItem) => {
		const updatedItems = notes.filter((currentItem) => {
			return currentItem.fields.category === categoryItem
		})
		setItemsNote(updatedItems)
		anchor()
	}
	
	function getLastNotes() {
		const newArray = [];
		notes.map(item => {
			if(item.fields.featured === false) {
				newArray.push(item)
			}
		})
		return newArray.slice(0,2)
	}
		
	function anchor() {
		const notesCont = document.querySelector('.all-notes');
		document.querySelector('html, body').scrollTo({
			top: notesCont.offsetTop - 50,
			left: 0,
			behavior: 'smooth'
		})
	}

	function allNotesAnchor() {
		anchor()
		setItemsNote(notes)
	}

	// function dateOrder(data) {
	// 	const dates = data.map(item => {
	// 		return new Date(item.sys.createdAt)
	// 	})
	// 	const datesOrdered = dates.sort(function(a, b) {
	// 		return a - b
	// 	})
	// 	const datesOrdered2 = dates.filter((current) => {
	// 		return current - new Date()
	// 	})
	// 	console.log(datesOrdered2.reverse());
	// }

	return (
		<Layout
			title='Blog para tenderos | Rabbit®'
			description='Encuentra en nuestro Blog Rabbit® artículos sobre consejos, novedades, noticias y más. ¡Conoce todo lo que tenemos para tu tienda de abarrotes!'
			keyWords='Rabbit, Rabbit México, Rabbit blog, blog tiendas'
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_blog.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
			>
			<section className='has-dot-background'>
				<div className="container">
					<nav className="breadcrumb has-succeeds-separator">
						<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
					</nav>
					
					<h1>
						<strong>Blog </strong>
						<br></br>
						<span>Da el salto con Rabbit®</span>
					</h1>
					<div className='columns is-centered my-5'>
						<div className='buttons is-centered is-flex-direction-row'>
							<button className='button primary' onClick={() => allNotesAnchor()}>Todos</button>
							<button className='button primary' onClick={() => filterItem('somos-rabbit')}>Somos Rabbit</button>
							<button className='button primary' onClick={() => filterItem('da-el-salto')}>Da el salto a tu tienda</button>
							<button className='button primary' onClick={() => filterItem('dimos-el-salto')}>Ya dimos el salto</button>
						</div>
						<div className='column is-8'>
							<div className='blog-slider has-border-2 bg-base-2'>
								<Swiper
									spaceBetween={0}
									slidesPerView={1}
									autoplay={{
										"delay": 18000,
										"disableOnInteraction": false
									}}
									pagination={{ "clickable": true }}
									navigation={true}
									>
										<SwiperSlide>
											<div className="blog-slide">
												<div className="image">
													<Image
														src="/blog-rabbit.gif"
														alt="Blog Rabbit Saltos que mejoran tu tienda"
														title="Encuentra los artículos que llevarán a tu tienda a dar el salto"
														width="600"
														height="460"
														loading="lazy"
													/>
												</div>
											</div>
										</SwiperSlide>
										{
											notes.slice(0, 2).map(item => (
												<SwiperSlide key={item.sys.id}>
													<div className='blog-slide'>
														<Note
															image={item.fields.thumbnail.fields.file.url}
															link={'/blog/'+item.fields.slug}
															featured={true}
														/>
													</div>
												</SwiperSlide>
											))
										}
								</Swiper>
							</div>
						</div>
						<div className='column is-4'>
							<h4 className="mt-0 mb-5"><strong>Lo más reciente</strong></h4>
							<div className='columns'>
								{
									getLastNotes().map(item => (
										<div key={item.sys.id} className='column is-12 p-0 pb-5'>
											<Note
												title={item.fields.title}
												date={item.fields.publishDate}
												time={item.fields.readDuration}
												content={item.fields.metaDescription}
												link={'/blog/'+item.fields.slug}
											/>
										</div>
									))
								}
							</div>
						</div>
					</div>
					<div className="all-notes">
						<div className='cont-info has-text-centered'>
							<h2><strong>Los saltos más recientes</strong></h2>
							<p>¡Aquí encontrarás los últimos artículos que llevarán a tu negocio a dar el salto!</p>
						</div>
						<div className='columns'>
							{
								itemsNote.slice(0, number).map(item => (
									<div key={item.sys.id} className='column is-4'>
										<Note
											image={item.fields.thumbnail.fields.file.url}
											title={item.fields.title}
											date={item.fields.publishDate}
											time={item.fields.readDuration}
											content={item.fields.metaDescription}
											category={item.fields.category}
											link={'/blog/'+item.fields.slug}
										/>
									</div>
								))
							}
						</div>
						<div className='buttons is-centered'>
							{
								itemsNote.length >= 6 ? <button className='button primary' onClick={() => setNumber(number + 3)}>Cargar Más</button> : ''
							}
						</div>
					</div>
				</div>

			</section>
		</Layout>
	)
}