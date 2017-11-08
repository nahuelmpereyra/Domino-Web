DominoApp.controller('EditarDatosUsuarioCtrl', function ($state, PedidoService, UsuarioService) {
	
	this.idUsuario = UsuarioService.usuario.id;
    this.nickUsuarioLogueado = UsuarioService.usuario.nick;
    this.nombreUsuarioLogueado = UsuarioService.usuario.nombre;
    this.emailUsuarioLogueado = UsuarioService.usuario.email;
    this.direccionUsuarioLogueado = UsuarioService.usuario.direccion;
    var self = this;
    this.historial = PedidoService.getHistorialCliente();
    
    function errorHandler(error) {
        console.log(error);
    }
 
    this.editarDatos = function() {
        UsuarioService.update(self.idUsuario, self.nombreUsuarioLogueado, self.emailUsuarioLogueado, self.direccionUsuarioLogueado)
        .then(function(usuario) {
            $state.go("crearPedido");
        })
        .catch(errorHandler);
    };


});
