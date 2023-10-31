import Layout from "../../components/Layout";
import Breadcrumbs from "nextjs-breadcrumbs";
import AyudaPedido from "../../components/forms/AyudaPedido";
import RegistroTienda from "../../components/forms/RegistroTienda";
import SocioComercial from "../../components/forms/SocioComercial";
import TrabajarRabbit from "../../components/forms/TrabajarRabbit";

import React, { useState } from "react";
import { useEffect } from "react";


export default function Contacto() {

	const [showForm, setShowForm] = useState('default')

	const options = [
		{
			title: 'Ayuda con tu pedido',
			value: 'AyudaPedido'
		},
		{
			title: 'Registra tu tienda',
			value: 'RegistroTienda'
		},
		{
			title: 'Socios Comerciales',
			value: 'SocioComercial'
		},
		{
			title: 'Trabaja con nosotros',
			value: 'TrabajarRabbit'
		},
	]

	useEffect(() => {
		fbq('track', 'Contact');
	})

	return (
		<Layout
			title="Acércate y forma parte de este salto | Rabbit® Contacto"
			description="Rabbit® te ayuda a incrementar las ventas de tu negocio por medio de soluciones tecnológicas. Contáctanos y muy pronto te estaremos ayudando."
			keyWords="Rabbit, Rabbit México, Contacto Rabbit"
			imageOpengraph="https://rabbitmx.com/opengraph/https___rabbitmx_contacto.png"
			publishedTime="2021-12-10T23:17:39+02:00"
			modifiedTime="2022-03-04T02:09:06+02:00"
		>
			<div className="container rmvPad">
					<nav className="breadcrumb has-succeeds-separator">
						<Breadcrumbs rootLabel="Inicio" activeItemClassName="is-active" />
					</nav>
			</div>
			<div className="page-contact">
				<div className="container rmvPad">
					<div className="has-text-centered">
						<h1><strong>Contacto</strong></h1>
						<p>Comparte con nosotros tus dudas y comentarios. <br/>Estamos aquí para escucharte.</p>
					</div>
					<div className="columns is-centered">
						<div className="column is-3">
							<div className="form">
								<form action="">
									<div className="field">
										<div className="control">
											<select className="input" onChange={(e) =>{
												const selectedOption = e.target.value
												setShowForm(selectedOption)
											}}>
												<option value="default" defaultValue>Selecciona una opción</option>
												{
													options.map(item => (
														<option key={item.value} value={item.value}>{item.title}</option>																
													))
												}
											</select>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="columns is-centered">
						<div className="column is-6">
							{
								showForm === 'default' ?
								<div className="image">
									<img src="/nuestros-socios.png" alt="Sé parte de nuestro catálogo Rabbit®" title="nuestros-socios" loading="lazy"/>
								</div> : ''
							}
							{
								showForm === 'SocioComercial' ? <SocioComercial /> : ''
							}
							{
								showForm === 'RegistroTienda' ? <RegistroTienda /> : ''
							}
							{
								showForm === 'TrabajarRabbit' ? <TrabajarRabbit /> : ''
							}
							{
								showForm === 'AyudaPedido' ? <AyudaPedido /> : ''
							}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}