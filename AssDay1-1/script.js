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

        
        var arrCountries = [{
            nameOfCountry : "India",
            capitalOfCountry : "New Delhi",
            flagOfCountry : "./img/india-flag.png",
            currencyOfCountry : "ruppe"
        },
    
        {
            nameOfCountry : "USA",
            capitalOfCountry : "Washinton D.C.",
            flagOfCountry : "./img/usa.jpg",
            currencyOfCountry : "Dollar"
        },
    
        {
            nameOfCountry : "England",
            capitalOfCountry : "London",
            flagOfCountry : "./img/eng.jpg",
            currencyOfCountry : "Pound sterling"
        },
    
        {
            nameOfCountry : "New Zealand",
            capitalOfCountry : "Wellington",
            flagOfCountry : "./img/nz.png",
            currencyOfCountry : "new zealand dollar"
        },

        {
            nameOfCountry : "Australia",
            capitalOfCountry : "Canberra",
            flagOfCountry : "./img/aus.png",
            currencyOfCountry : "australian dollar"
        }
       ];
       
       $scope.CountriesList = arrCountries;
    };

    app.controller("countryController",countryController);

}());