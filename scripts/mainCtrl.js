var app = angular.module('todoApp');

app.controller('mainCtrl', function($scope) {
    $scope.title = 'Work Todo List';
    $scope.list = [
        'Build a new queue',
        'Talk to Cahlan',
        'Review Lessons'
    ];

    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.list.push($scope.newItem);
            $scope.newItem = '';
        }
    };

    $scope.removeItem = function() {
            var index = $scope.list.indexOf($scope.thingToRemove);
            if (index !== -1){
                $scope.list.splice(index, 1);
                $scope.thingToRemove = ' ';
            }
    };
});
