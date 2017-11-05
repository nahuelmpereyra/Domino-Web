DominoApp.controller('crearPedidoCtrl', function ($resource, $timeout, Promos, PedidoService, UsuarioService) {
	'use strict';
    
      var self = this;

      self.promos = [];
      self.nombreUsuarioLogueado = UsuarioService.usuario.nick;

      function errorHandler(error) {
          self.notificarError(error.data);
      }
      
      this.actualizarLista = function() {
    	  Promos.query()
          .then(function(data) {
              self.promos = data;
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