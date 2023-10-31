import Image from "next/image";

export default function ProductCard({img, title, altImg}) {
    return (
		<div className="product-card box has-text-centered has-hover-transition">
			<div className="image">
				<Image
					src={img}
					alt={altImg}
					title={img}
					loading="lazy"
					width="629"
					height="629"
				/>
			</div>
			<div className="cont-info">
				<h3><strong>{title}</strong></h3>
			</div>
		</div>
    )
}