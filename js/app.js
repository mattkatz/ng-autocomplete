var demo = angular.module('autocompleteDemo',[])
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
    require: '^ngModel',
    link: function(scope,element,attrs){
      getCurrentFragment = function(){
        var newValue = element.children()[0].value;
        return newValue;

      };
      parseText = function(txt,q){
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
      processKey = function(e){

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

        } else if (element.val().length != prevLength) {

          if (timeout)
            clearTimeout(timeout);
          timeout = setTimeout(suggest, options.delay);
          prevLength = element.val().length;//TODO change this

        }
      }
      //jQuery(element).suggest();

      element.bind('keyup', processKey);
      //element.bind('onchange', function(){console.log('change')});
    },
    
    template: '<input value="{{ngModel}}"  placeholder="begin typing to get suggestions" />',
  }
});
  
