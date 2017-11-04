DominoApp.controller('IngredienteCtrl', function ($resource, $timeout, Ingredientes, UsuarioService, Distribuciones) {
	'use strict';
    
      var self = this;

      self.ingredientes = [];
      self.distribuciones = [];
//      self.nombreUsuarioLogueado = UsuarioService.usuario.nick;

      function errorHandler(error) {
          self.notificarError(error.data);
      }
      
      this.actualizarListaIngredientes = function() {
    	  Ingredientes.query()
          .then(function(data) {
              self.ingredientes = data;
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