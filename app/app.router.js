angular.module('myApp')
    .config(MainRoutingConfiguration);

// Dependency Injection
MainRoutingConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

function MainRoutingConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginController'
    }).state(
        'home',
        {
            url: '/home',
            templateUrl: 'view1/Resources.html',
            controller: 'ApiController',
            controllerAs: 'apiResource',
            resolve: {
                isAuthenticated: function(Auth, $state) {
                    if (!Auth.isAuthenticated()) {
                        $state.go('login');
                    }

                    return Auth.isAuthenticated();
                }
            }
        }
    ).state('home.resources',
        {
            url: '^/resources/:id',
            templateUrl: 'view1/Params/Resources.Input.html',
            controller: 'InputController',
            controllerAs: 'inputController'
        }
    ).state(
        'home.resources.Address',
        {
            url: '/Address',
            templateUrl: 'view1/Params/Results/Address/Address.resource.html',
            controller: 'AddressResourceController',
            controllerAs: 'addressResource'
        }).state('home.resources.Buyer',
        {
            url: '/Buyer',
            templateUrl: 'view1/Params/Results/Buyer/Buyer.resource.html',
            controller: 'BuyerResourceController',
            controllerAs: 'buyerResource'
        }).state('logout', {
            url: '/logout',
            controller: function(Auth, appname, $state, $scope) {
                Auth.removeToken(appname);
                $scope.isAuthenticated = Auth.isAuthenticated();
                $state.go('login');
            }
        });

    $urlRouterProvider.otherwise('/login');
}

