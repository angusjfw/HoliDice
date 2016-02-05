$(function() {
  $( "#origin" ).autocomplete({
    source: allAirports.map(function(airport) { return airport.iata; })
  });
});
