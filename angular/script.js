/*
var work = function() {
  console.log("working hard!");
};

var doWork = function(f) {

   console.log("starting");

   try
   {
    f();
   }
   catch(ex) {
       console.log(ex);
   }
   console.log("end");
};

doWork(work);


// module pattern in JS
var createWorker = function() {

    var workCount = 0;

    var  task1 = function()
    {
        workCount +=1;
        console.log("taskl " + workCount);
    }

    var  task2 = function()
    {
        workCount +=1;
        console.log("task2 " + workCount);
    }

    return {
        job1: task1,
        job2: task2
    }
  };
  
var worker = createWorker();
worker.job1();
worker.job2();
worker.job2();
worker.job2();


// IIFE
(function() {


var createWorker = function() {

    var workCount = 0;

    var  task1 = function()
    {
        workCount +=1;
        console.log("taskl " + workCount);
    }

    var  task2 = function()
    {
        workCount +=1;
        console.log("task2 " + workCount);
    }

    return {
        job1: task1,
        job2: task2
    }
  };
  
var worker = createWorker();
worker.job1();
worker.job2();
worker.job2();
worker.job2();
worker.job2();
}());



// controllers

var MainController = function($scope) {
    $scope.message = "Hello, Angular!";
    $scope.name = "Deepak Verma";
}



var MainController = function($scope) {
    
    var person = {
        firstName: "Sandeep",
        lastName: "Verma",
        imageSrc: "/pic/download.jfif"
        
    }
    $scope.message = "Hello, Angular!";
    $scope.person = person;
}

*/
(function() {
    var app = angular.module("githubViewer",[]);

    var MainController = function($scope,$http,$interval,$log) {
    
        var userComplete = function(response) {
           $scope.user = response.data;
           $http.get($scope.user.repos_url)
                .then(onRepos,onError);
           //console.log($scope.user);

        }
    
        var onRepos = function(response) {
            $scope.repos = response.data;
         }
    

        var onError = function(reason) {
            $scope.error = "Could not fetch the data";
         }

         var decrementCountdown = function() {
             $scope.countdown -= 1;
             if($scope.countdown < 1) {
                 $scope.search($scope.username);
             }
         }

         var countdownInterval = null;
         var startCountDown = function() {
            countdownInterval= $interval(decrementCountdown,1000,$scope.countdown);
         };

         $scope.search = function(username) {
             $log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username)
            .then(userComplete,onError);

            
            if(countdownInterval)
            {
                $interval.cancel(countdownInterval);   
                countdownInterval = null; 
            }
         }
                

        

        $scope.username = "angular";       
        $scope.message = "Hello, Angular!";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountDown();
    };

    app.controller("MainController",["$scope","$http","$interval","$log",MainController]);
    //app.controller("MainController",[MainController]);

}());

