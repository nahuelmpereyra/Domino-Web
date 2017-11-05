	DominoApp.controller('LoginCtrl', function ($timeout, $state, PedidoService, UsuarioService) {

    this.usuario = '';
    this.password = '';
    
    this.usuarioLogueado;
    var self = this;
    
    function errorHandler(error) {
        console.log(error);
    	self.notificarError(error.data);
    }
 
    this.login = function() {
        UsuarioService.login(self.usuario, self.password)
        .then(function(usuario) {
            $state.go("crearPedido");
            self.usuarioLogueado = UsuarioService.usuario.nick;
        })
        .catch(errorHandler);
    };
    
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
