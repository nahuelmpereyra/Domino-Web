DominoApp.service("Promos", function ($http) {

	var getData = function(response) { return response.data }
    var transform = function(json) { return new Promo(json) }
        
    return {
        query: function() { 
            return $http.get("/promos")
            .then(getData)},
        update: function(libro, cb, errorHandler) { $http.put("libros/"+libro.id, libro).then(getData).then(cb).catch(errorHandler) },
        save: function(libro, cb, errorHandler) { $http.post("libros", libro).then(getData).then(cb).catch(errorHandler) },
        remove: function(libro, cb, errorHandler) { $http.delete("libros/"+libro.id).then(getData).then(cb).catch(errorHandler) }
    }
});

	
	
//    this.getPromoById = function (id) {
//        return this.promos.find(function (promo) {
//            return promo.id == id;
//        })
//    };
//    
//
//    this.promos = [{
//            "id": 1,
//            "nombre": "Muzzarella",
//            "precio": 85,
//            "ingredientes": [{
//                    "id": 2,
//                    "nombre": "Queso",
//                    "precio": 15,
//                },
//                {
//                    "id": 5,
//                    "nombre": "Aceitunas",
//                    "precio": 5,
//                }
//            ],
//            "extras": []
//        },
//        {
//            "id": 2,
//            "nombre": "Jamon y Morron",
//            "precio": 98,
//            "ingredientes": [{
//                    "id": 3,
//                    "nombre": "Morron",
//                    "precio": 10,
//                },
//                {
//                    "id": 1,
//                    "nombre": "Jamon",
//                    "precio": 18,
//                }
//            ],
//            "extras": []
//        },
//        {
//            "id": 3,
//            "nombre": "Napolitana",
//            "precio": 103,
//            "ingredientes": [{
//                    "id": 2,
//                    "nombre": "Queso",
//                    "precio": 15,
//                },
//                {
//                    "id": 1,
//                    "nombre": "Jamon",
//                    "precio": 18,
//                }
//            ],
//            "extras": []
//        },
//
//
//    ];
//
//});