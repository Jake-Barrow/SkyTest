
// server.js

// Constants for the App
const HOSTNAME = "localhost";
const PORT = 8080;

// Include modules
var customerLocationService = require('./Node/Services/customerLocationService.js');
var catalogueService = require('./Node/Services/catalogueService.js');
var express = require('express');
var cookieParser = require('cookie-parser')

// Initialize the app
var app = express();

// Set Middleware
app.use(cookieParser());

// Set App Endpoints
// TODO: Change this to be a POST so that it will be more secure
app.get('/authenticate/:id', function (req, res) {
    res.cookie('customerId', req.params.id, { maxAge: 900000, httpOnly: true });
    res.end('Authenticated Successfully');
});

// Customer Location Service
app.get('/customerLocationService/getLocationForCustomer/', function (req, res) {
    var service = new customerLocationService();
    var customerId = req.cookies.customerId;

    res.end(JSON.stringify(service.GetCustomerForId(customerId)));
});

// Catalogue Service
app.get('/catalogueService/getChannelsForLocation', function (req, res) {
    var service = new catalogueService();

    res.end(JSON.stringify(service.GetChannelsForLocation()));
});
app.get('/catalogueService/getChannelsForLocation/:location', function (req, res) {
    var service = new catalogueService();

    res.end(JSON.stringify(service.GetChannelsForLocation(req.params.location)));
});

// Listen on the 8080 port.
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
