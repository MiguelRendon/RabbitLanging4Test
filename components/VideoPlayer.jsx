import React, { useState } from 'react'
import { IoPlayCircle } from 'react-icons/io5';
import FsLightbox from 'fslightbox-react';

export default function VideoPlayer({src, thumbnail, altThumb}) {
	
	const [isPlaying, setisPlaying] = useState(false);

	return (
		<div className="video-player" onClick={() => setisPlaying(!isPlaying)}>
			<FsLightbox
				toggler={isPlaying}
				sources={[`${src}`]}
			/>
			<div className="image">
				<img id="thumbnail" src={thumbnail} alt={altThumb} title={thumbnail} loading="lazy"/>
				{/* <Image
					id="thumbnail"
					src={thumbnail}
					alt={altThumb}
					title={thumbnail}
					loading="lazy"
					width="500"
					height="282"
				/> */}
				<span className="icon-play">
					<IoPlayCircle />
				</span>
			</div>
		</div>
	)
}