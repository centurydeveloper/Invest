// Import the Express framework module.
var express = require('express');

// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var KycController = require('./kyc.controller');


router.get('/getAccessToken', KycController.getAccessToken)
router.get('/getFixedInfo', KycController.getFixedInfo)
// router.get('/generatePDF', KycController.generatePDF)
router.post('/SSWebhook', KycController.SSWebhook)


// Export the router object.
module.exports = router;