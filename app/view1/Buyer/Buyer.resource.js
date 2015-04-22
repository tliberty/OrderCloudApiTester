angular.module('myApp.view1')
    .controller('BuyerResourceController', BuyerResourceController);

BuyerResourceController.$inject = ['Buyer'];

function BuyerResourceController(Buyer) {
    var scope = this;

    // Services
    scope.BuyerSvc_ = Buyer;

    // variables
    scope.results = null;
    scope.buyerId = null;
    scope.getBuyerByIdResults = null;

    scope.query = function() {
        scope.BuyerSvc_.query().then(function(data){
            scope.results = data;
        });
    };

    scope.getBuyerById = function() {
        scope.BuyerSvc_.getBuyer(scope.buyerId).then(function(data){
            scope.getBuyerByIdResults = data;
        });
    };
}
