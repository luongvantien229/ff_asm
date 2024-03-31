
window.homeController = function ($scope, $http) {
  $scope.getData = function () {
    $http
      .get("http://localhost:3000/posts")
      .then( response => {
        $scope.res = response.data;
      });
  };
  $scope.getData();
};
