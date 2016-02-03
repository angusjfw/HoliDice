describe('factory: RandomAirport', function() {

  var randomAirport;

    beforeEach(module('HoliDice'));
    beforeEach(inject(function(RandomAirport){
      randomAirport = RandomAirport;
    }));

    it("returns a random aiport code", function() {
      var spy = spyOn(Math, 'random').and.returnValue(0);
      expect(randomAirport.query()).toEqual("UTK");
    });

});
