var demo = angular.module('autocompleteDemo',[])
.controller('tagsCtrl2', function($scope){
  $scope.minLength = 2;
  $scope.multiple = true;
  $scope.multipleSeparator = ",";
  $scope.selectClass = 'selected';
  $scope.processChange = function(){
    $scope.suggestions = [];
    var q = $scope.inputValue.trim();
    if($scope.multiple){
      var multipleSepPos = q.lastIndexOf($scope.multipleSeparator);
      if(multipleSepPos != -1){
        q = $scope.inputValue.substr(multipleSepPos + $scope.multipleSeparator.length).trim();
      }
    }
    if(q.length >= $scope.minLength){
      $scope.suggestions = $scope.getSuggestions(q,$scope.suggestionSource);
    }
  };
  $scope.currentResult = null;
  $scope.getCurrentResult = function(){
    var currentResult;
    if(  $scope.suggestions.length <= 0){return false;}
    return $scope.currentResult;
  };
  $scope.selectCurrentResult = function(){
    $scope.currentResult = $scope.getCurrentResult();
    if($scope.currentResult){
      if($scope.multiple){
        if($scope.inputValue.indexOf($scope.multipleSeparator) != -1){
          currentVal = $scope.inputValue.substr(0,($scope.inputValue.lastIndexOf($scope.multipleSeparator) + $scope.multipleSeparator.length));

        }else{
          currentVal = "";
        }
        $scope.inputValue = currentVal + $scope.currentResult + $scope.multipleSeparator;
        //TODO focus the input box
      } else {
        $scope.inputValue = $scope.currentResult;
      }
      $scope.suggestions = [];
      $scope.currentResult = null;
      //TODO fire an onselsect event
    }

  };
  $scope.nextResult = function(){
    if($scope.currentResult){
      index =  $scope.suggestions.indexOf($scope.currentResult);
      if(index++ < $scope.suggestions.length ){
        $scope.currentResult = $scope.suggestions[index];
      }
    }
    else if($scope.suggestions.length >0){
      $scope.currentResult = $scope.suggestions[0];
    }
  };
  $scope.prevResult = function(){
    if($scope.currentResult){
      index =  $scope.suggestions.indexOf($scope.currentResult);
      if(index-- >=0){
        $scope.currentResult = $scope.suggestions[index];
      }
    }
    else if($scope.suggestions.length > 0){
      $scope.currentResult =$scope.suggestions[$scope.suggestions.length -1];
    }
  };

  $scope.processKey = function(event){
    var enter = 13, tab = 9, esc = 27, up = 38, down = 40, left = 37, right = 39;
    switch(event.keyCode){
      case up:
        $scope.prevResult();
        break;
      case down:
        $scope.nextResult();
        break;
      case tab:
      case enter:
        $scope.selectCurrentResult();
        break;
      case esc:
        //hide the results or empty them
        break;
    }



    console.log(event.keyCode);
    //if up/down/escape and we have results
    
    //or if enter/tab and we have results and one has been selected

  };
  $scope.getSuggestions = function(filterVal, candidates){
    winners = [];
    candidates.forEach(function(candidate){
      if(candidate.contains(filterVal)){
        winners.push(candidate);
      }
    });
    return winners;
  };
  $scope.suggestions = [];
  $scope.suggestionSource = ["art", "arms", "aardvark", "alms", "trouble"];


})
.controller('tagsCtrl', function($scope){
  $scope.tagSource = function(){
    return ['art','apples','politics','police', 'lorem','ipsum'];
  };
  $scope.tags = 'loquitor';

})
.directive('mkAutocomplete', function(){
  return {
    restrict:'E',
    scope:{
      ngModel: '=',
      onAccept: '=',
      suggestions: '=',
      acceptMultiple: '=',
      multipleSeparator: '=',
      minLength: '=',
    },
    replace: 'true',

    require: '^ngModel',
    link: function(scope,element,attrs){
      scope.getVal = element.val;

      scope.getCurrentFragment = function(){
        var newValue = element.children()[0].value;
        return newValue;

      };
      scope.parseText = function(txt,q){
        var items = [], tokens = txt.split(options.delimiter), i, token;

        // parse returned data for non-empty items
        for (i = 0; i < tokens.length; i++) {
          token = (tokens[i].trim());
          if (token) {
            token = token.replace(
              new RegExp(q, 'ig'),
              function(q) { return '<span class="' + options.matchClass + '">' + q + '</span>' }
              );
            items[items.length] = token;
          }
        }
        return items;
      }
      prevResult = function(){
        //TODO implement
        console.log('implement prevResult');
      }
      nextResult = function(){
        //TODO implement
        console.log('implement nextResult');
      }
      selectCurrentResult = function(){
        //TODO implement
        console.log('implement selectCurrentResult');
      }
      scope.processKey = function(e){
        console.log('in processkey');

        // handling up/down/escape requires results to be visible
        // handling enter/tab requires that AND a result to be selected
        if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) ||
          (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {

          if (e.preventDefault)
            e.preventDefault();
          if (e.stopPropagation)
            e.stopPropagation();

          e.cancelBubble = true;
          e.returnValue = false;

          switch(e.keyCode) {

            case 38: // up
              prevResult();
              break;

            case 40: // down
              nextResult();
              break;

            case 9:  // tab
            case 13: // return
              selectCurrentResult();
              break;

            case 27: //  escape
              $results.hide();//TODO change this
              break;

          }

        } 

        else if (getVal().length != prevLength) {

          if (timeout)
            clearTimeout(timeout);
          timeout = setTimeout(suggest, options.delay);
          prevLength = element.val().length;//TODO change this

        }
      }
      //jQuery(element).suggest();

      //element.bind('keyup', scope.processKey);
      //element.bind('onchange', function(){console.log('change')});
    },
    
    template: '<input ng-change="scope.processKey()" placeholder="begin typing to get suggestions" />',
  }
});
  
