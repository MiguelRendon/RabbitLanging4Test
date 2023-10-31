import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
		children,
		title,
		description,
		keyWords,
		schema,
		schema2,
		currentURL,
		noIndex,
		imageOpengraph,
		publishedTime,
		modifiedTime
	}) {
	const CANONICAL_DOMAIN = "https://rabbitmx.com";
	const router = useRouter();
	const [UTM, setUTM] = useState([]);
	const routerBlogSlug = '/blog/'+currentURL
	const currentRoute = router.asPath !== routerBlogSlug ? router.pathname : routerBlogSlug

	const _pathSliceLength = Math.min.apply(Math, [
		router.asPath.indexOf("?") > 0
		? router.asPath.indexOf("?")
		: router.asPath.length,
		router.asPath.indexOf("#") > 0
		? router.asPath.indexOf("#")
		: router.asPath.length,
	]);
	const canonicalURL = CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength);


	const pageCat = function () {
		const current = router.pathname;
		if (current === "/abastecimiento-presencial") {
			return "abast0";
		}
		if (current === "/aliado-rabbit") {
			return "aliad0";
		}
		if (current === "/abastecimiento-en-linea-app") {
			return "appra0";
		}
		if (current === "/contacto") {
			return "conta0";
		}
		if(current === "/contacto/gracias-ayuda-con-tu-pedido" || "/contacto/gracias-registra-tu-tienda" || "/contacto/gracias-socios-comerciales" || "/contacto/gracias-trabaja-con-nosotros") {
			return "flt_c003"
		}
		if (current === "/") {
			return "rabbi0";
		}
		if (current === "/nuestros-partners") {
			return "nuest0";
		}
		if (current === "/somos-rabbit") {
			return "somor0";
		}
		if(current === "/aviso-de-privacidad") {
			return "flt_c0";
		}
		if(current === "/politica-de-cookies") {
			return "flt_c00"
		}
		if(current === "/terminos-y-condiciones") {
			return "flt_c000"
		}
		if(current === "/cobertura-rabbit") {
			return "flt_c001"
		}
		if(current === "/terminos-promociones") {
			return "flt_c005"
		}
		if(current === "/blog" || "/blog/[slug]") {
			return "flt_c006"
		}
	};

	const routerStringReplace = () => {
		if(router.asPath === '/blog/'+currentURL) {
			const slugURL = currentURL.replace(/-/g, ' ')
			return slugURL.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
		}
		const current = router.pathname.replace(/-/g, ' ')
		const finalString = current.slice(1).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
		return finalString
	}

	useEffect(() => {
		function parseGET(param) {
			var searchStr = document.location.search;
			try {
					var match = searchStr.match("[?&]" + param + "=([^&]+)");
					if (match) {
						var result = match[1];
						result = result.replace(/\+/g, "%20");
						result = decodeURIComponent(result);
						return result;
					} else {
						return "";
					}
				} catch (e) {
					return "";
			}
		}
		var cloud_utm_source = parseGET("utm_source");
		var cloud_utm_medium = parseGET("utm_medium");
		var cloud_utm_campaign = parseGET("utm_campaign");
		var cloud_utm_content = parseGET("utm_content");
		var cloud_utm_term = parseGET("utm_term");
		setUTM([
			cloud_utm_source,
			cloud_utm_medium,
			cloud_utm_campaign,
			cloud_utm_content,
			cloud_utm_term
		]);
	}, []);
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.svg" />
				<link rel="canonical" href={canonicalURL} />
				<link rel="alternate" hrefLang="x-default" href={canonicalURL}/>
				<link rel="alternate" hrefLang="es-mx" href={canonicalURL} />
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keyWords} />
				<meta
					name="facebook-domain-verification"
					content="3cppwqf6byw4evpjh6f5v8vpc43ih2"
				/>
				{noIndex ? <meta name="robots" content="noindex" /> : ''}
				<meta 
					name="google-site-verification"
					content="Spvm7pZsnz6xXDRxkONKWACNf8QiMg6DXhpjB3lrfH8"
				/>
				<meta property="og:locale" content="es_MX" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={router.asPath === '/' ? 'https://rabbitmx.com' : `https://rabbitmx.com${router.asPath}`} />
				<meta property="og:site_name" content="Rabbit® ¡El salto que tu tienda necesita!" />
				<meta property="og:updated_time" content={modifiedTime} />
				<meta property="og:image" content={`${imageOpengraph}`} />
				<meta property="og:image:secure_url" content={`${imageOpengraph}`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Rabbit" />
				<meta property="og:image:type" content="image/png" />
				<meta property="article:published_time" content={publishedTime} />
				<meta property="article:modified_time" content={modifiedTime} />
				<meta property="article:section" content={router.asPath} />
				<meta property="fb:admins" content="103519118394096" />
				{schema}
				{schema2}
				{
					router.asPath === '/' ? '' :
					<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
						{
							"@context": "https://schema.org/",
							"@type": "BreadcrumbList",
							"itemListElement": [
								{
									"@type": "ListItem",
									"position": 1,
									"name": "Inicio",
									"item": "https://rabbitmx.com/"
								},
								{
									"@type": "ListItem",
									"position": 2,
									"name": "${routerStringReplace()}",
									"item": "https://rabbitmx.com${currentRoute}"
								}
							]
						}
					`}}></script>
				}
				<script type="text/javascript" dangerouslySetInnerHTML={{__html:`var _rl_cn = _rl_cn || 0,_rl_ptc = ("https:" == window.location.protocol ? "https" : "http"); window._rl_ids = window._rl_ids || []; window._rely = window._rely || []; _rl_ids.push({pid:4613,src:5}); _rely.send = _rely.send?_rely.send:function() {}; (function() { var rl = document.createElement("script"); rl.type = "text/javascript"; rl.async = true; rl.src = _rl_ptc + "://api.retargetly.com/loader?id=" + _rl_ids[_rl_ids.length-1].pid; rl.id = "rely-api-"+(_rl_cn++); var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(rl, s); })();`}}></script>
			</Head>
			<Header />
			<main className={`wrap ${router.pathname === '/' ? 'has-header-label' : ''} ${router.pathname === '/abastecimiento-en-linea-app' ? 'has-header-label' : ''}`}>{children}</main>
			{UTM.length > 0 && (
				<iframe src={`https://11619444.fls.doubleclick.net/activityi;src=11619444;type=home50;cat=${pageCat()};u1=${UTM[0]};u2=${UTM[1]};u3=${UTM[2]};u4=${UTM[3]};u5=${UTM[4]};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?`} width="" height="1" frameBorder="0" style={{display:'none'}}></iframe>
			)}
			<CookieConsent
				location="bottom"
				cookieName="rabbitSesionCookie"
				disableButtonStyles={true}
				buttonText="Acepto"
				buttonClasses="button primary"
				buttonStyle={{
					borderRadius: "50px",
					padding: "0px 1.5rem",
					margin: "0.5rem",
					minWidth: "130px",
				}}
				style={{
					background: "#1C4F80",
					alignItems: "center",
					padding: "0.5rem 0px",
				}}
				contentClasses="has-text-white"
				expires={150}
			>
				Utilizamos{" "}
				<Link href="/politica-de-cookies">
				<a>cookies</a>
				</Link>{" "}
				para optimizar nuestro sitio web, así como nuestros servicios.{" "}
				<Link href="/aviso-de-privacidad">
				<a>Leer más</a>
				</Link>
				<button className="button primary is-pulled-right decline-button">No Acepto</button>
			</CookieConsent>
			<Footer />
		</>
	);
}