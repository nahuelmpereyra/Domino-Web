DominoApp.controller('elegirTamanioCtrl', function ($resource, $timeout, Tamanios) {
	'use strict';
    
    var self = this;

    self.tamanios = [];

    function errorHandler(error) {
        self.notificarError(error.data);
    }
    
    this.actualizarLista = function() {
  	  Tamanios.query()
        .then(function(data) {
            console.log(data)
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