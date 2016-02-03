describe('factory: FlightSearch', function() {
  describe('#query', function() {
    var flightSearch, httpBackend;
    var queryUrl = 'https://www.googleapis.com/qpxExpress/v1/trips/search\?key\=';
    var apiKey = googleAPIKey;
    var expectedResult = {
      "origin": "LHR",
      "destination": "BOS",
      "date": "2016-02-04"
    };

    beforeEach(module('HoliDice'));

    beforeEach(inject(function(FlightSearch, $httpBackend) {
      flightSearch = FlightSearch;
      httpBackend = $httpBackend;
      httpBackend
        .expectPOST(queryUrl + apiKey)
        .respond(expectedResult);
    }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('returns flight data', function() {
      flightSearch.query('BOS', 'LAX')
        .then(function(response) {
          expect(response.data).toEqual(expectedResult);
        });
      httpBackend.flush();
    });
  });
});
