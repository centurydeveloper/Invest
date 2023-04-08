// Import the Express framework module.
var express = require('express');

// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var notificationController = require('./notification.controller');


router.post('/sendNow', notificationController.sendNow)
router.post('/sendNowByPhone', notificationController.sendNowByPhone)


// Export the router object.
module.exports = router;