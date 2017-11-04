	DominoApp.controller('LoginCtrl', function ($timeout, $state, UsuarioService) {

    this.usuario = '';
    this.password = '';
    
    var self = this;
    
    function errorHandler(error) {
        console.log(error);
    	self.notificarError(error.data);
    }
 
    this.login = function() {
        UsuarioService.login(self.usuario, self.password)
        .then(function(usuario) {
            $state.go("crearPedido");
            console.log("Ok");
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
