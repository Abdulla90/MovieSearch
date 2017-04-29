app.directive('onScrolling', function($window) {
    console.log('scroll')
    return function(scope, elm, attr) {
        var raw = elm[0];
        angular.element($window).bind('scroll', function() {
            var el = angular.element('body');
            var $bodyEl = $("html, body")
            if (el.scrollTop() + $bodyEl[0].clientHeight + 100 >= el[0].scrollHeight) {
                scope.$eval(attr.onScrolling);
            }
        });
    };
});