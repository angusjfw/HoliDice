holiDiceSearch.controller('HoliDiceController', ['$resource', function($resource) {

var self = this;

  self.doSearch = function (){
    self.searchResult = {
      "items": [
        {
          "origin": "LHR",
          "destination": "BOS",
          "date": "2016-02-04"
        }
      ]
    };
  };

}]);
