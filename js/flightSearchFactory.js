holiDice.factory('FlightSearch', ['$http', function($http) {
 return {
  query: function() {
    return {
      "origin": "LHR",
      "destination": "BOS",
      "date": "2016-02-04"
    };
  }
 };
}]);
