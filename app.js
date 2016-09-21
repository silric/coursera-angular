(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.str1      = "";
  $scope.myMsg     = "";

  $scope.lunchCheck = function () {
    $scope.str1 =$scope.lunchList.split(",");
    $scope.str1.trim
    if ($scope.str1=="") {
      $scope.myMsg="Please enter data first";
    } else {
      if($scope.str1.length<=3) {
        $scope.myMsg="Enjoy!";
      } else {
        $scope.myMsg="Too Much!";
      };
    };
  };

}
})();


