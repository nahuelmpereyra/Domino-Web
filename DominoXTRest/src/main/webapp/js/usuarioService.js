DominoApp.service("UsuarioService", function ($http) {
	
	
	var self = this;
	
	var getData = function(response) { return response.data }
     
	this.user=null;
	
    return { 	

        loginUser: function(usuario, cb, errorHandler) 
        {
        	console.log(usuario);
        	$http.post("/login", usuario)
        	.then(getData)
        	.then(cb)
        	.catch(errorHandler) 
	        self.user = usuario
        }
    }
    
});
