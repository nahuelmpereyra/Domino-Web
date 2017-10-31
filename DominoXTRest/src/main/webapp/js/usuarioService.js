DominoApp.service("usuarioService", function ($http) {

	
	var self = this;
	
	var getData = function(response) { return response.data }
     
	this.user=null;
	
    return {
        loginUser: function(usuario, cb, errorHandler) 
        { $http.post("/usuarios", usuario)
        	.then(getData)
        	.then(cb)
        	.catch(errorHandler) 
	        self.user = usuario
        }
    }
    
});
