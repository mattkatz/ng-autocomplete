var demo = angular.module('autocompleteDemo',['autocomplete-directive'])
.controller('tagsCtrl', function($scope){
  $scope.tagSource = ['alliaceous','ally','alley','politics','police','port','lock','lorem','log','ipsum'];
  $scope.tags = '';

}) 
  

