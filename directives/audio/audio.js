application.directive('audio', ['ngAudio', function (ngAudio) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: function(el, attr) {
            var t = 'js/directives/audio/audio.html';
            if (attr.template) {
                t = attr.template;
            }
            return t;
        },
        scope: {
            'url': '@'
        },

        link: function (scope, element) {
            scope.progressClick = function(e) {
                //console.log(e);
                if (e && e.currentTarget) {
                    var percent = (e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth;
                    if (percent > 1) {
                        percent = 1;
                    }

                    //console.log(percent);
                    scope.audio.progress = percent;
                }
            };

            scope.audio = {
                duration: '0:00'
            };

            if (scope.url) {
                scope.audio = ngAudio.load(scope.url);
            }
        }
    }
}]);
