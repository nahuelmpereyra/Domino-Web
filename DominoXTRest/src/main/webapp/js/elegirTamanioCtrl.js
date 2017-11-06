DominoApp.controller('elegirTamanioCtrl', function ($stateParams, Promos, $timeout, Tamanios) {
	'use strict';
	
	
    
    var self = this;
    self.promoSeleccionada;
    self.tamanios = [];
    self.preciosPromoSeleccionada= []
    
    function errorHandler(error) {
        self.notificarError(error.data);
    }
    this.obtenerPromoSeleccionada = function() {
    	Promos.queryById($stateParams.id)
    	.then(function(data) {
    		self.promoSeleccionada = data;
    	})
    	.catch(errorHandler);
    	
    };
    this.obtenerPromoSeleccionada();
    
    this.actualizarLista = function() {
  	  Tamanios.query()
        .then(function(data) {
            self.tamanios = data;
        })
        .catch(errorHandler);
        
    };
    this.actualizarLista();
    

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