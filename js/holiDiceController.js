holiDice.controller('HoliDiceController', ['FlightSearch', 'RandomAirport',
    'ResultsFactory', function(FlightSearch, RandomAirport, ResultsFactory) {

  var self = this;
  var count = 0;

  self.startLocation = '';
  self.holidayLocation = '';
  self.depDate = '';
  self.returnDate = '';
  self.validate = false;
  self.loading = false;


  self.doSearch = function (){
    self.loading = true;
    self.validate = false;
    self.holidayLocation = RandomAirport.query();

    FlightSearch.query(self.startLocation, self.holidayLocation,
        self.depDate, self.returnDate)
      .then(function(response) {
        self.flightResults = response.data.trips;
        if (ResultsFactory.validate(self.flightResults) === false && count < 5) {
          count += 1;
          self.doSearch();
        } else if (count === 5) {
          self.holidayLocation = "LHR";
          self.doSearch();
        } else {
          self.loading = false;
          self.validate = true;
          self.outboundName = ResultsFactory.outboundName(self.flightResults);
          self.inboundName = ResultsFactory.inboundName(self.flightResults);
          self.price = ResultsFactory.price(self.flightResults);
          self.flightNumber = ResultsFactory.flightNumber(self.flightResults);
          self.departureTime = ResultsFactory.departureTime(self.flightResults);
          self.carrierName = ResultsFactory.carrierName(self.flightResults);
          count = 0;
          console.log(response);
          console.log(self.holidayLocation);
        }
      });
  };
}]);
