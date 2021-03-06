DominoApp.service("Promos", function ($http) {

	var getData = function(response) { return response.data }
        
    return {
        query: function() {
        	return $http.get("/promos")
        	.then(getData)
        },
       
        queryById: function(id) {
        	return $http.get("/promos/"+id)
        	.then(getData)}
    }
    
   
});
