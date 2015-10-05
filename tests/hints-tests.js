describe('Hints directive', function () {

  var element, $scope, $compile, $rootScope;

  function compile(hints) {
    $rootScope.hints = hints;
    element = $compile("<hints hints='hints'/>")($rootScope);
    $scope = element.isolateScope();
    $scope.$digest();
  }

  beforeEach(module('ngHints'));
  beforeEach(function () {
    inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      compile(['first', 'second']);
    });
  });

  it('starts at first hint', function () {
    assert.equal($scope.currentHint, 'first');
  });

  it('allows to show next hint', function () {
    $scope.next();
    assert.equal($scope.currentHint, 'second');
  });

  it('next hint hint will be first hint', function () {
    $scope.next();
    $scope.next();
    assert.equal($scope.currentHint, 'first');
  });

  it('allows to show previous hint', function () {
    $scope.next();
    $scope.previous();
    assert.equal($scope.currentHint, 'first');
  });

  it('previous hint will be last hint', function () {
    $scope.previous();
    assert.equal($scope.currentHint, 'second');
  });

  it('can deal with empty hints', function () {
    compile([]);
    assert.equal($scope.currentHint, 'No hint available!');
    assert.equal($scope.isDisabled, true);
  });

  it('can deal with no hints', function () {
    compile(undefined);
    assert.equal($scope.currentHint, 'No hint available!');
    assert.equal($scope.isDisabled, true);
  });

});