angular.module('autocomplete-directive',[])
.controller('mkAutocompleteController',['$scope',function(){


}])
.directive('mkAutocomplete', function(){
  return {
    restrict: 'EA',
    scope: {
      model: "=",
      suggestions: "=",
    },
    //replace: "true",//this breaks my find an input test
    template:
      '<input placeholder="begin typing to get suggestions" autocomplete="off"/> <div id="mkAutoSuggestions" class="suggestions"><ul><li>ONE</li><li>TWO</li></ul></div> ',

    link: function(scope,element, attrs, controller) {
      scope.$watch("value", function(newValue,oldValue){
        console.log(newValue);
        //search the availabletags for possible matches
        console.log(scope.suggestions);
      })
    },
  }
});
