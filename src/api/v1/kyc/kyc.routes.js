// Import the Express framework module.
var express = require('express');
const verifyToken = require('../../../middleware/authTokenValidator');
const verifyAppCheckToken = require('../../../middleware/appCheckValidator');
// Create a new Router object.
var router = express.Router();

var middleware = [verifyToken, verifyAppCheckToken];

var KycController = require('./kyc.controller');


router.get('/getAccessToken',middleware, KycController.getAccessToken)
router.get('/getFixedInfo',middleware, KycController.getFixedInfo)
// router.get('/generatePDF', KycController.generatePDF)
router.post('/SSWebhook', KycController.SSWebhook)


// Export the router object.
module.exports = router;