DominoApp.controller('crearPedidoCtrl', function ($resource, $state, $timeout, Promos, PedidoService, UsuarioService) {
	'use strict';
    
      var self = this;

      self.promos = [];
      
      self.nombreUsuarioLogueado = UsuarioService.usuario.nick;

      function errorHandler(error) {
          console.log(error.data);
      }
      
      this.actualizarLista = function() {
    	  Promos.query()
          .then(function(data) {
              self.promos = data;
          })
          .catch(errorHandler);
          
      };
      this.actualizarLista();
      
      this.enviarPedido= function(){
    	  
    	  PedidoService.crearPedido()
      }
      
      this.elegirPromo = function(idPromo) {
    	PedidoService.elegirPromo(idPromo);
      };
      
});