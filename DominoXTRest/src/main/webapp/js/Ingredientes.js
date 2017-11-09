DominoApp.service("Ingredientes", function ($http) {

	var getData = function(response) { return response.data }
        
    return {
        query: function() {return $http.get("/ingredientes").then(getData)},
    	
    	queryById: function(id) {return $http.get("/ingredientes/"+id).then(getData)}

    }
});
