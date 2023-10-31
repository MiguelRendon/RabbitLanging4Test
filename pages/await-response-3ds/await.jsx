import { useEffect } from "react";

export default function Landing() {
	useEffect(() => {
		fbq('track', 'ViewContent');
	})

	useEffect(() => {
		window.onload = () => {
			parent.postMessage("finished", "*");
		}
	}, [])

	return (
		<div className="await-container">
            <img className="await-image" src="/waiting.png" alt="Waiting" title='waiting' loading="lazy"/>
            <p className="await-title">Estamos procesando tu pago</p>
            <p className="await-subtitle">Por favor, no cierres la ventana.</p>      
        </div>
	)
}