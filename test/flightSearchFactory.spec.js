describe('factory: FlightSearch', function() {
  describe('#query', function() {
    var flightSearch, httpBackend;
    var queryUrl = 'https://www.googleapis.com/qpxExpress/v1/trips/search\?key\=';
    var apiKey = googleAPIKey;

    var fakeRandomAirport = function() { return 'LAX'; };
    var expectedResult = {
      "origin": "BOS",
      "destination": "LAX",
      "date": "2016-02-06"
    };

    beforeEach(module('HoliDice'));

    beforeEach(inject(function(FlightSearch, $httpBackend) {
      flightSearch = FlightSearch;
      httpBackend = $httpBackend;
      httpBackend
        .expectPOST(queryUrl + apiKey)
        .respond({
          'trips' : {
            'tripOption' : expectedResult
          }
        });
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('returns flight data', function() {
      flightSearch.query('BOS', fakeRandomAirport, '2016-02-06', '2016-02-13',
          function(response) {
            expect(response.tripOption).toEqual(expectedResult);
          }
      );
      httpBackend.flush();
    });
  });
});
