package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.Pizzas.Ingrediente
import ar.edu.unq.domino.Pizzas.IngredientesExtras
import ar.edu.unq.domino.distribuciones.DistribucionPizza
import ar.edu.unq.domino.repo.RepoDistribuciones
import ar.edu.unq.domino.repo.RepoIngredientes
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.applicationContext.ApplicationContext

@Accessors
class IngredienteExtraJSON {
	
	Integer id_ingrediente
	Integer id_distribucion
	
	def asIngredienteExtra() {
		var res = new IngredientesExtras
		var ing = ingredientes.findFirst[i | i.id.intValue == id_ingrediente.intValue]
		var dis = distribuciones.findFirst[d | d.id.intValue == id_distribucion.intValue]
		
		res.agregarIngrediente(ing, dis)
		res
		}
	
	def private ingredientes() {
		val repo = ApplicationContext.instance.getSingleton(typeof(Ingrediente)) as RepoIngredientes
		repo.allInstances
	}
	
	def private distribuciones() {
		val repo = ApplicationContext.instance.getSingleton(typeof(DistribucionPizza)) as RepoDistribuciones
		repo.allInstances
	}
	
	
}