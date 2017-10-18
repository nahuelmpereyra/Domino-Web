package ar.edu.unq.domino.rest.dto


import org.eclipse.xtend.lib.annotations.Accessors
import ar.edu.unq.domino.Pizzas.Ingrediente
import ar.edu.unq.domino.repo.RepoIngredientes
import org.uqbar.commons.applicationContext.ApplicationContext

@Accessors
class IngredienteJSON {
	
	Integer id_ingrediente
	
	new(Ingrediente ingrediente) {
		this.id_ingrediente = ingrediente.id
	}
	
	new() {
		
	}
	
	def asIngrediente() {
		var ing = ingredientes.findFirst[i | i.id.intValue == id_ingrediente.intValue]
		ing
	}
	
	def private getIngredientes() {
		val repo = ApplicationContext.instance.getSingleton(typeof(Ingrediente)) as RepoIngredientes
		repo.allInstances
	}
	
}