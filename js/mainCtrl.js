angular.module('myApp').controller('mainCtrl', function($scope, $interval, mainService){

$scope.runTime = function() {
  $scope.time = moment().format("DD-YYYY HH:mm:ss")
}

$interval($scope.runTime, 1000)

$scope.getQuote = function() {
  mainService.getQuote().then(function(response) {
    $scope.quote = response.data.contents.quotes[0]
    console.log(response.data)
  })
}



})
