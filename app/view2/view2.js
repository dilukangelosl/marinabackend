'use strict';


app.controller('homeCtrl', function($scope) {
$scope.toggled = true;

$scope.toggle = function(){
    $scope.toggled = !$scope.toggled;
}
});