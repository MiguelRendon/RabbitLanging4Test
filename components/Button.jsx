import Link from "next/link";
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Button({cat, link, socialMedia, image, title, alt, titleSeo,width,height }) {

	const [UTM, setUTM] = useState([]);
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

	function createFTLElement(params) {
		if (UTM.length > 0 ) {
			const body = document.querySelector('body')
			const element = document.createElement('img')
			element.src = `https://ad.doubleclick.net/ddm/activity/src=11619444;type=home50;cat=${params};u1=${UTM[0]};u2=${UTM[1]};u3=${UTM[2]};u4=${UTM[3]};u5=${UTM[4]};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?`
			element.alt = ' '
			element.style.display = 'none'
			element.style.width = '1px'
			element.style.height = '1px'
			body.appendChild(element)
		}
	}

	return (
		<Link href={link} >
			{
				socialMedia ? 
				<a target="_blank" onClick={() => createFTLElement(cat)}>
					<div className="icon is-medium">
						<div className="image">
							<Image width={width} height={height} src={image} alt={alt} title={titleSeo} loading="lazy"/>
							{/* <img src={image} alt={alt} title={titleSeo} loading="lazy"/> */}
						</div>
					</div>
				</a>
				:
				<a onClick={() => createFTLElement(cat)}>{title}</a>
			}
		</Link>
	)
}