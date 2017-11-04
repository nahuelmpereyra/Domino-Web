DominoApp.service("Distribuciones", function ($http) {

		var getData = function(response) { return response.data }
	        
	    return {
	        query: function() { 
	            return $http.get("/distribuciones")
	            .then(getData)}
	    }
	});