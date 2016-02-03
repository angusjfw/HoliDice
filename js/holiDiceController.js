holiDice.controller('HoliDiceController', ['FlightSearch', function(FlightSearch) {
  var self = this;

  self.startingLocation = '';
  self.holidayLocation = 'LAX';
  self.flightResults = {};

  self.doSearch = function (){
    FlightSearch.query(self.startingLocation, self.holidayLocation)
      .then(function(response) {
        self.flightResults = response.data.trips;
        console.log(response);
      });
  };

}]);
