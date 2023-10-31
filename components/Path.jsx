import Image from "next/image"
export default function Path({children, image, altImg}) {
	return (
		<div className="path">
			{/* <div className="image"> */}
				<img className="img-path" width='250px' height='250px' src={image} alt={altImg} title={image} loading="lazy"/>
				{/* <img src={image} alt={altImg} title={image} loading="lazy"/> */}
				{/* <div className="arrow home-steps-transition-itemArrow">
					<img src="/arrow-path.svg" alt=""/>
				</div> */}
			{/* </div> */}
			{
				children
			}
		</div>
	)
}