'use strict';



app.controller('loginCtrl', function($scope, $state) {

 $scope.login = {};

 $scope.loading = false ;


 $scope.loginuser = function (login) {
     $scope.loading = true ;
  console.log(login);

  $scope.message = "Login Success";
  $state.go('home');
 }

});