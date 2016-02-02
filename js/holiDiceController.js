holiDice.controller('HoliDiceController', ['FlightSearch', function(FlightSearch) {
  var self = this;

  self.doSearch = function (){
    self.flightResults = {
      "items": [
      {
        "origin": "LHR",
        "destination": "BOS",
        "date": "2016-02-04"
      }
      ]
    };
  };

}]);
