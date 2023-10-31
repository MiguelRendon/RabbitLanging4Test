import Acordeon from "./Acordeon"
import Link from "next/link"

// <Acordeon title=''></Acordeon>

export default function Faqs() {

	return (
		<div className="section-faqs bg-sec-4">
			<div className="container">
				<div className="cont-info">
					<div className="has-text-centered">
						<p><strong>Preguntas Frecuentes</strong></p>
					</div>
				</div>

				{/* <p><strong>Envíos y entregas</strong></p> */}
				{/* <Acordeon title='¿Para que sirve la Terminal Rabbit®?'>
					<p>Con tu nueva Terminal Rabbit® podrás aceptar pagos con tarjeta, relizar recargas de tiempo aire, hacer pagos de servicios y vender tarjetas de regalo.</p>
				</Acordeon> */}
				<Acordeon title='¿Para que sirve la Terminal Rabbit®?'>
					<p>Con tu nueva Terminal Rabbit® podrás aceptar pagos con tarjeta de Débito, Crédito y Vales de despensa.</p>
				</Acordeon> 
				{/* <Acordeon title='¿Cómo adquiero mi Terminal Rabbit®?'>
					<p>Por el momento no es posible adquirir una Terminal Rabbit®, ya que solo se entregó a ciertos clientes.
                     Sin embargo, seguimos trabajando para que muy pronto puedas adquirir la tuya.</p>
				</Acordeon> */}
				<Acordeon title='¿Cuánto cuesta la Terminal Rabbit®?'>
					<p>La Terminal Rabbit® tiene un costo de $260.00 pesos más IVA, sin embargo; te invitamos a mantenerte al pendiente de nuestras ofertas y promociones para adquirirla a lo largo del año.</p>
				</Acordeon>
				<Acordeon title='¿Rabbit cobra comisión por usar la terminal?'>
					<p>Rabbit cobra una comisión al momento de recibir cobros con tarjeta del 3.6% + IVA 
En caso de recibir cobros con Vales de despensa aplica adicional un %</p>
<ol className="rabbit-list has-text-left px-5">
	<li><p>Edenred - 1.80%</p></li>
	<li><p>Sodexo - 3.20%</p></li>
	<li><p>SíVale - 2.80%</p></li>
</ol>

				</Acordeon>

				
				<Acordeon title='¿Qué tipos de tarjeta acepta la Terminal Rabbit®?'>
					<p>Puedes aceptar todas las tarjetas Visa, MasterCard, American Express y Vales de despensa.</p>
				</Acordeon>
				<Acordeon title='¿Cuál es el monto mínimo que puedo cobrar?'>
					<p>El monto mínimo de compra es de $20 pesos.</p>
				</Acordeon>
				<Acordeon title='¿Puedo obtener un Estado de Cuenta de todas las transacciones que he realizado?'>
					<p>¡Obtener tú Estado de Cuenta desde tu Terminal Rabbit® es muy fácil!</p>
				</Acordeon>
				
							</div>
		</div>
	)
}