package ar.edu.unq.domino.rest.dto


import org.eclipse.xtend.lib.annotations.Accessors
import ar.edu.unq.domino.formasDeEnvio.FormaDeRetiro
import ar.edu.unq.domino.formasDeEnvio.Delivery
import ar.edu.unq.domino.formasDeEnvio.RetiroLocal

@Accessors
class RetiroJSON {
	
	String tipo
	String direccion
	
	new(){}
		
	
	def asRetiro() {
		var FormaDeRetiro res
		if(tipo == "Delivery"){
			res = new Delivery(direccion)
		}
		if(tipo == "Retiro"){
			res = new RetiroLocal
		}		
		res
	}
	
}