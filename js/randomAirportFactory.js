holiDice.factory('RandomAirport', [function() {
  return {
    query: function() {
      return allAirports[
        Math.floor(Math.random() * allAirports.length)
      ].iata;
    }
  };
}]);
