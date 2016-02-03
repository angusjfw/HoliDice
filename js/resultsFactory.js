holiDice.factory('ResultsFactory', [function() {
  var factory = {};

  factory.outboundName = function(flightResults){
    return flightResults.data.airport[0].name

  };

  factory.inboundName = function(flightResults){
    return flightResults.data.airport[1].name
  };

  factory.price = function(flightResults){
    return flightResults.tripOption[0].saleTotal
  };

  factory.flightNumber = function(flightResults){
    return flightResults.tripOption[0].slice[0].segment[0].flight.number
  };

  factory.departureTime = function(flightResults){
    return flightResults.tripOption[0].slice[0].segment[0].leg[0].departureTime
  };

  factory.carrierName = function(flightResults){
    return flightResults.data.carrier[0].name
  };

  factory.returnTime = function(){

  };

return factory;
}]);
