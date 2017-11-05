DominoApp.service("UsuarioService", function ($http) {
	
	
	var self = this;
	
	this.usuario="";
	
	function successHandler(response) {
		self.usuario = response.data;
		return self.usuario;
	}

	function errorHandler(response) {
		console.log("Error", response.data);
	}
	
    this.login = function(user, password) { 
        return $http.post("/login", {"usuario": user, "password": password}).then(successHandler);  
    }
    
    this.register = function(nombre, usuario, password, email, direccion) { 
        return $http.post("/usuarios", {"nombre": nombre, "usuario": usuario, "password": password, "email": email, "direccion": direccion}).then(successHandler);  
    }
    
    this.update = function(idUsuario, nombreUsuarioLogueado, emailUsuarioLogueado, direccionUsuarioLogueado) { 
        return $http.put("/usuarios/"+idUsuario, {"nombre": nombreUsuarioLogueado, "email": emailUsuarioLogueado, "direccion": direccionUsuarioLogueado}).then(successHandler);  
    }
});
