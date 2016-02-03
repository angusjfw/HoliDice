holiDice.controller('HoliDiceController', ['FlightSearch', 'RandomAirport', function(FlightSearch, RandomAirport) {
  var self = this;

  self.startLocation = '';
  self.holidayLocation = '';

  self.doSearch = function (){
    self.holidayLocation = RandomAirport.query();

    FlightSearch.query(self.startLocation, self.holidayLocation)
      .then(function(response) {
        self.flightResults = response.data.trips;
        console.log(response);
      });
  };

}]);
