package ar.edu.unq.domino.rest.server

import ar.edu.unq.domino.Pizzas.Ingrediente
import ar.edu.unq.domino.Pizzas.Pedido
import ar.edu.unq.domino.Pizzas.Promocion
import ar.edu.unq.domino.TamanioPizzas.TamanioPromo
import ar.edu.unq.domino.arena.runnable.DominoBootstrap
import ar.edu.unq.domino.repo.RepoClientes
import ar.edu.unq.domino.repo.RepoIngredientes
import ar.edu.unq.domino.repo.RepoPedidos
import ar.edu.unq.domino.repo.RepoPromociones
import ar.edu.unq.domino.repo.RepoTamanios
import ar.edu.unq.domino.rest.dto.PedidoJSON
import ar.edu.unq.domino.sistema.Cliente
import org.uqbar.commons.applicationContext.ApplicationContext
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.annotation.Post
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.commons.model.exceptions.UserException


/**
 * Servidor RESTful implementado con XtRest.
 */
 @Controller
	
class RestfulServer {
    extension JSONUtils = new JSONUtils

	DominoBootstrap domino = new DominoBootstrap
	RepoPedidos repoPedidos = ApplicationContext.instance.getSingleton(typeof(Pedido)) as RepoPedidos
	RepoClientes repoClientes = ApplicationContext.instance.getSingleton(typeof(Cliente)) as RepoClientes
	
	new() {

		this.domino.run
		
	}

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
        try{
        	val pedidoJson = body.fromJson(PedidoJSON)                   	
 			val cliente = repoClientes.searchById(pedidoJson.idCliente)
 			val formaRetiro = pedidoJson.formaRetiro.asRetiro
       		val pedido = pedidoJson.asPedido(cliente, pedidoJson.aclaraciones, formaRetiro)
        	repoPedidos.create(pedido)
        	return ok(pedido.toJson)
        }     
        catch (UserException excpeption){
        	return badRequest("asd")
        }
    }
    
    
    
    @Get("/pedidos/:id")
    def getPedidosById() {
    	response.contentType = ContentType.APPLICATION_JSON      		
    	val repoPedidos = ApplicationContext.instance.getSingleton(typeof(Pedido)) as RepoPedidos        
    	val pedido = repoPedidos.searchById(Integer.valueOf(id))
        return ok(pedido.toJson)  
    }
    
	@Get("/pedidos/estados")
	def getPedidoByState(String estado) {
		response.contentType = ContentType.APPLICATION_JSON
		val repoPedidos = ApplicationContext.instance.getSingleton(typeof(Pedido)) as RepoPedidos        
		val res = repoPedidos.buscarPorEstado(estado)
		return ok(res.toJson)
	}

    
}