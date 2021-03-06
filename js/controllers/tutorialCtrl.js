/**
 * Created by kshah on 5/2/16.
 */
angular.module("tutorialCtrlModule", [])

.controller("tutorialCtrl", ["$scope", "$location", function ($scope, $location) {

    $scope.message = "Hello World!";
    $scope.tutorialCtrlObject = {};

    $scope.tutorialCtrlObject.title = "My First Angular Page!";
    $scope.tutorialCtrlObject.subTitle = "I`m very excited.";
    $scope.tutorialCtrlObject.fName = "Kaushal";
    $scope.tutorialCtrlObject.lName = "Shah";

    $scope.tutorialCtrlObject.manyNames = [{name: "Kaushal", country: "USA"},
                                           {name: "Jainam", country: "India"},
                                           {name: "Chetan", country: "Denmark"},
                                           {name: "Chetana", country: "Australia"}
                                          ];

    $scope.tutorialCtrlObject.urVal = "";
    $scope.tutorialCtrlObject.storeVal = "";

    $scope.tutorialCtrlObject.binding = 2;

    $scope.multiply = function () {
        $scope.tutorialCtrlObject.binding *= 2;
    }
    
    $scope.addition = function () {
        $scope.tutorialCtrlObject.binding +=2;
    }

    $scope.usdToRs = function () {
        $scope.tutorialCtrlObject.storeVal  = $scope.tutorialCtrlObject.urVal *= 66.67;
    }

    $scope.myUrl = $location.absUrl();
    
}])

.directive ("ksmyDirective", function () {
    return {
        restrict: "E",
        template: "<h1>This is a Directive</h1>"
    }


})