// Import the Express framework module.
var express = require('express');

// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var brokerController = require('./broker.controller');


router.post('/createCustomer', brokerController.createCustomer)
router.get('/getPostions', brokerController.getPostions)
router.get('/getAccountSummary', brokerController.getAccountSummary)
router.get('/getCashStatement', brokerController.getCashStatement)
router.get('/getHoldingStatment', brokerController.getHoldingStatment)
router.get('/getOrderHistory', brokerController.getOrderHistory)
router.get('/placeOrder', brokerController.placeOrder)


// Export the router object.
module.exports = router;