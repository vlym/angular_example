angular.module("app").controller("FormCtrl", ["$scope", function($scope) {
    $scope.word = 'name';
    $scope.word2 = 'name2';
    $scope.word3 = 'name3';
    $scope.word4 = 'name4';

    $scope.word5 = '';

    $scope.wordclass = 'focus';
    $scope.worderror = 'Please, fill this field correctly.';
}]);