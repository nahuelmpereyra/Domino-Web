package ar.edu.unq.domino.rest.server

import ar.edu.unq.domino.Pizzas.Ingrediente
import ar.edu.unq.domino.Pizzas.Pedido
import ar.edu.unq.domino.Pizzas.Promocion
import ar.edu.unq.domino.TamanioPizzas.TamanioPromo
import ar.edu.unq.domino.repo.RepoIngredientes
import ar.edu.unq.domino.repo.RepoPromociones
import ar.edu.unq.domino.repo.RepoTamanios
import java.time.LocalDateTime
import org.uqbar.commons.applicationContext.ApplicationContext
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.annotation.Post
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils

/**
 * Servidor RESTful implementado con XtRest.
 */
 @Controller
	
class RestfulServer {
    extension JSONUtils = new JSONUtils


    @Get("/promos")
    def getPromos() {
    	val repoPromociones = ApplicationContext.instance.getSingleton(typeof(Promocion)) as RepoPromociones        
    	response.contentType = ContentType.APPLICATION_JSON        
        return ok(repoPromociones.promociones.toJson)
    }
    

    @Get("/tamanios")
    def getTamanios() {
    	val repoTamanios = ApplicationContext.instance.getSingleton(typeof(TamanioPromo)) as RepoTamanios        
    	response.contentType = ContentType.APPLICATION_JSON        
        return ok(repoTamanios.tamanios.toJson)
    }

    
    @Get("/ingredientes")
    def getIngredientes() {
    	val repoIngredientes = ApplicationContext.instance.getSingleton(typeof(Ingrediente)) as RepoIngredientes        
    	response.contentType = ContentType.APPLICATION_JSON        
        return ok(repoIngredientes.ingredientes.toJson)
    }


   
   
   	@Post("/pedidos")
    def createPedido(@Body String body) {
        response.contentType = ContentType.APPLICATION_JSON
        
        val pedido = body.fromJson(Pedido)            	
        val platos = pedido.platos
        val cliente = pedido.cliente
        val formaRetiro = pedido.formaDeRetiro
//        val pedido = new Pedido(cliente, LocalDateTime.now,pedidoJSON.aclaraciones,formaRetiro);
//        platos.forEach[p | pedido.agregarPlato(p)]
//        this.dominoPizza.realizarPedido(pedido)
        return ok()

    }
    
}