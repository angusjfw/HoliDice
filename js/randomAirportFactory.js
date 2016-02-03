holiDice.factory('RandomAirport', [function() {
  return {
    query: function() {
      return airportIATAs[Math.floor(Math.random() * airportIATAs.length)];
    }
  };
}]);
