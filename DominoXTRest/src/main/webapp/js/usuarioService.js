DominoApp.service("UsuarioService", function ($http) {
	
	
	var self = this;
	
	var getData = function(response) { return response.data }
     
	this.usuario="";
	
    return { 	

    	login: function(user, password, errorHandler) { 
        this.usuario = { 
            "usuario": user, 
            "password": password,
          }
        return $http.post("/login", this.usuario).then(user).catch(errorHandler) },
};
    
});
