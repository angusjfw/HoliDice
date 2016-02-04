holiDice.factory('ResultsFactory', [function() {
  var factory = {};

  factory.validate = function(flightResults) {
    if(typeof flightResults.tripOption == "undefined" ) {
      return false;
    }
    else { return true; }
  };

  factory.outboundName = function(flightResults) {
    var iata = flightResults.tripOption[0].slice[0].segment[0].leg[0].origin;
    return factory.nameFromIata(factory.airports(flightResults), iata);
  };

  factory.inboundName = function(flightResults) {
    var iata = flightResults.tripOption[0].slice[0].segment[0].leg[0].destination;
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
    var date = flightResults.tripOption[0].slice[0].segment[0].leg[0].departureTime;
    return new Date(date).toUTCString();
  };

  factory.carrierName = function(flightResults) {
    return flightResults.data.carrier[0].name;
  };

  factory.airports = function(flightResults) {
    return flightResults.data.airport;
  };

  factory.nameFromIata = function(airports, iata) {
    var match;
    airports.forEach(function(airport) {
      if (airport.code === iata) {
        match = airport.name;
      }
    });
    if (match) { return match; }
    else { return iata; }
  };

  return factory;
}]);
