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
        'data': {
          'trips' : {
            "origin": "LHR",
            "destination": "BOS",
            "date": "2016-02-04"
          }
        }
      };

      beforeEach(function(){
	module(function ($provide) {
	  fakeFlightSearch = jasmine.createSpyObj('flightSearch', ['query']);
	  $provide.factory('FlightSearch', function(){
	    return fakeFlightSearch;
	  });

	  fakeRandomAirport = jasmine.createSpyObj('randomAirport', ['query']);
	  $provide.factory('RandomAirport', function(){
	    return fakeRandomAirport;
	  });
	});
      });

      beforeEach(inject(function ($q, $rootScope) {
        scope = $rootScope;
        fakeFlightSearch.query.and.returnValue($q.when(fakeData));
        fakeRandomAirport.query.and.returnValue("UTK");
      }));

      beforeEach(inject(function($controller) {
        ctrl = $controller('HoliDiceController');
      }));

      it('calls flightSerachFactory#query function', function() {
        ctrl.startingLocation = 'LHR';
        ctrl.doSearch();
        scope.$apply();
        expect(fakeFlightSearch.query.calls.any()).toEqual(true);
        expect(ctrl.flightResults).toEqual(fakeData.data.trips);
      });

      it('calls randomAirportFactory#query function', function() {
        ctrl.startingLocation = 'LHR';
        ctrl.doSearch();
        scope.$apply();
        expect(fakeRandomAirport.query.calls.any()).toEqual(true);
        expect(ctrl.holidayLocation).toEqual("UTK");
      });
    });
  });
});
