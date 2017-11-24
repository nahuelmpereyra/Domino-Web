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
	this.ingredienteExtra={
			"ingrediente": null,
			"distribucion": null,
			
	}
	
	this.historial = null;
	
	
	function successHandler(response) {
		return response.data;
		console.log(response.data)
	}
	
	function successHandlerHistorial(response) {
		this.historial= response.data;
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
		return this.aclaraciones;
	}

	this.setAclaraciones = function(_aclaraciones) {
		aclaraciones = _aclaraciones;
	}

	this.getPlatos = function() {
		return this.platos;
	}

	this.agregarPlato= function(_plato) {
		this.platos.push(_plato);
	}
	
	this.getFormaRetiro = function() {
		return this.formaRetiro;
	}

	this.setFormaRetiro= function(_formaRetiro) {
		formaRetiro = _formaRetiro;
	}
	
    this.crearPedido = function() { 
        return $http.post("/pedidos", {"idCliente": this.getIdCliente(), "aclaraciones": this.getAclaraciones(), "platos": this.getPlatos(), "formaRetiro": this.getFormaRetiro()}).then(successHandler);  
    }
    
    this.getHistorial = function() { 
        return $http.get("/pedidos/" + this.getIdCliente()).then(successHandlerHistorial);  
    }
    
    this.elegirPromo = function(idPromo) {
		this.plato.idPromo = idPromo;
	}
    this.agregarExtras = function(ingrediente, distribucion) {
    	this.setIngredienteExtra(ingrediente);
    	this.setDistribucion(distribucion);
		this.plato.extras.push(this.ingredienteExtra)
	}
    this.setIngredienteExtra = function(ingrediente){
    	this.ingredienteExtra.ingrediente = ingrediente;
    }
    this.setDistribucion = function(distribucion){
    	this.ingredienteExtra.distribucion = distribucion;
    }
    this.getPlato = function() {
		return this.plato;
	}
    
    this.getExtras = function() {
		return this.plato.extras;
	}
    this.elegirTamanio = function(idTamanio) {
		this.plato.idTamanio = idTamanio;
	}
    this.getTamanio = function() {
		return this.plato;
	};


});