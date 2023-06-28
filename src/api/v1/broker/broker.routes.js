// Import the Express framework module.
var express = require('express');
const verifyToken = require('../../../middleware/authTokenValidator');
const verifyAppCheckToken = require('../../../middleware/appCheckValidator');
// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var brokerController = require('./broker.controller');

var middleware = [verifyToken, verifyAppCheckToken];


router.get('/getPostions', brokerController.getPostions)
router.get('/getAccountSummary', brokerController.getAccountSummary)
router.get('/getCashStatement',brokerController.getCashStatement)
router.get('/getHoldingStatment' ,brokerController.getHoldingStatment)
router.get('/getOrderHistory', brokerController.getOrderHistory)



router.post('/createCustomer', brokerController.createCustomer)
router.post('/placeOrder',brokerController.placeOrder)


// Export the router object.
module.exports = router;