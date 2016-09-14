(function(){
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.result = "";
    $scope.checkLunch = function(v){
      var size = 0;
      if (v != null){
        size = v.split(',').length;

        if (size <= 3)
          $scope.result = "Enjoy!";
        else
          $scope.result = "Too much!";
      }else{
        $scope.result = "Please enter data first";
      }
    };
  }
})();
