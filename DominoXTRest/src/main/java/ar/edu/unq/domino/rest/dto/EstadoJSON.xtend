package ar.edu.unq.domino.rest.dto

import org.eclipse.xtend.lib.annotations.Accessors
import ar.edu.unq.domino.EstadosDePedido.EstadoDePedido
import ar.edu.unq.domino.EstadosDePedido.Cancelado
import ar.edu.unq.domino.EstadosDePedido.Entregado
import ar.edu.unq.domino.EstadosDePedido.Preparando
import ar.edu.unq.domino.EstadosDePedido.EnViaje
import ar.edu.unq.domino.EstadosDePedido.ListoParaEnviar
import ar.edu.unq.domino.EstadosDePedido.ListoParaRetirar

@Accessors
class EstadoJSON {

	String nombre

	new(EstadoDePedido estadoDePedido) {
		this.nombre = estadoDePedido.nombre
	}
	
	new(){
		
	}
	
	def asEstado() {
		var EstadoDePedido estado = new Preparando
		switch this.nombre {
			case nombre.contains("cancel") : estado = new Cancelado
			case nombre.contains("entreg") : estado = new Entregado
			case nombre.contains("prepar") : estado = new Preparando
			case nombre.contains("enviaje") : estado = new EnViaje
			case nombre.contains("enviar") : estado = new ListoParaEnviar
			case nombre.contains("retirar") : estado = new ListoParaRetirar
		}
		estado
	}

}
