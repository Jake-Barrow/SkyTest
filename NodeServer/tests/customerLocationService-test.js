
var assert = require('assert');
var customerLocationService = require('./../customerLocationService.js');

describe('CustomerLocationService', function () {

    it('GetAllCustomers should not be undefined', function () {
        var service = new customerLocationService();

        assert(service.GetAllCustomers() !== undefined);
    });
    it('GetAllCustomers should be of type array', function () {
        var service = new customerLocationService();

        assert(typeof service.GetAllCustomers() === typeof []);
    });
    it('GetAllCustomers should not be empty', function () {
        var service = new customerLocationService();

        assert(service.GetAllCustomers().length > 0);
    });

    it('GetCustomerForId should return error when no Id supplied', function () {
        var service = new customerLocationService();

        var result = service.GetCustomerForId();

        assert(result.error === service.Errors['NoCustomerIdSupplied']);
    });
    it('GetCustomerForId should return undefined when incorrect Id passed', function () {
        var service = new customerLocationService();

        var result = service.GetCustomerForId('15');

        assert(result.error === service.Errors['NoCustomerCouldBeFound']);
    });
    it('GetCustomerForId should return a customers data when supplied with a correct Id', function () {
        var service = new customerLocationService();

        var testCustomer = {
            Id: 'AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8',
            Location: 'LEEDS'
        };

        service.Customers.push(testCustomer);

        var result = service.GetCustomerForId('AD12DDE2-94BA-459F-BAA8-F2B4BE3CAEB8');

        assert(result.Id === testCustomer.Id);
        assert(result.Location === testCustomer.Location);
    });


});