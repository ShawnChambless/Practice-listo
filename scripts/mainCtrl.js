var app = angular.module('todoApp');

app.controller('mainCtrl', function(mainService, $scope) {
    $scope.title = mainService.title;
    $scope.list = mainService.list;

    $scope.addItem = mainService.addItem;

    $scope.removeItem = mainService.removeItem;
});
