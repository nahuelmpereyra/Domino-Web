DominoApp.service("PedidoService", function($http) {

	var promo;
	var cliente;
	var aclaracion;
	var ingredientes;
	var formaRetiro;
	var platos;

	this.getPromo = function() {
		return promo;
	};
	this.setPromo = function(Promo) {
		promo = Promo;
	};

	this.getCliente = function() {
		return cliente;
	};
	this.setCliente = function(Cliente) {
		cliente = Cliente;
	};

	this.getAclaraciones = function() {
		return aclaraciones;
	};
	this.setAclaraciones = function(Aclaraciones) {
		aclaraciones = Aclaraciones;
	};

	this.getIngredientes = function() {
		return ingredientes;
	};
	this.setIngredientes = function(Ingredientes) {
		ingredientes = Ingredientes;
	};
	this.getFormaRetiro = function() {
		return formaRetiro;
	};
	this.setFormaRetiro = function(FormaRetiro) {
		formaRetiro = FormaRetiro;
	};

	return {
		save : function() {
			// return $http.post("/distribuciones") falta terminar el post
		}
	}

});