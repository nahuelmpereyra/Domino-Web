DominoApp.controller('RegisterCtrl', function ($timeout, $state, UsuarioService) {

    this.nombre = '';
    this.usuario = '';
    this.password = '';
    this.email = '';
	this.direccion = '';
    
    var self = this;
    
    function errorHandler(error) {
        console.log(error);
    	self.notificarError(error.data);
    }
 
    this.register = function() {
        UsuarioService.register(self.nombre, self.usuario, self.password, self.email, self.direccion)
        .then(function(usuario) {
            $state.go("login");
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
