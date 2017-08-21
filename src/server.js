
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
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Set App Endpoints

app.get('/customers', function (req, res) {
    var service = new customerLocationService();

    res.end(JSON.stringify(service.GetAllCustomers()));
});

// TODO: Change this to be a POST so that it will be more secure
app.get('/authenticate/:id', function (req, res) {
    res.cookie('customerId', req.params.id, { maxAge: 900000 });
    res.end('Authenticated Successfully');
});

// Customer Location Service
app.get('/customerLocationService/getLocationForCustomer/', function (req, res) {
    var service = new customerLocationService();
    var customerId = req.cookies.customerId;

    res.end(JSON.stringify(service.GetCustomerForId(customerId)));
});
app.get('/customerLocationService/getLocationForCustomer/:id', function (req, res) {
    var service = new customerLocationService();

    res.end(JSON.stringify(service.GetCustomerForId(req.params.id)));
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
