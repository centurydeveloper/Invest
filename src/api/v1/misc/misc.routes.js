// Import the Express framework module.
var express = require('express');

// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var miscController = require('./misc.controller');


router.get('/getApiKeys', miscController.getApiKeys)

router.get('/getVersion', miscController.getVersion)


// Export the router object.
module.exports = router;