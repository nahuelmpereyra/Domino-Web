DominoApp.controller('LoginCtrl', function ($rootScope, $state, usuarioService) {

    this.nombre = '';
    this.password = '';
    
    this.login = function(){
       $state.go("crearPedido");
    };



});
