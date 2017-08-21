
// customerLocationService.js
var utilities = require('./utilities.js');

function CustomerLocationService() {

}

CustomerLocationService.prototype.Errors = {
    NoCustomerIdSupplied: 'No Id has been supplied, cannot find Customer.',
    NoCustomerCouldBeFound: 'No Customer could be found for the given id.'
};

CustomerLocationService.prototype.Customers = [
    {
        Id: '120546B9-C29C-4BC9-897B-0D7CEBA96419',
        Location: 'LONDON'
    },
    {
        Id: '73545248-F8A2-4A8C-84F9-081DF5B05BD0',
        Location: 'LIVERPOOL'
    }
];


CustomerLocationService.prototype.GetAllCustomers = function () {
    return this.Customers;
};

CustomerLocationService.prototype.GetCustomerForId = function (id) {
    if (id === undefined || id === '' || id === null) {
        return {
            error: this.Errors.NoCustomerIdSupplied
        };
    }

    var customerLookup = {};
    for (var i = 0, len = this.Customers.length; i < len; i++) {
        customerLookup[this.Customers[i].Id] = this.Customers[i];
    }

    var customer = customerLookup[id];

    if (customer === undefined || customer === null) {
        return {
            error: this.Errors.NoCustomerCouldBeFound
        };
    }

    return customer;
};

CustomerLocationService.prototype.Api = {
    GetLocationForCustomer: function (request, response) {
        if (request.method === 'GET') {


            utilities.sendResponse(response, { 'Location': 'LONDON' });
        } else {
            utilities.sendResponse(response, 'Not Found', 404);
        }
    }
};

module.exports = CustomerLocationService;
