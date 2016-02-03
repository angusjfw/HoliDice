holiDice.factory('FlightSearch', ['$http', function($http) {
  var queryUrl = 'https://www.googleapis.com/qpxExpress/v1/trips/search\?key\='
  var apiKey = 'AIzaSyDDdyHFQrTHYRGlfZGNqOnR6vC9PkdKFpQ'
  return {
    query: function(startingLocation, holidayLocation) {
      return $http.post(
        queryUrl + apiKey,
        {
          "request": {
            "passengers": {
              "adultCount": 1
            },
            "slice": [
              {
                "origin": 'BOS',
                "destination": 'LAX',
                "date": "2016-02-10",
                "maxConnectionDuration": 0
              },
              {
                "origin": 'LAX',
                "destination": 'BOS',
                "date": "2016-02-12",
                "maxConnectionDuration": 0
              }
            ],
            "solutons": 1
          }
        }
      );
    }
  }
}]);
