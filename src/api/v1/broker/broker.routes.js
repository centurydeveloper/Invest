// Import the Express framework module.
var express = require('express');
const verifyToken = require('../../../middleware/authTokenValidator');
const verifyAppCheckToken = require('../../../middleware/appCheckValidator');
// Create a new Router object.
var router = express.Router();

// Import the MedicalReportController module.
var brokerController = require('./broker.controller');

var middleware = [verifyToken, verifyAppCheckToken];


router.post('/createCustomer', brokerController.createCustomer)
router.get('/getPostions',middleware, brokerController.getPostions)
router.get('/getAccountSummary',middleware, brokerController.getAccountSummary)
router.get('/getCashStatement', middleware,brokerController.getCashStatement)
router.get('/getHoldingStatment',middleware ,brokerController.getHoldingStatment)
router.get('/getOrderHistory',middleware, brokerController.getOrderHistory)
router.get('/placeOrder', middleware,brokerController.placeOrder)


// Export the router object.
module.exports = router;