DominoApp.service("PedidoService", function($http) {

	this.idCliente= '';

	this.getIdCliente = function() {
		return idCliente;
	}

	this.setIdCliente = function(_idCliente) {
		idCliente = _idCliente;
	}

});