angular.module('myApp.view1', [])
    .controller('ApiController', ApiController);

ApiController.$inject = ['Auth', '$state'];

function ApiController(Auth, $state) {
    var scope = this;

    // Services
    scope.AuthSvc_ = Auth;
    scope.StateSvc_ = $state;

    //// Variables
    scope.buyerId = null;
    scope.resources = ['Address','Buyer'];
};