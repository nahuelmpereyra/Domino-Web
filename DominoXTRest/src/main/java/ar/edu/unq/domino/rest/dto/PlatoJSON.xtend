package ar.edu.unq.domino.rest.dto

import ar.edu.unq.domino.Pizzas.Plato
import ar.edu.unq.domino.Pizzas.Promocion
import ar.edu.unq.domino.TamanioPizzas.TamanioPromo
import ar.edu.unq.domino.distribuciones.DistribucionPizza
import ar.edu.unq.domino.repo.RepoDistribuciones
import ar.edu.unq.domino.repo.RepoPromociones
import ar.edu.unq.domino.repo.RepoTamanios
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.applicationContext.ApplicationContext

@Accessors
class PlatoJSON {
	
	int id_promo
	int id_tamanio
	int id_distribucion
	IngredienteExtraJSON ingredientesExtras
	
	def asPlato() {
		val promo = promos.findFirst[p| p.id == this.id_promo]
		val tamanio = tamanios.findFirst[t | t.id == this.id_tamanio]
		val distribucion = distribuciones.findFirst[d | d.id == this.id_distribucion]
		
		var plato = new Plato()
		plato.tamanio = tamanio
		plato.promo = promo
		ponerIngredientes(plato)
		plato
	}
	
	def ponerIngredientes(Plato plato) {
		plato.ingredientesExtras = ingredientesExtras.asIngredienteExtra
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

	