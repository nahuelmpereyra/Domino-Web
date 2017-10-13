package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.Pizzas.Pedido
import ar.edu.unq.domino.Pizzas.Plato
import ar.edu.unq.domino.formasDeEnvio.FormaDeRetiro
import ar.edu.unq.domino.sistema.Cliente
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class PedidoJSON {

	def asPedido(Cliente cliente, List<Plato> platos, String aclaraciones, FormaDeRetiro formaRetiro) {

		val pedido = new Pedido(cliente)
		pedido.platos = platos 
		pedido.aclaracion = aclaraciones 
		pedido.formaDeRetiro = formaRetiro

		pedido
	}
}
