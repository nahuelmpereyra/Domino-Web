package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.repo.RepoClientes
import ar.edu.unq.domino.sistema.Cliente
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.applicationContext.ApplicationContext
import org.uqbar.commons.model.exceptions.UserException

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
		if (this.email !== null) {
			cliente.email = this.email
		}
		if (this.direccion !== null) {
			cliente.direccion = this.direccion
		}
	}
	
		
	def validarSesion(ClienteJSON usuarioJson) {
		val usuario = clientes.findFirst[cliente | cliente.nick == usuarioJson.usuario]
		if(usuario.nick == usuarioJson.usuario && usuario.password.equals(usuarioJson.password)){
			return usuario
		}else{
			throw new RuntimeException("Usuario o contraseña inválidos")
		}
		
		
		
	}

	def clientes() {
		val repoClientes = ApplicationContext.instance.getSingleton(typeof(Cliente)) as RepoClientes
		repoClientes.allInstances
	} 	

}
