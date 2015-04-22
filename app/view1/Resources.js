angular.module('myApp.view1', [])
    //.config(RoutingConfigurationState)
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

function RoutingConfigurationState($stateProvider, $urlRouterProvider){
    /*$stateProvider.state(
        'Address',
        {
            url: '/Address',
            templateUrl: 'view1/Address/Address.resource.html',
            controller: 'AddressResourceController',
            controllerAs: 'addressResource'
        }).state('Buyer',
        {
            url: '/Buyer',
            templateUrl: 'view1/Buyer/Buyer.resource.html',
            controller: 'BuyerResourceController',
            controllerAs: 'buyerResource'
        });*/
}