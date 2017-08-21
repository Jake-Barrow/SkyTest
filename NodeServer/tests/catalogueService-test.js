
var assert = require('assert');
var CatalogueService = require('./../catalogueService.js');

describe('CatalogueService', function () {
    var service;

    // Before each test runs, supply sample data
    beforeEach(function () {
        service = new CatalogueService();
                
        service.Locations = ['LEEDS', 'HULL'];
        service.Channels = [
            {
                Category: 'Sports',
                Name: 'Leeds United TV',
                Locations: ['LEEDS']
            },
            {
                Category: 'Sports',
                Name: 'Leeds Rhinos TV',
                Locations: ['LEEDS']
            },
            {
                Category: 'Sports',
                Name: 'Hull TV',
                Locations: ['HULL']
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
            }
        ];
    });

    it('GetChannelsForLocation should not return undefined', function () {
        assert(service.GetChannelsForLocation() !== undefined);
    });
    it('GetChannelsForLocation should return error when invalid location supplied', function () {
        var result = service.GetChannelsForLocation('MANCHESTER');

        assert(result.error === service.Errors.InvalidLocationSupplied);
    });
    it('GetChannelsForLocation should be of type array', function () {
        assert(typeof service.GetChannelsForLocation() === typeof []);
    });
    it('GetChannelsForLocation should not be empty', function () {
        assert(service.GetChannelsForLocation().length > 0);
    });
    it('GetChannelsForLocation should return items with no location when no location supplied', function () {
        var result = service.GetChannelsForLocation();
        
        assert(typeof result === typeof []);

        // Assert that none of the items in the result have a location
        for (var i = 0; i < result.length; i++) {
            assert(result[i].Locations.length === 0);
        }
    });
    it('GetChannelsForLocation should return items with no location and only the correct location', function () {
        var location = 'LEEDS';
        var result = service.GetChannelsForLocation(location);

        assert(typeof result === typeof []);

        // Assert that none of the items in the result have a location
        for (var i = 0; i < result.length; i++) {
            assert(result[i].Locations.length === 0 || result[i].Locations.indexOf(location) !== -1);
        }
    });

});

