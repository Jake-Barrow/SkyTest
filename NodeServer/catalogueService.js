

// catalogueService.js
var utilities = require('./utilities.js');

function CatalogueService() {

}

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

module.exports = CatalogueService;