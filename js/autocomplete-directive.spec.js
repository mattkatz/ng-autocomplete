describe("Autocomplete-directive", function(){
  var $compile,$rootScope;
  beforeEach(function(){
    //create a new autcomplete directive
    angular.mock.module("autocomplete-directive");
  });
  beforeEach(function(){
    /*inject(function(_$compile_,_$rootScope_){
      $compile=_$compile_;
      $rootScope = _$rootScope_.$new();
    });*/
   html = "<mk-autocomplete ></mk-autocomplete>";
   inject(function($compile,$rootScope){
     $scope=$rootScope.$new();
     elem = angular.element(html);
     var linkFunc = $compile(elem);
     linkFunc($scope);
     scope = elem.scope();
     scope.$apply();

   });
  });
  it("should create a textbox", function(){
    //compile the directive, there should be a textbox
    expect( false).toBeTruthy();
  });
  describe("when given an array as the lookup source", function(){
    //add characters to the input
    xit("should suggest items that meet the criteria", function(){
      expect( false).toBeTruthy();

    });
    xit("should not suggest items that don't meet the criteria", function(){
      expect( false).toBeTruthy();

    });
    xit("should return no suggestions if an unfamiliar item gets presented", function(){
      expect( false).toBeTruthy();

    });
  });

});
