import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import Image from 'next/image'

export default function Note({title, content, image, link, date, time, featured}) {
	return (
		<a href={link}>
			<div className={`note box ${featured === true ? 'is-related' : ''}`}>
				{
					image ? 
					<div className="image">
						{/* <Image width='317px' height='243px' src={image.indexOf("//")> -1 ? 'https:'+image : image} alt={title} loading="lazy"/> */}
						{/* <img src={image} alt={title} loading="lazy"/> */}
						<img width='317px' height='243px' src={'https:'+image} alt={title} loading="lazy"/>
					</div>
					: ''
				}
				<div className="info">
					{
						featured === true ? '' :
						<h4><strong className="has-text-principal-color-2">{title}</strong></h4>
					}
					{
						date && time ? 
						<div className="note-data">
							<p>{date}</p>
							<BsDot />
							<div className="icon-text">
								<span className="icon">
									<AiOutlineClockCircle />
								</span>
								<p>{time} minutos</p>
							</div>
						</div> : ''
					}
					{
						content ? <p>{content}</p> :
						''
					}
				</div>
				{
					featured === true ? '' :
					<button className="button primary">Ver más</button>
				}
			</div>
		</a>
	)
}