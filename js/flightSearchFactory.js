holiDice.factory('FlightSearch', ['$http', function($http) {
  var queryUrl = 'https://www.googleapis.com/qpxExpress/v1/trips/search\?key\='
  var apiKey = 'AIzaSyDDdyHFQrTHYRGlfZGNqOnR6vC9PkdKFpQ'
  return {
    query: function(startingLocation, holidayLocation) {
      return $http.post(
        queryUrl + apiKey,
        {
          "request": {
            "slice": [
              {
                "origin": "BOS",
                "destination": "LAX",
                "date": "2016-02-10",
                "maxConnectionDuration": 0
              }
            ],
            "passengers": {
              "adultCount": 1,
              "infantInLapCount": 0,
              "infantInSeatCount": 0,
              "childCount": 0,
              "seniorCount": 0
            },
            "solutions": 1,
            "refundable": false
          }
        }
      );
    }
  }
}]);
