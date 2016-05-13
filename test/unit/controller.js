describe('frontendCtrl', function() {
  
  var scope, ctrl;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('frontendCtrl', { $scope: scope });
  }));
  
  it('should load JSON data', function() {
    expect(scope.data.postalcode).toBe("3621 ZA");
  });
});