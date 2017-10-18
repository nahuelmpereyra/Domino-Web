package ar.edu.unq.domino.rest.dto


import org.eclipse.xtend.lib.annotations.Accessors
import ar.edu.unq.domino.formasDeEnvio.FormaDeRetiro
import ar.edu.unq.domino.formasDeEnvio.Delivery
import ar.edu.unq.domino.formasDeEnvio.RetiroLocal

@Accessors
class RetiroJSON {
	
	FormaDeRetiro tipo
	String direccion
	
	new(){}
		
	
	def asRetiro() {
		var FormaDeRetiro res
		if(tipo.esDelivery){
			res = new Delivery(direccion)
		}
		if(tipo.esRetiro){
			res = new RetiroLocal
		}		
		res
	}
	
}