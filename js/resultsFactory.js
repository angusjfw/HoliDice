holiDice.factory('ResultsFactory', [function() {
  var factory = {};

  factory.validate = function(flightResults) {
    return (flightResults.tripOption !== undefined);
  };

  factory.outboundName = function(flightResults) {
    var iata = flightResults.tripOption[0].slice[0].segment[0].leg[0].origin;
    return factory.nameFromIata(factory.airports(flightResults), iata);
  };

  factory.inboundName = function(flightResults) {
    var segs = flightResults.tripOption[0].slice[0].segment;
    var iata = segs[segs.length - 1].leg[0].destination;
    return factory.nameFromIata(factory.airports(flightResults), iata);
  };

  factory.price = function(flightResults) {
    var price = flightResults.tripOption[0].saleTotal;
    var currency = price.substring(0, 3) === "GBP" ? "£":price.substring(0, 3);
    return currency + price.substring(3, price.length);
  };

  factory.flightNumber = function(flightResults) {
    return flightResults.tripOption[0].slice[0].segment[0].flight.number;
  };

  factory.departureTime = function(flightResults) {
    var firstLeg = flightResults.tripOption[0].slice[0].segment[0].leg[0];
    return new Date(firstLeg.departureTime).toUTCString();
  };

  factory.carrierName = function(flightResults) {
    return flightResults.data.carrier[0].name;
  };

  factory.airports = function(flightResults) {
    return flightResults.data.airport;
  };

  factory.nameFromIata = function(airports, iata) {
    var airport = airports.filter(function(airport) {
      return airport.code === iata;
    });
    return airport[0] !== undefined ? airport[0].name : iata;
  };

  factory.buyURL = function(startLocation, holidayLocation,
                            depDate, returnDate) {
    return('/' + startLocation + '/' + holidayLocation + '/' +
           depDate.replace(/-/g, '').substring(2) + '/' +
           returnDate.replace(/-/g, '').substring(2));
  };

  return factory;
}]);
