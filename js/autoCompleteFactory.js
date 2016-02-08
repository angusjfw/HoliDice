holiDice.factory('AutoCompleteService', [function() {
  return {
    getSource: function() {
      return allAirports.map(function(airport) { return airport.name + ''; });
    },

    iataFromName: function(name) {
      return allAirports.filter(function(airport) {
        return airport.name === name;
      })[0].iata;
    }
  };
}]);
