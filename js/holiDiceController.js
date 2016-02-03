holiDice.controller('HoliDiceController', ['FlightSearch', function(FlightSearch) {
  var self = this;

  self.startLocation = '';
  self.holidayLocation = 'LAX';


  self.doSearch = function (){
    FlightSearch.query(self.startLocation, self.holidayLocation)
      .then(function(response) {
        self.flightResults = response.data.trips;
        console.log(response);
      });
  };

}]);
