holiDice.controller('HoliDiceController', ['FlightSearch','ResultsFactory', function(FlightSearch, ResultsFactory) {
  var self = this;

  self.startLocation = '';
  self.holidayLocation = 'LAX';
  self.depDate = '';
  self.returnDate = '';


  self.doSearch = function (){
    FlightSearch.query(self.startLocation, self.holidayLocation, self.depDate, self.returnDate)
      .then(function(response) {
        self.flightResults = response.data.trips;
        self.outboundName = ResultsFactory.outboundName(self.flightResults);
        self.inboundName = ResultsFactory.inboundName(self.flightResults);
        self.price = ResultsFactory.price(self.flightResults);
        self.flightNumber = ResultsFactory.flightNumber(self.flightResults);
        self.departureTime = ResultsFactory.departureTime(self.flightResults);
        self.carrierName = ResultsFactory.carrierName(self.flightResults);
        console.log(response);
      });
  };

}]);
