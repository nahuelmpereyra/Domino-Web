DominoApp.service("Tamanios", function ($http) {

	var getData = function(response) { return response.data }
        
    return {
        query: function() { 
            return $http.get("tamanios")
            .then(getData)}
    }
});
