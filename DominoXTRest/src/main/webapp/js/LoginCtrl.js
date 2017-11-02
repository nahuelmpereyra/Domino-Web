	DominoApp.controller('LoginCtrl', function ($scope, $timeout, $state, UsuarioService) {

    this.usuario = '';
    this.password = '';
    
    
    
    function errorHandler(error) {
        self.notificarError(error.data);
    }

    this.login = function() {
    	UsuarioService.loginUser(function(data) {
    		data.nick = this.usuario;
    		data.password = this.password
        }, errorHandler)
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
