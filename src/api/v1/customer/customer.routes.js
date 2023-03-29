// Import the Express framework module.
var express = require('express');

// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var customerController = require('./customer.controller');

// Define a route to handle GET requests for retrieving all medical reports.
router.get('/checkUser', customerController.checkUser)


// Export the router object.
module.exports = router;