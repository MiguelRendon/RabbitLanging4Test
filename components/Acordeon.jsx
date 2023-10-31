import { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Acordeon({title, children}) {
	
	const [active, setActive] = useState("");
	const [height, setHeight] = useState("0px");

	const content = useRef(null);

	function toogleAcordeon() {
		setActive( active === "" ? "active" : "" );
		setHeight( active === "active" ? "0px" : `${content.current.scrollHeight}px`);
	}

	return (
		<div className={`acordeon ${active}`}>
			<dl>
				<dt onClick={toogleAcordeon}>
					<h3>{title}</h3>
					<span className="icon">
						<FaChevronDown />
					</span>
				</dt>
				<dd ref={content} style={{maxHeight: `${height}`}}>
					{
						children
					}
				</dd>
			</dl>
		</div>
	)
}