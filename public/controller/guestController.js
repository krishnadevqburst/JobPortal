myapp.controller('guestController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $rootScope.bodylayout = "";
  $scope.link = localStorage.link;
  $scope.datas = JSON.parse(localStorage.datas);
}]);