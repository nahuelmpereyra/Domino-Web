DominoApp.controller('LoginCtrl', function ($rootScope,$timeout, $state, usuarioService) {

    this.nombre = '';
    this.password = '';
    
    var transform = function(json) { return new Libro(json) }
    
    function errorHandler(error) {
        self.notificarError(error.data);
    }
//    this.login = function(){
//       $state.go("crearPedido");
//    };

    this.login = function() {
    	console.log(usuarioService.user);
        usuarioService.loginUser(this.usuarioPotencial, function(data) {
            self.nombre = usuarioPotencial.nombre
            self.password = usuarioPotencial.password
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
