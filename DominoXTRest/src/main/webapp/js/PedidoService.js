DominoApp.service("PedidoService", function($http) {

	this.idCliente = '';
	this.aclaraciones = '';
	this.platos = [];
	this.formaRetiro= {};
	this.plato = {
			"idPromo": null,
			"idTamanio": null,
			"extras": []
	};
	
	this.historial = [];
	
	
	function successHandler(response) {
		return response.data;
	}
	
	function successHandlerHistorial(response) {
		historial= response.data;
	}
	
	this.getHistorialCliente = function() {
		return this.historial;
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

	this.setFormaRetiro= function(_formaRetiro) {
		formaRetiro = _formaRetiro;
	}
	
    this.crearPedido = function(_user, _aclaraciones, _platos, _formaRetiro) { 
        return $http.post("/pedidos", {"idCliente": _user, "aclaraciones": _aclaraciones, "platos": _platos, "formaRetiro": _formaRetiro}).then(successHandler);  
    }
    
    this.getHistorial = function() { 
        return $http.get("/pedidos/" + this.getIdCliente()).then(successHandlerHistorial);  
    }
    
    this.elegirPromo = function(idPromo) {
		this.plato.idPromo = idPromo;
	}
    this.getPlato = function() {
		return this.plato;
	}
    
    this.elegirTamanio = function(idTamanio) {
		this.plato.idTamanio = idTamanio;
	}
    this.getTamanio = function() {
		return this.plato;
	};


});