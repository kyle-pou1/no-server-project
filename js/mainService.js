angular.module('myApp').service('mainService', function($http) {
  // var quoteUrl = 'http://api.forismatic.com/api/1.0/'


  this.getQuote = function(){
      return $http({
        method: 'GET',
        url: "http://quotes.rest/qod.json"
      })
  }

})
