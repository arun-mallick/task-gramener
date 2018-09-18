angular.module("myApp",[]).controller('Controller',function($scope){
    $scope.arr = [];
    //Add box
    $scope.addBox = function () {
        $scope.arr.push($scope.count);
        $scope.obj = {
            "font-size":$scope.arr.length+10+"px"
        }
    };
    //remove box
    $scope.removeBox = function(){
        $scope.arr.splice(-1,1);
        $scope.obj = {
            "font-size":$scope.arr.length+10+"px"
        }
    };
})