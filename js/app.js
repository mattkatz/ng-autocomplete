var demo = angular.module('autocompleteDemo',['autocomplete-directive'])
.controller('tagsCtrl', function($scope){
  $scope.tagSource = ['art','apples','politics','police', 'lorem','ipsum'];
  $scope.tags = 'loquitor';

}) 
  

