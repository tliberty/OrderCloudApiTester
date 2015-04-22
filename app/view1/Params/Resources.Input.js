angular.module('myApp.view1')
    .controller('InputController', InputController);

InputController.$inject = ['$stateParams', '$state'];

function InputController($stateParams, $state) {
    var scope = this;

    // Services
    scope.StateParams_ = $stateParams;
    scope.StateSvc_ = $state;

    // Variables
    scope.id = scope.StateParams_.id;
};
