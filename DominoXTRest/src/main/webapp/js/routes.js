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
    .state('elegirTamanio', {
      url: "/elegirTamanio/:id",
      templateUrl: "partials/elegirTamanio.html"
     })
    .state('agregarIngredientes', {
      url: "/agregarIngredientes",
      templateUrl: "partials/agregarIngredientes.html"
     });
  $urlRouterProvider.otherwise("/login");

});
