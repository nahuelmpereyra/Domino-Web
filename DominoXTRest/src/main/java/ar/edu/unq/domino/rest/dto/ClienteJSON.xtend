package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.sistema.Cliente
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class ClienteJSON {

	String nombre
	String usuario
	String password
	String email
	String direccion

	def asCliente() {
		new Cliente(nombre, usuario, password, email, direccion)
	}

	def actualizar(Cliente cliente) {

		if (this.nombre !== null) {
			cliente.nombre = this.nombre
		}
		if (this.usuario !== null) {
			cliente.nick = this.usuario
		}
		if (this.password !== null) {
			cliente.password = this.password
		}
		if (this.email !== null) {
			cliente.email = this.email
		}
		if (this.direccion !== null) {
			cliente.direccion = this.direccion
		}
	}

}
