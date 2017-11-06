DominoApp.controller('IngredienteCtrl', function ($resource, $stateParams, Promos, Tamanios, Ingredientes, Distribuciones) {
	'use strict';
    
      var self = this;

      self.ingredientesExtrasDisponibles = [];
      self.distribuciones = [];
      self.promoSeleccionada;
      self.tamanioSeleccionado;

      function errorHandler(error) {
          console.log(error.data);
      }
      
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
      	Promos.queryById($stateParams.idPromo)
      	.then(function(data) {
      		self.promoSeleccionada = data;
      	})
      	.catch(errorHandler);
      	
      };
      this.obtenerPromoSeleccionada();

      this.obtenerTamanioSeleccionado = function() {
        	Tamanios.queryById($stateParams.idTamanio)
        	.then(function(data) {
        		self.tamanioSeleccionado = data;
        	})
        	.catch(errorHandler);
        	
        };
       this.obtenerTamanioSeleccionado();

      
});