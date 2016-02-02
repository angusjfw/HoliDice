describe('factory: FlightSearch', function() {
  beforeEach(module('HoliDice'));

  var flightSearch;
  beforeEach(inject(function(FlightSearch) {
    flightSearch = FlightSearch;
  }));

  it('responds to query', function() {
    expect(flightSearch.query).toBeDefined();
  });

  describe('#query', function() {
    var expectedResult = {
      "origin": "LHR",
      "destination": "BOS",
      "date": "2016-02-04"
    };

    it('returns flight data', function() {
      expect(flightSearch.query()).toEqual(expectedResult);
    });
  });
});
