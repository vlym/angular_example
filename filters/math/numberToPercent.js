application.filter('numberToPercent', function() {
    return function(number) {
        return (number * 100) + '%';
    };
});