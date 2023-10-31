import Image from "next/image"

export default function Brands({}) {
	return (
		<div className="brans-cont">
			<div className="columns is-mobile is-centered">
				{brands.map(item => (
					<div key={item.name} className="column is-2-desktop is-3-tablet is-4-mobile">
						<img
							src={'/brand-' + item.name + '.webp'}
							alt={item.name}
							loading="lazy"
							width="264px"
							height="126px"
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
		name: 'pisa'
	},
	{
		name: 'femsa'
	},
	{
		name: 'costena'
	},
	{
		name: 'verde-valle'
	},
	{
		name: 'edwell'
	},
	{
		name: 'bueno'
	},
	{
		name: 'moderna'
	},
	{
		name: '3m'
	},
	{
		name: 'nestle'
	},
	{
		name: 'kimberly'
	},
	{
		name: 'marcasextraordinarias'
	},
	{
		name: 'aramo'
	},
	// {
	// 	name: 'cocacola'
	// },
	{
		name: 'energizer'
	},
	{
		name: 'duracell'
	},
	{
		name: 'industrias-jlc'
	},
	{
		name: 'tresmontes'
	},
	{
		name: 'sansbe'
	},
	{
		name: 'colgate-1'
	},
	{
		name: 'licoreria-del-sur'
	},
	{
		name: 'p&g'
	},
	{
		name: 'kelloggs'
	},
	{
		name: 'ragasa'
	},
	{
		name: 'reckitt'
	},
	{
		name: 'san-juan'
	},
	{
		name: 'philip-morris'
	},
	{
		name: 'gsk'
	},
	{
		name: 'rb'
	},
	{
		name: 'mead-johnson'
	},
	/**
	 * MARCAS
	 */
	{
		name: 'sanmarcos'
	},
	{
		name: 'henkel'
	},
	{
		name: 'helix'
	},
	{
		name: 'ades'
	},
	{
		name: 'agrifen'
	},
	{
		name: 'cielwater'
	},
	{
		name: 'ciel'
	},
	{
		name: 'delvalle'
	},
	{
		name: 'diapro'
	},
	{
		name: 'electrolic'
	},
	{
		name: 'escudo'
	},
	{
		name: 'isadora'
	},
	{
		name: 'kleenex'
	},
	{
		name: 'kotex'
	},
	{
		name: 'monster'
	},
	{
		name: 'nialex'
	},
	{
		name: 'petalo'
	},
	{
		name: 'predator'
	},
	{
		name: 'pureza'
	},
	{
		name: 'reddy'
	},
	{
		name: 'santamaria'
	},
	{
		name: 'schick'
	},
	{
		name: 'suavelastic'
	},
	{
		name: 'superacid'
	},
	{
		name: 'totis'
	},
	// {
	// 	name: 'vitaminwater'
	// },
	{
		name: 'vogue'
	},
	{
		name: 'vallefrut'
	},
	{
		name: 'eveready'
	},
	{
		name: 'rayovac'
	},
	{
		name: 'salpifar'
	},
	{
		name: 'scotchbrite'
	},
	{
		name: 'tresestrellas'
	},
	{
		name: 'coolnuts'
	},
	{
		name: 'fortuna'
	},
	{
		name: 'portales'
	},
	{
		name: 'clarasol-original'
	},
	{
		name: 'clarasol-desinfectante'
	},
	{
		name: '123'
	},
	{
		name: 'mas'
	},
	{
		name: 'kleenbebe'
	},
	{
		name: 'nakamura'
	},
	{
		name: 'zuko'
	},
	{
		name: 'nucita'
	},
	{
		name: 'persil'
	},
	{
		name: 'energizer-max'
	},
	{
		name: 'colgate'
	},
	{
		name: 'suavitel'
	},
	{
		name: 'axion'
	},
	{
		name: 'caprice'
	},
	{
		name: 'ajax'
	},
	{
		name: 'fabuloso-complete'
	},
	{
		name: 'vel'
	},
	{
		name: 'real-de-cana'
	},
	{
		name: 'mc-andrews'
	},
	{
		name: 'huasteco'
	},
	{
		name: 'el-jefe'
	},
	{
		name: 'el-jefe-azul'
	},
	{
		name: 'el-compadre'
	},
	{
		name: 'faverich'
	},
	{
		name: 'ave'
	},
	{
		name: 'nutrioli'
	},
	{
		name: 'zucaritas'
	},
	{
		name: 'chocokrispis'
	},
	{
		name: 'cornflakes'
	},
	{
		name: 'frootloops'
	},
	{
		name: 'ace'
	},
	{
		name: 'ariel-azul'
	},
	{
		name: 'gillette'
	},
	{
		name: 'crest'
	},
	{
		name: 'head&shoulders'
	},
	{
		name: 'pepto-bismol'
	},
	{
		name: 'salvo'
	},
	{
		name: 'vicks'
	},
	{
		name: 'ariwick'
	},
	{
		name: 'brasso'
	},
	{
		name: 'dgari'
	},	
	{
		name: 'harpic'
	},
	{
		name: 'lysol'
	},
	{
		name: 'maravilla'
	},
	{
		name: 'maruchan'
	},
	{
		name: 'vanish'
	},
	{
		name: 'yemina'
	},
]