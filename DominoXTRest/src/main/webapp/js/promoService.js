DominoApp.service("promoService", function () {


    this.getPromoById = function (id) {
        return this.promos.find(function (promo) {
            return promo.id == id;
        })
    };

    this.promos = [{
            "id": 1,
            "nombre": "Muzzarella",
            "precio": 85,
            "ingredientes": [{
                    "id": 2,
                    "nombre": "Queso",
                    "precio": 15,
                },
                {
                    "id": 5,
                    "nombre": "Aceitunas",
                    "precio": 5,
                }
            ],
            "extras": []
        },
        {
            "id": 2,
            "nombre": "Jamon y Morron",
            "precio": 98,
            "ingredientes": [{
                    "id": 3,
                    "nombre": "Morron",
                    "precio": 10,
                },
                {
                    "id": 1,
                    "nombre": "Jamon",
                    "precio": 18,
                }
            ],
            "extras": []
        },
        {
            "id": 3,
            "nombre": "Napolitana",
            "precio": 103,
            "ingredientes": [{
                    "id": 2,
                    "nombre": "Queso",
                    "precio": 15,
                },
                {
                    "id": 1,
                    "nombre": "Jamon",
                    "precio": 18,
                }
            ],
            "extras": []
        },


    ];

});