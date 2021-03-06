holiDice.controller('HoliDiceController',
    ['RandomAirport', 'FlightSearch', 'ResultsFactory',
    function(RandomAirport, FlightSearch, ResultsFactory) {

  var self = this;

  self.startLocation = '';
  self.depDate = '';
  self.returnDate = '';
  self.validate = false;
  self.loading = false;


  self.doSearch = function (){
    self.validate = false;
    self.loading = true;

    FlightSearch.query(
        self.startLocation,
        RandomAirport.query,
        self.depDate,
        self.returnDate,

        function(results) {
          self.loading = false;
          self.validate = true;
          self.flightResults = results;
          self.showResults();
        }
    );
  };

  self.showResults = function() {
    self.outboundName = ResultsFactory.outboundName(self.flightResults);
    self.inboundName = ResultsFactory.inboundName(self.flightResults);
    self.price = ResultsFactory.price(self.flightResults);
    self.flightNumber = ResultsFactory.flightNumber(self.flightResults);
    self.departureTime = ResultsFactory.departureTime(self.flightResults);
    self.carrierName = ResultsFactory.carrierName(self.flightResults);
    self.holidayLocation = ResultsFactory.inboundIata(self.flightResults);
    self.buyURL = ResultsFactory.buyURL(self.startLocation,
        self.holidayLocation, self.depDate, self.returnDate);
  };
}]);
