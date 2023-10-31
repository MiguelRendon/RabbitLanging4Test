import Image from "next/image"

export default function Brands({}) {
	return (
		<div className="brans-cont">
			<div className="columns is-mobile is-centered">
				{brands.map(item => (
					<div key={item.name} className="column is-2-desktop is-3-tablet is-4-mobile">
						<img
							src={'/' + item.name + '.webp'}
							alt={item.name}
							loading="lazy"
							width="264"
							height="126"
							className="img-brand-rabbit"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

const brands = [
	/**
	 * COMPAÑIAS
	 */
	{
		name: 'Visa_Brand'
	},
	{
		name: 'MasterCard'
	},
	{
		name: 'AMEX'
	},
	{
		name: 'Carnet'
	},
	{
		name: 'SiVale'
	},
	// {
	// 	name: 'toka'
	// },
	{
		name: 'Edenred'
	}

]