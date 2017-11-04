DominoApp.service("Ingredientes", function ($http) {

	var getData = function(response) { return response.data }
        
    return {
        query: function() {return $http.get("/ingredientes").then(getData)}
    }
});
