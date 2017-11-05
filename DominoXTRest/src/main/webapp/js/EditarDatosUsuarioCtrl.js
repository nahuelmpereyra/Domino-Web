DominoApp.controller('EditarDatosUsuarioCtrl', function ($timeout, $state, PedidoService, UsuarioService) {

    this.nickUsuarioLogueado = UsuarioService.usuario.nick;
    this.nombreUsuarioLogueado = UsuarioService.usuario.nombre;
    this.emailUsuarioLogueado = UsuarioService.usuario.email;
    this.direccionUsuarioLogueado = UsuarioService.usuario.direccion;
    var self = this;
    
    function errorHandler(error) {
        console.log(error);
    }
 
    this.login = function() {
        UsuarioService.login(self.usuario, self.password)
        .then(function(usuario) {
            $state.go("crearPedido");
            self.usuarioLogueado = UsuarioService.usuario.nick;
        })
        .catch(errorHandler);
    };


});
