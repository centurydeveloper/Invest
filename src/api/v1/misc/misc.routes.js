// Import the Express framework module.
var express = require('express');

// Create a new Router object.
var router = express.Router();

const verifyToken = require('../../../middleware/authTokenValidator');
const verifyAppCheckToken = require('../../../middleware/appCheckValidator');

var miscController = require('./misc.controller');

var middleware = [verifyToken, verifyAppCheckToken];

router.get('/getApiKeys',middleware, miscController.getApiKeys)

router.get('/getVersion',middleware, miscController.getVersion)


// Export the router object.
module.exports = router;