
var assert = require('assert');
var CustomerLocationService = require('../Services/customerLocationService.js');

describe('CustomerLocationService', function () {
    var service;
    var testCustomer = {
        Id: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8',
        Location: 'LEEDS'
    };

    // Before each test runs, supply sample data
    beforeEach(function () {
        service = new CustomerLocationService();
        
        // Clear out the data for testing purposes
        service.Customers = [testCustomer];
    });

    it('GetAllCustomers should not be undefined', function () {
        assert(service.GetAllCustomers() !== undefined);
    });
    it('GetAllCustomers should be of type array', function () {
        assert(typeof service.GetAllCustomers() === typeof []);
    });
    it('GetAllCustomers should not be empty', function () {
        assert(service.GetAllCustomers().length > 0);
    });

    it('GetCustomerForId should return error when no Id supplied', function () {
        var result = service.GetCustomerForId();

        assert(result.error === service.Errors['NoCustomerIdSupplied']);
    });
    it('GetCustomerForId should return undefined when incorrect Id passed', function () {
        var result = service.GetCustomerForId('15');

        assert(result.error === service.Errors['NoCustomerCouldBeFound']);
    });
    it('GetCustomerForId should return a customers data when supplied with a correct Id', function () {
        var result = service.GetCustomerForId('AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8');

        assert(result.Id === testCustomer.Id);
        assert(result.Location === testCustomer.Location);
    });


});