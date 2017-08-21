
// server.js

// Include modules
var http = require('http');
var url = require('url');
var utilities = require('./utilities.js');
var customerLocationService = require('./customerLocationService.js');

const HOSTNAME = "localhost";
const PORT = 8080;

var routes = {
    '/customerLocationService/getLocationForCustomer': function (req, res) {
        new customerLocationService().GetLocationForCustomer(req, res);
    }
};

// Create the http server.
const server = http.createServer(function (request, response) {
    var urlParts = url.parse(request.url);
    var route = routes[urlParts.pathname];
    if (route) {
        route(request, response);
    } else {
        utilities.sendResponse(response, 'Not Found', 404);
    }
});

// Listen on the 8080 port.
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
