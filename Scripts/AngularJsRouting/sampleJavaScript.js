var mainapp = angular.module('Hello', ['ngRoute']);

mainapp.config(function ($routeProvider) {
    $routeProvider
        .when('/Home', { controller: 'HelloCtrl', templateUrl: '/Views/Home/Index.cshtml' })
        .when('/Test', { controller: 'HelloCtrl', templateUrl: '/Views/Home/Test.cshtml' })
        .otherwise({ redirectTo: '/Views/Home' });
});

mainapp.controller('HelloCtrl', function ($scope) {
    $scope.isedit = false;
    $scope.companies = [{ name: 'sdf', employee: 1235, headoffice: 'bngf' },
        { name: 'dfg', employee: 0099, headoffice: 'uytr' },
        { name: 'lkjh', employee: 765, headoffice: 'okjhgf' },
        { name: 'qasq', employee: 334, headoffice: 'bvxc' }];

    $scope.clearRow = function () {
        $scope.name = '';
        $scope.employee = '';
        $scope.headoffice = '';
        $scope.isedit = false;
    }

    $scope.addRow = function () {
        $scope.companies.push({ name: $scope.name, employee: $scope.employee, headoffice: $scope.headoffice });
        $scope.message = 'Added';
        $scope.clearRow();
    }

    $scope.editMode = function (company) {
        $scope.name = company.name;
        $scope.employee = company.employee;
        $scope.headoffice = company.headoffice;
        $scope.isedit = true;
    }

    $scope.editRow = function (name) {
        for (var i = 0; i < $scope.companies.length; i++) {
            if (name == $scope.companies[i].name) {
                $scope.companies[i].name = $scope.name;
                $scope.companies[i].employee = $scope.employee;
                $scope.companies[i].headoffice = $scope.headoffice;
                break;
            }
        }
        $scope.message = 'Updated';
        $scope.clearRow();
    }

    $scope.removeRow = function (name) {
        var comAtt = eval($scope.companies);
        var index = -1;

        for (var i = 0; i < comAtt.length; i++) {
            if (name == comAtt[i].name) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            $scope.message = 'something gone wrong';
        } else {
            $scope.companies.splice(index, 1);
            $scope.message = 'Removed';
        }
    }
});