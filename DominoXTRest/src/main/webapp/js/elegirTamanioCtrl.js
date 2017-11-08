DominoApp.controller('elegirTamanioCtrl', function ($stateParams, Promos, $timeout, PedidoService, Tamanios) {
	'use strict';

    var self = this;
    this.plato = PedidoService.getPlato();
    self.promoSeleccionada;
    self.tamanios = [];
    
    function errorHandler(error) {
        console.log(error.data);
    }
    this.obtenerPromoSeleccionada = function() {
    	Promos.queryById(this.plato.idPromo)
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
    
//    this.elegirTamanio = function(idTamanio){
//    	self.plato.idTamanio= idTamanio;
//		sessionStorage.setItem('Plato',JSON.stringify(self.plato));
//		console.log(self.plato)
//    };
    
    this.elegirTamanio = function(idTamanio) {
    	PedidoService.elegirTamanio(idTamanio);
    };
      
    
});