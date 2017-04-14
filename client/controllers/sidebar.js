angular.module('MyApp')
.controller('SidebarController', function($scope,$auth) {
    
    $scope.state = false;
    
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
});

