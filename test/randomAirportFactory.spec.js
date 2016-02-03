describe('factory: RandomAirport', function() {
  beforeEach(module('HoliDice'));

  var randomAirport;
  beforeEach(inject(function(RandomAirport){
    randomAirport = RandomAirport;
  }));

  it("returns a random aiport code", function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(randomAirport.query()).toEqual("UTK");
  });
});
