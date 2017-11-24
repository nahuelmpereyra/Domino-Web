DominoApp.controller('IngredienteCtrl', function ($state, PedidoService, Promos, Tamanios, Ingredientes, Distribuciones) {
	'use strict';
    
      var self = this;

      this.ingredientesExtrasDisponibles = [];
      this.distribuciones = [];
      this.plato = PedidoService.getPlato();
      this.tamanioSeleccionado;
      this.promoSeleccionada;

      function errorHandler(error) {console.log(error);}
      
      this.actualizarListaIngredientes = function() {
    	  Ingredientes.query()
          .then(function(data) {
              self.ingredientesExtrasDisponibles = data;
          })
          .catch(errorHandler);
          
      };
      this.actualizarListaIngredientes();

      this.actualizarListaDistribuciones = function() {
    	  Distribuciones.query()
          .then(function(data) {
              self.distribuciones = data;
          })
          .catch(errorHandler);
          
      };
      this.actualizarListaDistribuciones();
      
      this.obtenerPromoSeleccionada = function() {
      	Promos.queryById(this.plato.idPromo)
      	.then(function(data) {
      		self.promoSeleccionada = data;
      	})
      	.catch(errorHandler);
      	
      };
      this.obtenerPromoSeleccionada();
      
      this.obtenerTamanioSeleccionado = function() {
      	Tamanios.queryById(this.plato.idTamanio)
      	.then(function(data) {
      		self.tamanioSeleccionado = data;
      	})
      	.catch(errorHandler);
      	
      };
      this.obtenerTamanioSeleccionado();
      
      this.agregarIngrediente = function(ingrediente, distribucion) {

      	
    	  PedidoService.agregarExtras(ingrediente, distribucion);
    	  console.log(PedidoService.getPlato())
      };
      
      this.confirmarPedido = function () {
    	  PedidoService.agregarPlato(this.plato);
    	  $state.go("confirmarPedido");
    	  
    	  console.log(PedidoService)
      }
      ;
      
});