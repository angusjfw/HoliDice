describe('HoliDice', function() {

  beforeAll(function() {
    browser.get('http://localhost:8080');
    startLocation = element(by.model('HDCtrl.startLocation'));
    searchButton = element(by.css('[ng-click="HDCtrl.doSearch()"]'));
    flightResults = element.all(by.repeater('flight in HDCtrl.fightResults'));
    expectedResult = {
      "origin": "LHR",
      "destination": "BOS",
      "date": "2016-02-04"
    };
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('HoliDice');
  });

  it('suggests flights for the right locations and date', function() {
    startLocation.sendKeys('LHR');
    searchButton.click();
    expect(flightResults.first().getText()).toEqual();
  });

  it('suggested destination is randomised', function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(flightResults.getText()).toInclude("UTK");
  });
});
