
// customerLocationService.js
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
    },
    {
        Id: '6A43DA9E-83AF-485E-8561-AFF0263D2663',
        Location: 'BIRMINGHAM'
    },
    {
        Id: 'AAF52702-2EF1-405A-B562-681516E6064A',
        Location: 'NEWCASTLE'
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

module.exports = CustomerLocationService;
