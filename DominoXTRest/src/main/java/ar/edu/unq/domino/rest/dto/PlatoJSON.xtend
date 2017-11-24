package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.Pizzas.Plato
import ar.edu.unq.domino.Pizzas.Promocion
import ar.edu.unq.domino.TamanioPizzas.TamanioPromo
import ar.edu.unq.domino.distribuciones.DistribucionPizza
import ar.edu.unq.domino.repo.RepoDistribuciones
import ar.edu.unq.domino.repo.RepoPromociones
import ar.edu.unq.domino.repo.RepoTamanios
import java.util.List
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.applicationContext.ApplicationContext

@Accessors
class PlatoJSON {
	
	int idPromo
	int idTamanio
	List extras
	
	def asPlato() {
		val promo = promos.findFirst[p| p.id == this.idPromo]
		val tamanio = tamanios.findFirst[t | t.id == this.idPromo]
		
		var plato = new Plato()
		plato.tamanio = tamanio
		plato.promo = promo
		ponerIngredientes(plato)
		plato
	}
	
	def ponerIngredientes(Plato plato) {
//		plato.ingredientesExtras = extras
	}
	
	def tamanios() {
		val repoTamanio = ApplicationContext.instance.getSingleton(typeof(TamanioPromo)) as RepoTamanios
		repoTamanio.allInstances
	}
	
	def promos() {
		val repoPromos = ApplicationContext.instance.getSingleton(typeof(Promocion)) as RepoPromociones
		repoPromos.allInstances
	}
	
	def distribuciones() {
		val repoDistribuciones = ApplicationContext.instance.getSingleton(typeof(DistribucionPizza)) as RepoDistribuciones
		repoDistribuciones.allInstances
	}
	
	
}

	