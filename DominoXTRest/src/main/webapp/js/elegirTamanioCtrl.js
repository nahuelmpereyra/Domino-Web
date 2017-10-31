DominoApp.controller('elegirTamanioCtrl', function ($stateParams, Promos, $resource, $timeout, Tamanios) {
	'use strict';
	
	
    
    var self = this;
    self.promo;
    self.tamanios = [];
    self.preciosPromoSeleccionada= []
    
    function errorHandler(error) {
        self.notificarError(error.data);
    }
    this.actualizarPromo = function() {
    	Promos.queryById($stateParams.id)
    	.then(function(data) {
    		self.promo = data;
    	})
    	.catch(errorHandler);
    	
    };
    this.actualizarPromo();
    
    this.actualizarLista = function() {
  	  Tamanios.query()
        .then(function(data) {
            self.tamanios = data;
        })
        .catch(errorHandler);
        
    };
    this.actualizarLista();
    
 //   angular.forEach(self.tamanios, function(tamanio) {
 //   	self.preciosPromoSeleccionada.push(tamanio.precio * self.promo.precioPromo)
 //   });

 // FEEDBACK & ERRORES
    this.msgs = [];
    this.notificarMensaje = function(mensaje) {
        this.msgs.push(mensaje);
        this.notificar(this.msgs);
    };

    this.errors = [];
    this.notificarError = function(mensaje) {
        this.errors.push(mensaje);
        this.notificar(this.errors);
    };

    this.notificar = function(mensajes) {
        $timeout(function() {
            while (mensajes.length > 0) mensajes.pop();
        }, 3000);
    }
    
});