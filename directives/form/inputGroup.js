application.directive('inputGroup', [function () {
    return {
        restrict: 'E',
        replace: true,

        templateUrl: function(el, attr) {
            var t = 'js/directives/form/inputGroup.html';
            if (attr.template) {
                t = attr.template;
            }
            return t;
        },

        scope: {
            ngModel: '=',
            modelType: '@',
            required: '@',
            label: '@',
            placeholder: '@',
            url: '@',
            inputClass: '@',
            error: '@'
        },

        link: function ($scope, element, attrs) {
            if (!$scope.modelType) {
                $scope.modelType = 'text';
            }
            if (!$scope.required) {
                $scope.required = false;
            }

            $scope.errors = [];

            if (!$scope.ngModel) {
                $scope.errors.push("System error: ng-model is required attribute for directive inputGroup.");
            }

            if ($scope.error) {
                $scope.errors.push($scope.error);
            }
        }
    }
}]);