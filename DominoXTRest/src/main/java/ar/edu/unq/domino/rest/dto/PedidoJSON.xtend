package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.Pizzas.Pedido
import ar.edu.unq.domino.Pizzas.Plato
import ar.edu.unq.domino.formasDeEnvio.FormaDeRetiro
import ar.edu.unq.domino.sistema.Cliente
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class PedidoJSON {
	
	Integer idCliente
	List<Plato> platos
	String aclaraciones
	FormaDeRetiro formaRetiro

	def asPedido(Cliente cliente) {

		val pedido = new Pedido(cliente)
		pedido.platos = this.platos 
		pedido.aclaracion = this.aclaraciones 
		pedido.formaDeRetiro = this.formaRetiro

		pedido
	}
}
