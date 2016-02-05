describe('HoliDiceController', function() {
  beforeEach(module('HoliDice'));

  it('initialises with empty search results', function() {
    var ctrl;
    inject(function($controller) {
      ctrl = $controller('HoliDiceController');
    });
    expect(ctrl.flightResults).toBeUndefined();
  });

  describe('when searching for a holdiay', function() {
    describe('#doSearch', function() {

      var ctrl, fakeFlightSearch, scope;
      var fakeData = {
        "origin": "LHR",
        "destination": "BOS",
        "date": "2016-02-04"
      };

      beforeEach(function(){
	module(function ($provide) {
	  fakeRandomAirport = jasmine.createSpyObj('randomAirport', ['query']);
	  $provide.factory('RandomAirport', function(){
	    return fakeRandomAirport;
	  });

	  fakeFlightSearch = jasmine.createSpyObj('flightSearch', ['query']);
	  $provide.factory('FlightSearch', function(){
	    return fakeFlightSearch;
	  });

	  fakeResultsFactory = jasmine.createSpyObj('resultsFactory', [
            'outboundName', 'inboundIata', 'inboundName', 'price',
            'flightNumber', 'departureTime', 'carrierName', 'airports',
            'nameFromIata', 'buyURL'
          ]);
	  $provide.factory('ResultsFactory', function(){
	    return fakeResultsFactory;
	  });
	});
      });

      beforeEach(inject(function ($q, $rootScope) {
        scope = $rootScope;
        fakeRandomAirport.query.and.returnValue("UTK");
        fakeFlightSearch.query.and.callFake(function(w, x, y, z, cb) {
          cb(fakeData);
        });
      }));

      beforeEach(inject(function($controller) {
        ctrl = $controller('HoliDiceController');
      }));

      it('calls randomAirport#query function and sets destination', function() {
        ctrl.startingLocation = 'LHR';
        ctrl.doSearch();
        scope.$apply();
        expect(ctrl.holidayLocation).toEqual("UTK");
      });

      it('calls flightSerachFactory#query function', function() {
        ctrl.startingLocation = 'LHR';
        ctrl.doSearch();
        scope.$apply();
        expect(fakeFlightSearch.query.calls.any()).toEqual(true);
        expect(ctrl.flightResults).toEqual(fakeData);
      });
    });
  });
});
