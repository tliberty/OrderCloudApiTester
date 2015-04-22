angular.module('Login.View', [])
    .controller('LoginController', LoginController);

//LoginController.$inject = ['OAuth', 'Auth', '$state'];

function LoginController(OAuth, Auth, appname, $state) {
    var scope = this;

    // Services
    scope.OAuthSvc_ = OAuth;
    scope.AuthSvc_ = Auth;
    scope.StateSvc_ = $state;
    scope.AppName_ = appname;

    // Variables
    scope.invalidCredentials = undefined;
    scope.credentials = {
        userName: undefined,
        password: undefined
    };
    scope.isAuthenticated = false;

    // Custom Behaviors
    scope.login = function () {
        scope.isAuthenticated  = false;

        if (angular.isDefined(scope.credentials.userName) && angular.isDefined(scope.credentials.password)) {
            scope.AuthSvc_.removeToken(scope.AppName_);
            scope.OAuthSvc_.login(scope.credentials).then(function(data) {
                var token = scope.AuthSvc_.getToken();
                if (angular.isDefined(token)) {
                    scope.isAuthenticated = scope.AuthSvc_.isAuthenticated();
                    scope.StateSvc_.go('home');
                }
            }).catch(function (ex) {
                console.log(ex);
                scope.invalidCredentials = ex.statusText;
                scope.isAuthenticated  = false;
            });
        }
    };
};
