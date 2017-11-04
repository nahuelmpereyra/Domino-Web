DominoApp.service("UsuarioService", function ($http) {
	
	
	var self = this;
	
	this.usuario="";
	
	function successHandler(response) {
		self.usuario = response.data;
		return self.usuario;
	}

	function errorHandler(response) {
		console.log("Errorrrr", response.data);
	}
	
    this.login = function(user, password) { 
        return $http.post("/login", {"usuario": user, "password": password}).then(successHandler);  
    }
    
});
