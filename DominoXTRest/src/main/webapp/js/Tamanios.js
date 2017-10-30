DominoApp.service("Tamanios", function ($http) {

	var getData = function(response) { return response.data }
    var transform = function(json) { return new Promo(json) }
        
    return {
        query: function() { 
            return $http.get("tamanios")
            .then(getData)},
        update: function(libro, cb, errorHandler) { $http.put("libros/"+libro.id, libro).then(getData).then(cb).catch(errorHandler) },
        save: function(libro, cb, errorHandler) { $http.post("libros", libro).then(getData).then(cb).catch(errorHandler) },
        remove: function(libro, cb, errorHandler) { $http.delete("libros/"+libro.id).then(getData).then(cb).catch(errorHandler) }
    }
});
