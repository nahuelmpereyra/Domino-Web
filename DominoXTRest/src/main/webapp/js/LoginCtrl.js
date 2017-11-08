	DominoApp.controller('LoginCtrl', function ($timeout, $state, PedidoService, UsuarioService) {

    this.usuario = '';
    this.password = '';
    
    this.usuarioLogueado;
    var self = this;
    
    
    function errorHandler(error) {
        console.log(error.data);
    	alert(error.data)
    }
 
    this.login = function() {
        UsuarioService.login(self.usuario, self.password)
        .then(function(usuario) {
            $state.go("crearPedido");
            self.usuarioLogueado = UsuarioService.usuario.nick;
            PedidoService.setIdCliente(UsuarioService.usuario.id)
        })
        .catch(errorHandler);
};



});
