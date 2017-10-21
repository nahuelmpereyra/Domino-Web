package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.Pizzas.Pedido
import ar.edu.unq.domino.sistema.Cliente
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors
import ar.edu.unq.domino.formasDeEnvio.FormaDeRetiro

@Accessors
class PedidoJSON {
	
	Integer idCliente
	List<PlatoJSON> platos
	String aclaraciones
	RetiroJSON formaRetiro

	def asPedido(Cliente cliente, String aclaraciones, FormaDeRetiro formaRetiro) {
	
		val pedido = new Pedido(cliente, aclaraciones, formaRetiro)
		this.agregarPlatos(pedido)
		pedido
	}

	def agregarPlatos(Pedido pedido){
		platos.forEach[p|pedido.agregarPlato(p.asPlato)]
	}
	
	
				

	
}

