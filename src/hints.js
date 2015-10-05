/*jslint unparam: true */
angular.module('ngHints', ['ngSanitize']).directive('hints', function ($sanitize) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      hints: '=',
      previousContent: '=',
      nextContent: '='
    },
    template: '<div class="hints">' +
                '<div class="single-hint" ng-bind-html="currentHint"></div>' +
                '<div class="hint-buttons">' +
                  '<button class="hint-button hint-previous" ng-disabled="isDisabled" ng-click="previous()"><span class="hint-previous-content">{{previousContent}}</span></button>' +
                  '<button class="hint-button hint-next" ng-disabled="isDisabled" ng-click="next()"><span class="hint-next-content">{{nextContent}}</span></button>' +
                '</div>' +
              '</div>',
    link: function (scope) {
      var currentIndex = 0;

      function setHint(index) {

        if (!scope.hints || scope.hints.length === 0) {
          scope.currentHint = 'No hint available!';
          scope.isDisabled = true;
          return;
        }

        scope.isDisabled = false;
        if (index < 0) {
          currentIndex = scope.hints.length - 1;
        } else if (index >= scope.hints.length) {
          currentIndex = 0;
        } else {
          currentIndex = index;
        }
        scope.currentHint = scope.hints[currentIndex];
      }

      setHint(0);

      scope.next = function () {
        setHint(currentIndex + 1);
      };

      scope.previous = function () {
        setHint(currentIndex - 1);
      };
    }
  };

});