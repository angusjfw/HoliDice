holiDice.directive('autoComplete', function(AutoCompleteService) {
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
      elem.autocomplete({
        source: AutoCompleteService.getSource(),
        minLength: 2,
        select: function (event, selectedItem) {
          scope.HDCtrl.startLocation = selectedItem.item.value;
          scope.$apply();
          event.preventDefault();
        }
      });
    }
  };
});
