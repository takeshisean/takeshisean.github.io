(function ($) {
        'use strict';

        angular.module("ShoppingListCheckOff", [])

        .controller("ToBuyController", ["$scope", "ShoppingListCheckOffService", function ($scope, ShoppingListCheckOffService) {
            $scope.toBuy = ShoppingListCheckOffService.getToBuyList();            
            
            $scope.addItem = function(id){
                ShoppingListCheckOffService.moveItemToBoughtList(id);
            }
        }])
        
        .controller("AlreadyBoughtController", ["$scope", "ShoppingListCheckOffService", function ($scope, ShoppingListCheckOffService) {
            $scope.bought = ShoppingListCheckOffService.getBoughtList();         
        }])
        
        .factory("ShoppingListCheckOffService", ["$http", "$filter", function ($http, $filter) {
                let service = {};
                let itemList = 
                    [
                        { id: 1, name: "Apple", quantity: 5 },
                        { id: 2, name: "Banana", quantity: 6 },
                        { id: 3, name: "Cookies", quantity: 10 },
                        { id: 4, name: "Bread", quantity: 8 },
                        { id: 5, name: "Wine", quantity: 2 }
                    ];
                let boughtList = [];

                service.getToBuyList = function () {
                    return itemList;
                }
            
            service.getBoughtList = function () {
                    return boughtList;
                }
            
            service.moveItemToBoughtList = function(id){
                let arrayIndex = itemList.map(function (e) { return e.id; }).indexOf(id);
                let arrayItem = $.grep(itemList, function(e){ return e.id == id; });
                //console.log(arrayIndex);
                //console.log(arrayItem);
                boughtList.push(arrayItem[0]);
                itemList.splice(arrayIndex, 1);                                
            }

                return service;
        }]);
})(jQuery);