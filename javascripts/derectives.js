angular.module('MVM.directives', [])
    .directive('mvmProgress', function() {
        return {
            restrict: 'A',
            templateUrl: function(elem, attr){
                return 'view/directives/Progress.html';
            }
        };
    })
    .directive('progress', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            controller: 'ProgressController',
            require: 'progress',
            scope: {},
            templateUrl: 'template/progressbar/progress.html'
        };
    })
    .directive('bar', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            require: '^progress',
            scope: {
                value: '=',
                type: '@'
            },
            templateUrl: 'template/progressbar/bar.html',
            link: function(scope, element, attrs, progressCtrl) {
                progressCtrl.addBar(scope, element);
            }
        };
    })
    .directive('progressbar', progressbar);
