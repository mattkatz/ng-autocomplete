//currently broken as I figure out the diff between 
//protractor e2e tests and unit tests.
//this is for unit tests
describe("Autocomplete-directive", function(){
  var $compile,$rootScope;
  var $scope;
  var html;
  beforeEach(function(){
    //create a new autcomplete directive
    angular.mock.module("autocomplete-directive");
  });
  beforeEach(function(){
    inject(function(_$compile_,_$rootScope_){
      $compile=_$compile_;
      $scope = _$rootScope_.$new();
    });
   html = "<mk-autocomplete ></mk-autocomplete>";
   /*inject(function($compile,$rootScope){
     $scope=$rootScope.$new();
     elem = angular.element(html);
     var linkFunc = $compile(elem);
     linkFunc($scope);
     scope = elem.scope();
     scope.$apply();

   });*/
  });
  it("should create a textbox input", function(){
    //compile the directive, there should be a textbox
    template = $compile(html)($scope);
    $scope.$digest();
    //Render the template as a string
    var templateAsHtml = template.html();
    expect(templateAsHtml).toContain("input");
  });
  describe("when given an array as the lookup source", function(){
    template = '';
    var elem;
    beforeEach(function(){
      html = "<mk-autocomplete ng-model='tags' suggestions='availableTags'></mk-autocomplent>";
      $scope.tags = [];
      $scope.availableTags = ["art","arms","tools","toons", "topology","torpor"];
      elem = angular.element(html);
      template = $compile(html)($scope);
      $scope.$digest();
    });
    //add characters to the input
    xit("should suggest items that meet the criteria", function(){
      //elem.value = 'ar';
      console.log(elem);
      //elem.sendKeys('ar');
      //unit tests should just input a test string and resolve it
      $scope.$digest();
      expect($scope.currentSuggestions).toContain("art");
      expect($scope.currentSuggestions).toContain("arms");

    });
    xit("should not suggest items that don't meet the criteria", function(){
      expect( false).toBeTruthy();

    });
    xit("should return no suggestions if an unfamiliar item gets presented", function(){
      expect( false).toBeTruthy();

    });
  });

});
