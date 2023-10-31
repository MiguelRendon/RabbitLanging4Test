import Image from "next/image"
export default function Pins() {

	const pins = ['1', '2', '3', '4','5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17','18', '19']

	return (
		<div className="map-markers">
			{
				pins.map(item => (
					<div key={item} className="image cls-1">
						<Image width='auto' height='auto' src={`/pin-mapa-${item}.png`} alt="Aliados Rabbit® más cerca de ti" loading="lazy"/>
						{/* <img src={`/pin-mapa-${item}.png`} alt="Aliados Rabbit® más cerca de ti" loading="lazy"/> */}
					</div>
				))
			}
		</div>
	)
}