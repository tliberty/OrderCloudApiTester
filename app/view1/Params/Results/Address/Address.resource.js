angular.module('myApp.view1')
    .controller('AddressResourceController', AddressResourceController);

AddressResourceController.$inject = ['Address'];

function AddressResourceController(Address) {
    var scope = this;

    // Services
    scope.AddressSvc_ = Address;

    // Variables
    scope.buyerId = 'SteveCoCustomer1';
    scope.searchId = null;
    scope.pageId = 1;
    scope.pageSizeId = 100;
    scope.results = undefined;

    // Custom Behaviors
    scope.query = function () {
        scope.results = null;

        scope.AddressSvc_.query(
            scope.buyerId,
            scope.searchId,
            scope.pageId,
            scope.pageSizeId).then(function (data){
                scope.results = data;
        });
    }
}
