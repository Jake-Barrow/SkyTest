

// catalogueService.js
function CatalogueService() {

}

CatalogueService.prototype.Errors = {
    InvalidLocationSupplied: 'Supplied location is not valid.'
};

CatalogueService.prototype.Locations = [
    'LONDON',
    'LIVERPOOL'
];

CatalogueService.prototype.Channels = [
    {
        Category: 'Sports',
        Name: 'Arsenal TV',
        Locations: ['LONDON']
    },
    {
        Category: 'Sports',
        Name: 'Chelsea TV',
        Locations: ['LONDON']
    },
    {
        Category: 'Sports',
        Name: 'Liverpool TV',
        Locations: ['LIVERPOOL']
    },
    {
        Category: 'News',
        Name: 'Sky News',
        Locations: []
    },
    {
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