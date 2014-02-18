var demo = angular.module('autocompleteDemo',['autocomplete-directive'])
.controller('tagsCtrl', function($scope){
  $scope.tagSource = ['art','arm', 'alliaceous','alliterative','ally','politics','police','port', 'lock', 'lop','long','lorem','ipsum'];
  $scope.tags = '';

}) 
  

