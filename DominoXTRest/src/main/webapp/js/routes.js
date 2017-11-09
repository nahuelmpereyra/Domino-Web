DominoApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html"
     })
    .state('register', {
      url: "/register",
      templateUrl: "partials/register.html"
    })
    .state('crearPedido', {
      url: "/crearPedido",
      templateUrl: "partials/crearPedido.html"
    })
    .state('errorLogueo', {
      url: "/errorLogueo",
      templateUrl: "partials/errorLogueo.html"
    })
    .state('elegirTamanio', {
      url: "/elegirTamanio/:id",
      templateUrl: "partials/elegirTamanio.html"
     })
     .state('editarUsuario', {
      url: "/editarUsuario/",
      templateUrl: "partials/editarUsuario.html"
     })
    .state('agregarIngredientes', {
      url: "/agregarIngredientes",
      templateUrl: "partials/agregarIngredientes.html"
    })
  	.state('confirmarPedido', {
      url: "/confirmarPedido",
      templateUrl: "partials/confirmarPedido.html"
  	});
  $urlRouterProvider.otherwise("/login");

});
