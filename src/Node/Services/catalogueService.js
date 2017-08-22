

// catalogueService.js
function CatalogueService() {

}

CatalogueService.prototype.Errors = {
    InvalidLocationSupplied: 'Supplied location is not valid.'
};

CatalogueService.prototype.Locations = [
    'LONDON',
    'LIVERPOOL',
    'NEWCASTLE'
];

CatalogueService.prototype.Channels = [
    {
        Id: 'E45A8C4E-E0C6-417E-8C0F-84D1713BAD74',
        Category: 'Sports',
        Name: 'Arsenal TV',
        Locations: ['LONDON']
    },
    {
        Id: 'E9CF1576-E884-4E53-A6D8-B34573FEB8F4',
        Category: 'Sports',
        Name: 'Chelsea TV',
        Locations: ['LONDON']
    },
    {
        Id: 'DAB3436A-D7BC-4936-B2E7-37A1FE3298BF',
        Category: 'Sports',
        Name: 'Liverpool TV',
        Locations: ['LIVERPOOL']
    },
    {
        Id: 'EF3E3347-EFCA-4228-BDE2-BA950B8A4DAE',
        Category: 'News',
        Name: 'Sky News',
        Locations: []
    },
    {
        Id: '66F22FFA-C30C-45A3-ACB2-582F114BE06E',
        Category: 'News',
        Name: 'Sky Sports News',
        Locations: []
    },
];

CatalogueService.prototype.GetChannelsForLocation = function (locationId) {
    if (locationId !== undefined && locationId !== '' && this.Locations.indexOf(locationId) === -1) {
        return {
            error: this.Errors.InvalidLocationSupplied
        };
    }

    // This isn't exactly efficient, but with the smaller number of channels available it's acceptable.
    var channels = [];

    for (var i = 0; i < this.Channels.length; i++) {
        var channel = this.Channels[i];

        if (channel.Locations.length === 0 || channel.Locations.indexOf(locationId) !== -1) {
            channels.push(channel);
        }
    }

    return channels;
};

module.exports = CatalogueService;