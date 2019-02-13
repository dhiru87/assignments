(function() {

    var app = angular.module("countryInfo",[]);

    var countryController = function($scope) {
      
        var objCountry = {
            nameOfCountry : "India",
            capitalOfCountry : "New Delhi",
            flagOfCountry : "./img/india-flag.png",
            currencyOfCountry : "ruppe"
        }
        
        $scope.country = objCountry;
    };

    app.controller("countryController",countryController);

}());