holiDice.factory('FlightSearch', ['$http', function($http) {
  var queryUrl = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=';
  var apiKey = googleAPIKey;

  return {
    query: function(startLocation, holidayLocation, depDate, returnDate) {
      return $http.post(
        queryUrl + apiKey,
        {
          "request": {
            "slice": [
              {
                "origin": startLocation,
                "destination": "LAX",
                "date": depDate,
                "maxConnectionDuration": 0
              },
              {
                "origin": "LAX",
                "destination": startLocation,
                "date": returnDate,
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
            "saleCountry": "GB",
            "refundable": false
          }
        }
      );
    }
  };
}]);
