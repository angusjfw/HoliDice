holiDice.controller('HoliDiceController', ['FlightSearch', function(FlightSearch) {
  var self = this;

  self.startLocation = '';
  self.holidayLocation = 'LAX';
  self.depDate = '';
  self.returnDate = '';


  self.doSearch = function (){
    FlightSearch.query(self.startLocation, self.holidayLocation, self.depDate, self.returnDate)
      .then(function(response) {
        self.flightResults = response.data.trips;
        console.log(response);
      });
  };

}]);
