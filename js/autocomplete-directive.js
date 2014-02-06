angular.module('autocomplete-directive',[])
.directive('mkAutocomplete', function(){
  return {
    restrict:'E',
    template:
      '<input placeholder="begin typing to get suggestions" />',
  }
});
