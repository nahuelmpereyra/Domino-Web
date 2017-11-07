DominoApp.service("PedidoService", function($http) {

	this.idCliente = '';
	this.aclaraciones = '';
	this.platos = [];
	this.formaRetiro= {}
	
	
	
	
	function successHandler(response) {
		return response.data;
	}
	
	this.getIdCliente = function() {
		return idCliente;
	}
	
	this.setIdCliente = function(_idCliente) {
		idCliente = _idCliente;
	}
	
	this.getAclaraciones = function() {
		return aclaraciones;
	}

	this.setAclaraciones = function(_aclaraciones) {
		aclaraciones = _aclaraciones;
	}

	this.getPlatos = function() {
		return platos;
	}

	this.agregarPlato= function(_plato) {
		platos.push(_plato);
	}
	
	this.getFormaRetiro = function() {
		return formaRetiro;
	}

	this.getFormaRetiro= function(_formaRetiro) {
		formaRetiro = _formaRetiro;
	}
	
    this.crearPedido = function(_user, _aclaraciones, _platos, _formaRetiro) { 
        return $http.post("/pedidos", {"idCliente": _user, "aclaraciones": _aclaraciones, "platos": _platos, "formaRetiro": _formaRetiro}).then(successHandler);  
    }


});