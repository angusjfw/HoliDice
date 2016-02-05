holiDice.factory('FlightSearch', ['$http', function($http) {
  var factory = {};

  var queryUrl = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=';
  var apiKey = googleAPIKey;
  var DEFAULTLOCATION = "BCN";
  var MAXREQUESTS = 20;

  factory.requests = 0;

  factory.query = function(startLocation, holidayLocation, depDate, returnDate, cb) {
    factory.callAPI(startLocation, holidayLocation(), depDate, returnDate)
      .then(function(response) {
        factory.results = response.data.trips;

        if (!factory.validate(factory.results)) {
          if (factory.requests < MAXREQUESTS) {
            factory.query(startLocation, holidayLocation, depDate, returnDate, cb);
            factory.requests += 1;
          } else {
            factory.query(startLocation, DEFAULTLOCATION, depDate, returnDate, cb);
          }
        } else {
          factory.requests = 0;
          cb(factory.results);
        }
      });
  };

  factory.callAPI = function(startLocation, holidayLocation, depDate, returnDate) {
    return $http.post(
        queryUrl + apiKey,
        {
          "request": {
            "slice": [
            {
              "origin": startLocation,
              "destination": holidayLocation,
              "date": depDate,
              // "maxConnectionDuration": 0
            },
            {
              "origin": holidayLocation,
              "destination": startLocation,
              "date": returnDate,
              // "maxConnectionDuration": 0
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
  };

  factory.validate = function(results) {
    return (results.tripOption !== undefined);
  };

  return factory;
}]);
