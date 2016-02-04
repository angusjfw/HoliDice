holiDice.controller('HoliDiceController',
    ['RandomAirport', 'FlightSearch', 'ResultsFactory',
    function(RandomAirport, FlightSearch, ResultsFactory) {

  var self = this;
  var MAXREQUESTS = 20;

  self.startLocation = '';
  self.holidayLocation = '';
  self.depDate = '';
  self.returnDate = '';
  self.validate = false;
  self.loading = false;
  self.requests = 0;


  self.doSearch = function (){
    self.validate = false;
    self.loading = true;

    self.holidayLocation = RandomAirport.query();

    FlightSearch.query(self.startLocation, self.holidayLocation,
                       self.depDate, self.returnDate)
      .then(function(response) {
        self.flightResults = response.data.trips;

        if (!ResultsFactory.validate(self.flightResults) &&
            self.requests < MAXREQUESTS) {
          self.requests += 1;
          self.doSearch();
        } else if (self.requests === MAXREQUESTS) {
          self.holidayLocation = "BCN";
          self.doSearch();
        } else {
          self.loading = false;
          self.validate = true;
          self.requests = 0;

          self.outboundName = ResultsFactory.outboundName(self.flightResults);
          self.inboundName = ResultsFactory.inboundName(self.flightResults);
          self.price = ResultsFactory.price(self.flightResults);
          self.flightNumber = ResultsFactory.flightNumber(self.flightResults);
          self.departureTime = ResultsFactory.departureTime(self.flightResults);
          self.carrierName = ResultsFactory.carrierName(self.flightResults);
          self.buyURL = ResultsFactory.buyURL(self.startLocation,
                        self.holidayLocation, self.depDate, self.returnDate);
        }
      });
  };
}]);
