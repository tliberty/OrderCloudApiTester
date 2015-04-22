angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'myApp.view1',
    'myApp.view2',
    'Login.View',
    'orderCloud.sdk'
])
    .constant('appname', 'oc')
    .constant('apiurl', 'http://core.four51.com');