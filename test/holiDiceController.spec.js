describe('HoliDiceController', function() {
  beforeEach(module('HoliDice'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('HoliDiceController');
  }));

  it('initialises with empty search results', function() {
    expect(ctrl.flightResults).toBeUndefined();
  });

  describe('when searching for a holdiay', function() {

    var items = [
      {
        "origin": "LHR",
        "destination": "BOS",
        "date": "2016-02-04"
      }
    ];

    it('displays search results', function() {
      ctrl.doSearch();
      expect(ctrl.flightResults.items).toEqual(items);
    });
  });
});
