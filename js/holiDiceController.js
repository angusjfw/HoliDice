holiDice.controller('HoliDiceController', ['FlightSearch', function(FlightSearch) {
  var self = this;

  self.startingLocation = '';

  self.doSearch = function (){
    FlightSearch.query()
      .then(function(response) {
        self.flightResults = response;
      });
  };

}]);
